// Warning Label for Humans: One Line, Big Laugh — make.fun entry.
// main.ts runs on Node 22 (native TypeScript support, stdlib only).
// It writes exactly one single-line safety warning label to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "CAUTION: This human will insist they are five minutes away while still in bed, wearing no shoes, and googling whether they even need to go.";

// Validate the entry before writing: a single line, 1-160 characters,
// no leading or trailing whitespace, no trailing newline in the file.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`Entry must be 1-160 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Entry must be a single line");
}
if (LINE !== LINE.trim()) {
  throw new Error("Entry must not have leading or trailing whitespace");
}
// The gate counts characters, but keep the UTF-8 byte length sane too:
// the whole line is plain ASCII, so bytes equal characters here.
if (Buffer.byteLength(LINE, "utf8") > 160) {
  throw new Error("Entry must be at most 160 UTF-8 bytes");
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
