"use client";
import { useState } from "react";
import PuzzleFrame from "../PuzzleFrame";
import { normalize } from "@/lib/puzzles";
import { markSolved } from "@/lib/progress";

export default function WordLock({ puzzle }: { puzzle: any }) {
  const [guess, setGuess] = useState("");
  const [done, setDone] = useState(false);
  const norm = (s: string) => (puzzle.normalize ? normalize(s) : s);
  const check = () => {
    const ok = norm(guess) === norm(puzzle.answer);
    if (ok) { markSolved(puzzle.id, puzzle.reward); setDone(true); }
    else alert("Not quite—try again!");
  };

  return (
    <PuzzleFrame title={puzzle.title} scene={puzzle.scene} hint={puzzle.hint}>
      <p className="mb-2">{puzzle.prompt}</p>
      <p className="p-3 bg-slate-100 rounded font-mono">{puzzle.body}</p>
      {!done ? (
        <div className="mt-4 flex gap-2">
          <input
            className="border rounded px-2 py-1 w-full"
            placeholder="Type the secret word"
            value={guess} onChange={e => setGuess(e.target.value)}
          />
          <button className="bg-indigo-600 text-white px-3 py-1 rounded" onClick={check}>
            Unlock
          </button>
        </div>
      ) : <p className="mt-4 text-green-700 font-semibold">Unlocked! You got a key 🗝️</p>}
    </PuzzleFrame>
  );
}
