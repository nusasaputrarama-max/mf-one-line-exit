// SPDX-License-Identifier: MIT
// The One-Line Exit — a one-line resignation letter.
// main.ts writes the entry to /output/entry.txt and prints it.
// Deterministic: no randomness, no dates, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

// Final entry: three years watering the office plant, and the plant
// got promoted first — so the narrator follows it out the door.
// Specific voice (the plant-waterer), surprise turn (promotion),
// quotable, and reads like a letter someone could actually send.
const ENTRY =
  "I resign effective today: after three years watering the office plant, it got promoted before I did, so I'm following it out the door.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
