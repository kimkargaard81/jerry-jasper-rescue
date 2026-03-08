"use client";
import { ReactNode, useState } from "react";

export default function PuzzleFrame({
  title, scene, children, hint
}: { title: string; scene: string; hint?: string; children: ReactNode; }) {
  const [showHint, setShowHint] = useState(false);
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-extrabold text-indigo-700">{title}</h1>
      <p className="mt-2 text-slate-700">{scene}</p>
      <div className="mt-4">{children}</div>
      {hint && (
        <button
          className="mt-4 text-sm text-indigo-700 underline"
          onClick={() => setShowHint(v => !v)}
        >
          {showHint ? "Hide hint" : "Need a hint?"}
        </button>
      )}
      {showHint && <p className="mt-2 italic text-slate-600">{hint}</p>}
    </div>
  );
}
