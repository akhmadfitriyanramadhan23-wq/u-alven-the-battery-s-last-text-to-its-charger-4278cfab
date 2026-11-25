import { mkdirSync, writeFileSync } from "node:fs";

// The battery's last text to its charger: a spiteful goodbye. Three
// beats — toothbrush, watch, vape all charged first — then the punch
// lands in the final words, on the toaster. Beyond the obvious
// dying-battery complaint: it is a jealousy text, not a plea.
const lines = [
  "You charged your toothbrush, your watch, and your vape, then left me at 1% by the outlet all day. Goodbye. Tell the toaster I loved it more.",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-200 characters and exactly one line.
const codePoints = [...text.replace(/\n$/, "")].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
