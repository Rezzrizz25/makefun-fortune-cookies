// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "You will find the answer in the logs you never read — and the bug will be in the line you swore you already checked.";

if (!ENTRY || ENTRY.includes("\n") || ENTRY.length > 200) {
  throw new Error("ENTRY must be a non-empty single line of at most 200 characters.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} characters)`);
