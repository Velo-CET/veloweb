const path = require("path");
require("dotenv").config({
    path: path.resolve(__dirname, ".env.local"),
});

const { Client } = require("@notionhq/client");

console.log("TOKEN:", process.env.NOTION_API_KEY?.substring(0, 10));

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

async function main() {
    const response = await notion.search({});

    console.log("\n========== RESULTS ==========\n");

    response.results.forEach((item, index) => {
        console.log(`Result ${index + 1}`);
        console.log("Object:", item.object);
        console.log(
            "Title:",
            item.title?.[0]?.plain_text || "(No title)"
        );
        console.log("ID:", item.id);
        console.log("--------------------------------");
    });
}

main().catch(console.error);