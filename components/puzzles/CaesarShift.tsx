"use client";
import { useState } from "react";
import PuzzleFrame from "../PuzzleFrame";
import { normalize } from "@/lib/puzzles";
import { markSolved } from "@/lib/progress";

export default function CaesarShift({ puzzle }: { puzzle: any }) {
  const [guess, setGuess] = useState("");
  const norm = (s: string) => (puzzle.normalize ? normalize(s) : s);

  const check = () => {
    if (norm(guess) === norm(puzzle.answer)) {
      markSolved(puzzle.id, puzzle.reward);
      alert("Correct! Another key 🗝️");
    } else {
      alert("Hmm—check your shift!");
    }
  };

  return (
    <PuzzleFrame title={puzzle.title} scene={puzzle.scene} hint={puzzle.hint}>
      <p className="p-3 bg-slate-100 rounded font-mono">{puzzle.cipherText}</p>
      <div className="mt-4 flex gap-2">
        <input
          className="border rounded px-2 py-1 w-full"
          placeholder="Decoded message"
          value={guess} onChange={e => setGuess(e.target.value)}
        />
        <button className="bg-indigo-600 text-white px-3 py-1 rounded" onClick={check}>
          Check
        </button>
      </div>
    </PuzzleFrame>
  );
}
