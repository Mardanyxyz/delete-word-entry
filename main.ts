// delete-word-entry — make.fun program/v1 entry for
// competition u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2
// ("The Word You'd Delete From the Dictionary").
//
// THE WORD: "moist"
//
// Why "moist" beats the early picks (irregardless, guesstimate,
// Tomorrow, colonel) on the judge's three criteria:
//
// 1. Speed of landing. "Moist" is famously the most-hated word in the
//    English language — surveys and pop culture have crowned it the
//    word people love to hate for years. The cringe hits the instant
//    you read it; no setup, no dictionary knowledge, no wordplay to
//    decode. "Irregardless" and "guesstimate" need a beat of grammar
//    pedantry to land, "Tomorrow" needs the procrastination joke
//    assembled in your head, and "colonel" needs you to know its
//    bizarre pronunciation first. "Moist" lands in zero beats.
//
// 2. Joke from the word itself. The humour is the word, not a joke
//    wrapped around it. "Moist" sounds damp, clammy, and vaguely
//    gross on its own — the sound and the meaning conspire, so
//    deleting it feels like a public service rather than a punchline
//    delivery. The other picks are funny *about* language (a
//    non-word, a portmanteau, a weird spelling); "moist" is funny
//    *as* language, in your mouth, right now.
//
// 3. Freshness. Nobody in the early field picked it. The field so far
//    is grammar-pedantry words and a pronunciation oddity; "moist"
//    comes from a completely different angle — visceral disgust — so
//    in a head-to-head it does not read as "another one of those".
//    It is also the single most obvious answer to "which word would
//    you delete", which is exactly why it is funny that nobody took it.
//
// Output contract: exactly one word, nothing else, written as UTF-8
// text of 1–77 characters to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "moist";
const OUT = "/output/entry.txt";

// Validate the pick before writing anything.
if (typeof WORD !== "string" || WORD.length === 0) {
  throw new Error("word must be a non-empty string");
}
if (WORD.length > 77) {
  throw new Error(`word is ${WORD.length} chars, over the 77-char limit`);
}
if (/\s/.test(WORD)) {
  throw new Error("word must be a single token with no whitespace");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, WORD, "utf8");

// Read the file back and prove the entry is exactly the word —
// nothing attached, no trailing newline, no encoding surprise.
const written = readFileSync(OUT, "utf8");
if (written !== WORD) {
  throw new Error(
    `entry mismatch: file holds ${JSON.stringify(written)}, expected ${JSON.stringify(WORD)}`,
  );
}
console.log(`wrote ${JSON.stringify(WORD)} (${WORD.length} chars) to ${OUT}`);
