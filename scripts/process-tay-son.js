const fs = require("fs");
const path = require("path");
const { load } = require("cheerio");

const ROOT = path.join(__dirname, "..");
const NEW_RAW = path.join(ROOT, "new-raw");

const files = fs.readdirSync(NEW_RAW).filter(f => f.endsWith(".html"));

console.log(`Found ${files.length} raw files in new-raw:`, files);

files.forEach(file => {
  const filepath = path.join(NEW_RAW, file);
  let raw = fs.readFileSync(filepath, "utf8");
  if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1);
  const $ = load(raw);

  const title = ($("title").text() || "").trim();
  const headline = ($(".headline").text() || "").replace(/\s+/g, " ").trim();
  const deck = ($(".deck-copy").text() || "").replace(/\s+/g, " ").trim();

  console.log(`\n--- ${file} ---`);
  console.log(`Title: ${title}`);
  console.log(`Headline: ${headline}`);
  console.log(`Deck: ${deck.slice(0, 100)}...`);
});
