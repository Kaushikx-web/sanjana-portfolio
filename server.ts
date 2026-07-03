import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Enable JSON request body parsing
  app.use(express.json());

  // Google Sheets API proxy endpoints
  app.post("/api/sheets/create", async (req, res) => {
    try {
      const { title, token } = req.body;
      if (!token) {
        return res.status(401).json({ error: "Missing Google access token. Please sign in again." });
      }

      // 1. Create Spreadsheet server-side (avoids browser CORS block)
      const createResponse = await fetch("https://sheets.googleapis.com/v4/spreadsheets", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          properties: {
            title: title || "V Sanjana - Portfolio Inquiries",
          },
        }),
      });

      if (!createResponse.ok) {
        const errText = await createResponse.text();
        return res.status(createResponse.status).json({ error: `Failed to create spreadsheet: ${errText}` });
      }

      const spreadsheet = await createResponse.json();
      const spreadsheetId = spreadsheet.spreadsheetId;
      const spreadsheetUrl = spreadsheet.spreadsheetUrl || `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;

      // 2. Initialize Header Row in newly created spreadsheet
      const appendResponse = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A1:append?valueInputOption=USER_ENTERED`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            values: [
              ["Date & Time (UTC)", "Sender Name", "Email Address", "Inquiry Type", "Proposal / Message"]
            ],
          }),
        }
      );

      if (!appendResponse.ok) {
        console.warn("Failed to write header row to spreadsheet server-side.");
      }

      return res.json({
        spreadsheetId,
        spreadsheetUrl,
        title,
      });
    } catch (err: any) {
      console.error("Server Sheets create error:", err);
      return res.status(500).json({ error: err.message || "Internal server error while creating spreadsheet." });
    }
  });

  app.post("/api/sheets/append", async (req, res) => {
    try {
      const { spreadsheetId, inquiries, token } = req.body;
      if (!token) {
        return res.status(401).json({ error: "Missing Google access token. Please sign in again." });
      }
      if (!spreadsheetId) {
        return res.status(400).json({ error: "Missing spreadsheetId parameter." });
      }

      const rows = (inquiries || []).map((inq: any) => [
        inq.created_at || new Date().toISOString(),
        inq.name,
        inq.email,
        inq.project_type,
        inq.message,
      ]);

      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A1:append?valueInputOption=USER_ENTERED`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            values: rows,
          }),
        }
      );

      if (!response.ok) {
        const errText = await response.text();
        return res.status(response.status).json({ error: `Failed to append rows to spreadsheet: ${errText}` });
      }

      return res.json({ success: true });
    } catch (err: any) {
      console.error("Server Sheets append error:", err);
      return res.status(500).json({ error: err.message || "Internal server error while appending to spreadsheet." });
    }
  });

  // Vite dev/prod middleware integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Full-Stack Server running on port ${PORT}`);
  });
}

startServer();
