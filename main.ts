import { mkdirSync, writeFileSync } from "node:fs";

// The battery's last text to its charger: a jealous goodbye, not a
// plea. Three small betrayals stack up — toothbrush, watch, vape,
// all charged first — then the punch lands in the final words, on
// the toaster. The joke is the envy, not the dying battery.
const lines = [
  "You charged your toothbrush, your watch, and your vape, then left me at 1% by the outlet all day. Goodbye. Tell the toaster I loved it more.",
];

const entryLine = lines[0];
const entryText = lines.join("\n") + "\n";

// Guard: the gate wants exactly one line of 1-200 characters.
// Length is counted in code points on the line itself, so an emoji
// or accented letter counts as one character, and the trailing
// newline we append can never leak into the count.
const lineLength = [...entryLine].length;
const MIN_LINE_LENGTH = 1;
const MAX_LINE_LENGTH = 200;

if (lines.length !== 1) {
  throw new Error(`entry must be exactly one line, got ${lines.length}`);
}
if (!entryLine.trim()) {
  throw new Error("entry must be a non-empty line");
}
if (lineLength < MIN_LINE_LENGTH || lineLength > MAX_LINE_LENGTH) {
  throw new Error(
    `entry must be ${MIN_LINE_LENGTH}-${MAX_LINE_LENGTH} characters, got ${lineLength}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entryText, "utf8");
