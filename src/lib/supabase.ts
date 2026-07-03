import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://uplejxsmpagoglbkgddv.supabase.co";

// Standard Supabase Anon JWT key for project "uplejxsmpagoglbkgddv"
const JWT_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwbGVqeHNtcGFnb2dsYmtnZGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5NjU4NjcsImV4cCI6MjA5ODU0MTg2N30.ZImXJC9aQje7TRpsJ-Z64DSS0xBOcRIoB-zeshAaL04";

const providedKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
const supabaseAnonKey = (providedKey && providedKey.length > 20) 
  ? providedKey 
  : JWT_ANON_KEY;

const isValidHttpUrl = (url: string) => {
  return url.startsWith("http://") || url.startsWith("https://");
};

// Initialize Supabase only if credentials exist and URL is valid
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey && isValidHttpUrl(supabaseUrl));

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface OrderInput {
  book_id: string;
  book_title: string;
  buyer_name: string;
  buyer_email: string;
  buyer_address: string;
  quantity: number;
  total_price: string;
}

function saveOrderLocally(order: OrderInput) {
  try {
    const existingOrders = JSON.parse(localStorage.getItem("v_sanjana_orders") || "[]");
    const newOrder = {
      ...order,
      id: "local_" + Math.random().toString(36).substr(2, 9),
      created_at: new Date().toISOString()
    };
    existingOrders.push(newOrder);
    localStorage.setItem("v_sanjana_orders", JSON.stringify(existingOrders));
    return { success: true, isFallback: true };
  } catch (e) {
    return { success: false, error: "Failed to store order in local cache." };
  }
}

/**
 * Inserts an order into Supabase or falls back to localStorage if not configured.
 * This ensures the application remains fully interactive and testable immediately!
 */
export async function placeOrder(order: OrderInput): Promise<{ success: boolean; error?: string; isFallback?: boolean }> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("orders")
        .insert([
          {
            book_id: order.book_id,
            book_title: order.book_title,
            buyer_name: order.buyer_name,
            buyer_email: order.buyer_email,
            buyer_address: order.buyer_address,
            quantity: order.quantity,
            total_price: order.total_price
          }
        ]);

      if (error) {
        console.warn("Supabase order insert warning, falling back to local storage:", error);
        return saveOrderLocally(order);
      }
      return { success: true };
    } catch (err: any) {
      console.warn("Supabase connection error, falling back to local storage:", err);
      return saveOrderLocally(order);
    }
  } else {
    return saveOrderLocally(order);
  }
}

export interface InquiryInput {
  name: string;
  email: string;
  project_type: string;
  message: string;
}

function saveInquiryLocally(inquiry: InquiryInput) {
  try {
    const existingInquiries = JSON.parse(localStorage.getItem("v_sanjana_inquiries") || "[]");
    const newInquiry = {
      ...inquiry,
      id: "local_" + Math.random().toString(36).substr(2, 9),
      created_at: new Date().toISOString()
    };
    existingInquiries.push(newInquiry);
    localStorage.setItem("v_sanjana_inquiries", JSON.stringify(existingInquiries));
    return { success: true, isFallback: true };
  } catch (e) {
    return { success: false, error: "Failed to store inquiry in local cache." };
  }
}

/**
 * Inserts an inquiry into Supabase inquiries table or falls back to localStorage if not configured.
 */
export async function submitInquiry(inquiry: InquiryInput): Promise<{ success: boolean; error?: string; isFallback?: boolean }> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("inquiries")
        .insert([
          {
            name: inquiry.name,
            email: inquiry.email,
            project_type: inquiry.project_type,
            message: inquiry.message
          }
        ]);

      if (error) {
        console.warn("Supabase inquiry insert warning, falling back to local storage:", error);
        return saveInquiryLocally(inquiry);
      }
      return { success: true };
    } catch (err: any) {
      console.warn("Supabase connection error, falling back to local storage:", err);
      return saveInquiryLocally(inquiry);
    }
  } else {
    return saveInquiryLocally(inquiry);
  }
}

export interface InquiryRecord {
  id: string | number;
  name: string;
  email: string;
  project_type: string;
  message: string;
  created_at?: string;
  source?: "Supabase" | "Local Storage";
}

/**
 * Fetches and merges inquiries from both Supabase and localStorage.
 */
export async function fetchInquiries(): Promise<InquiryRecord[]> {
  const localInquiries: InquiryRecord[] = JSON.parse(localStorage.getItem("v_sanjana_inquiries") || "[]")
    .map((item: any) => ({ ...item, source: "Local Storage" }));

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("inquiries")
        .select("*")
        .order("id", { ascending: false });

      if (error) {
        console.error("Supabase error fetching inquiries:", error);
        return localInquiries;
      }

      const dbInquiries = (data || []).map((item: any) => ({ ...item, source: "Supabase" as const }));

      // Combine and remove duplicates based on name, email, and message
      const combined = [...dbInquiries];
      for (const local of localInquiries) {
        const exists = combined.some(
          (db) => db.name === local.name && db.email === local.email && db.message === local.message
        );
        if (!exists) {
          combined.push(local);
        }
      }

      // Sort combined by date descending
      return combined.sort((a, b) => {
        const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
        const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
        return dateB - dateA;
      });
    } catch (err: any) {
      console.error("Connection error fetching inquiries:", err);
      return localInquiries;
    }
  } else {
    return localInquiries;
  }
}
