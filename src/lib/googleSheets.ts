import { getAccessToken } from "./googleAuth";

export interface SpreadsheetInfo {
  spreadsheetId: string;
  spreadsheetUrl: string;
  title: string;
}

/**
 * Creates a new Google Spreadsheet for Portfolio Inquiries.
 */
export async function createInquiriesSpreadsheet(title = "V Sanjana - Portfolio Inquiries"): Promise<SpreadsheetInfo> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error("No Google access token found. Please sign in again.");
  }

  const response = await fetch("/api/sheets/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, token }),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || "Failed to create spreadsheet.");
  }

  return await response.json();
}

/**
 * Appends multiple inquiries to the designated spreadsheet.
 */
export async function appendInquiriesToSpreadsheet(
  spreadsheetId: string,
  inquiries: Array<{ created_at?: string; name: string; email: string; project_type: string; message: string }>
): Promise<boolean> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error("No Google access token found. Please sign in again.");
  }

  if (inquiries.length === 0) return true;

  const response = await fetch("/api/sheets/append", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ spreadsheetId, inquiries, token }),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || "Failed to sync inquiries to spreadsheet.");
  }

  return true;
}
