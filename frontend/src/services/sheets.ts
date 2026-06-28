import { WishlistItem } from "@/data/wishlist";

export interface SponsorItem {
  item: string;
  description: string;
  estCost: string;
  purchaseLink: string;
}

export function parseSponsorCSV(csvText: string): SponsorItem[] {
  const lines = csvText.split(/\r?\n/);
  if (lines.length === 0) return [];

  // Simple state machine parser to handle commas within quotes and escaped quotes
  const parseLine = (line: string): string[] => {
    const result: string[] = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          current += '"';
          i++; // skip next quote
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        result.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result;
  };

  const parsedLines = lines
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(parseLine);

  if (parsedLines.length === 0) return [];

  const headers = parsedLines[0].map(h => h.toLowerCase().trim());
  const itemIndex = headers.indexOf("item");
  const descIndex = headers.indexOf("description");
  const costIndex = headers.indexOf("est cost");
  const linkIndex = headers.indexOf("purchase link");

  // Fallback order helper: if any header is not matched, we fallback to default indices
  const getVal = (row: string[], index: number, fallbackIndex: number) => {
    const idx = index !== -1 ? index : fallbackIndex;
    return row[idx] || "";
  };

  const items: SponsorItem[] = [];

  for (let i = 1; i < parsedLines.length; i++) {
    const row = parsedLines[i];
    const item = getVal(row, itemIndex, 0);
    const description = getVal(row, descIndex, 1);
    const estCost = getVal(row, costIndex, 2);
    const purchaseLink = getVal(row, linkIndex, 3);

    // Skip row if it has no content in key fields
    if (!item && !description && !estCost) continue;

    items.push({
      item,
      description,
      estCost,
      purchaseLink,
    });
  }

  return items;
}

export function formatDate(date: Date): string {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  return `Last updated: ${day} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
}

export async function fetchSponsorItems(): Promise<{ items: SponsorItem[]; lastUpdated: string | null }> {
  const url = process.env.NEXT_PUBLIC_SPONSOR_SHEET_URL;
  if (!url) {
    console.warn("NEXT_PUBLIC_SPONSOR_SHEET_URL environment variable is not set.");
    return { items: [], lastUpdated: null };
  }

  let lastUpdated: string | null = null;

  // 1. Try to detect the Google Sheets redirect path timestamp
  try {
    const redirectRes = await fetch(url, {
      method: "HEAD",
      redirect: "manual",
      cache: "no-store",
    });
    const location = redirectRes.headers.get("location");
    if (location) {
      const match = location.match(/\/pub\/[^\/]+\/[^\/]+\/(\d+)\//);
      if (match && match[1]) {
        const timestamp = parseInt(match[1], 10);
        if (!isNaN(timestamp)) {
          lastUpdated = formatDate(new Date(timestamp));
        }
      }
    }
  } catch (err) {
    // Ignore redirect fetching errors
  }

  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch sponsor CSV: ${response.statusText}`);
    }

    // 2. Fallback to Last-Modified header if redirect check failed
    if (!lastUpdated) {
      const lastModifiedHeader = response.headers.get("last-modified");
      if (lastModifiedHeader) {
        const parsedDate = new Date(lastModifiedHeader);
        if (!isNaN(parsedDate.getTime())) {
          lastUpdated = formatDate(parsedDate);
        }
      }
    }

    const csvText = await response.text();
    const items = parseSponsorCSV(csvText);
    return { items, lastUpdated };
  } catch (error) {
    console.error("Error fetching/parsing sponsor CSV:", error);
    return { items: [], lastUpdated: null };
  }
}

export async function getWishlistItems(): Promise<{ items: WishlistItem[]; lastUpdated: string | null }> {
  const { items, lastUpdated } = await fetchSponsorItems();
  const mapped = items.map((item, idx) => {
    let price = item.estCost;
    // Format the price nicely if it is a pure numeric string (e.g. "600" -> "₹600")
    if (price && !price.startsWith("₹") && !isNaN(Number(price.replace(/,/g, "")))) {
      price = "₹" + Number(price.replace(/,/g, "")).toLocaleString("en-IN");
    }

    return {
      id: idx,
      name: item.item,
      description: item.description,
      price: price || "TBD",
      sponsored: false,
      buyUrl: item.purchaseLink || "#",
    };
  });
  return { items: mapped, lastUpdated };
}
