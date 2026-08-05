const fs = require("fs");
const path = require("path");
const { load } = require("cheerio");

const ROOT = path.join(__dirname, "..");
const NEW_RAW = path.join(ROOT, "new-raw");

const files = fs.readdirSync(NEW_RAW).filter(f => f.endsWith(".html"));

const data = {};

files.forEach(file => {
  const filepath = path.join(NEW_RAW, file);
  let raw = fs.readFileSync(filepath, "utf8");
  if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1);
  const $ = load(raw);

  const title = ($("title").text() || "").trim();
  const headline = ($(".headline, h1").first().text() || "").replace(/\s+/g, " ").trim();
  const deck = ($(".deck-copy, p.italic, p").first().text() || "").replace(/\s+/g, " ").trim();

  // extract tables or compare-table
  const tables = [];
  $("table").each((_, tbl) => {
    const rows = [];
    $(tbl).find("tr").each((_, tr) => {
      const cells = [];
      $(tr).find("th, td").each((_, td) => {
        cells.push($(td).text().replace(/\s+/g, " ").trim());
      });
      if (cells.length) rows.push(cells);
    });
    tables.push(rows);
  });

  data[file] = { title, headline, deck, tables };
});

const scratchDir = path.join(ROOT, "scripts", "temp");
fs.mkdirSync(scratchDir, { recursive: true });
fs.writeFileSync(path.join(scratchDir, "extracted-raw.json"), JSON.stringify(data, null, 2), "utf8");
console.log("Extracted data to scripts/temp/extracted-raw.json");
