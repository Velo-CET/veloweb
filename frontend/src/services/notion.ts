import { Client } from "@notionhq/client";
import { WishlistItem } from "@/data/wishlist";

// Initialize the Notion client. It's safe to do this as this module runs on the server side in Next.js.
const getNotionClient = () => {
  const apiKey = process.env.NOTION_API_KEY;
  if (!apiKey) {
    throw new Error("NOTION_API_KEY is not defined in environment variables.");
  }
  return new Client({ auth: apiKey });
};

export async function getWishlistItems(): Promise<WishlistItem[]> {
  const dataSourceId = process.env.NOTION_DATA_SOURCE_ID;
  if (!dataSourceId) {
    throw new Error("NOTION_DATA_SOURCE_ID is not defined in environment variables.");
  }

  const notion = getNotionClient();

  // Query the data source.
  // In this client version, querying databases created from a data source
  // is performed using the `notion.dataSources.query` API.
  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
  });

  const results = response.results || response;
  if (!Array.isArray(results)) {
    throw new Error("Invalid response format received from Notion API.");
  }

  const items: WishlistItem[] = [];

  for (const page of results) {
    // Ensure we are working with a page object that has properties.
    if (!page || page.object !== "page" || !("properties" in page)) {
      continue;
    }

    const props = (page as any).properties;

    // 1. Extract Item Name (Title)
    const nameProp = props.Item;
    let name = "";
    if (nameProp && nameProp.type === "title" && Array.isArray(nameProp.title)) {
      name = nameProp.title.map((t: any) => t.plain_text).join("").trim();
    }

    // Skip empty rows.
    if (!name) {
      continue;
    }

    // 2. Extract Description (Rich Text)
    const descProp = props.Description;
    let description = "";
    if (descProp && descProp.type === "rich_text" && Array.isArray(descProp.rich_text)) {
      description = descProp.rich_text.map((t: any) => t.plain_text).join("").trim();
    }

    // 3. Extract Estimated cost (Rich Text)
    const costProp = props["Estimated cost"];
    let price = "";
    if (costProp && costProp.type === "rich_text" && Array.isArray(costProp.rich_text)) {
      price = costProp.rich_text.map((t: any) => t.plain_text).join("").trim();
    }

    // Format the price nicely if it is a pure numeric string (e.g. "600" -> "₹600")
    if (price && !price.startsWith("₹") && !isNaN(Number(price.replace(/,/g, "")))) {
      price = "₹" + Number(price.replace(/,/g, "")).toLocaleString("en-IN");
    }

    // 4. Extract Link (URL)
    const linkProp = props.Link;
    let buyUrl = "#";
    if (linkProp && linkProp.type === "url" && linkProp.url) {
      buyUrl = linkProp.url;
    }

    items.push({
      id: page.id,
      name,
      description,
      price: price || "TBD", // default to TBD if price is empty
      sponsored: false, // Default to false as it is not a field in the Notion source table
      buyUrl,
    });
  }

  return items;
}
