"use client";
import PuzzleFrame from "../PuzzleFrame";
import { markSolved } from "@/lib/progress";
import { useRef } from "react";

export default function ImageHotspot({ puzzle }: { puzzle: any }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const click = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const hit = puzzle.hotspots.some((h: any) => {
      const dx = x - h.x, dy = y - h.y;
      return Math.sqrt(dx*dx + dy*dy) <= h.r;
    });
    if (hit) {
      markSolved(puzzle.id, puzzle.reward);
      alert(puzzle.successText || "Nice find!");
    } else {
      alert("Nope—try another spot.");
    }
  };

  return (
    <PuzzleFrame title={puzzle.title} scene={puzzle.scene} hint={puzzle.hint}>
      <div
        ref={containerRef}
        className="relative w-full aspect-video bg-slate-100 rounded overflow-hidden cursor-crosshair"
        onClick={click}
      >
        {/* Simple placeholder: you can replace with <img src={puzzle.image} alt="classroom" /> */}
        <img src={puzzle.image} alt="classroom" className="w-full h-full object-cover" />
      </div>
      <p className="text-sm text-slate-600 mt-2">Click the suspicious place…</p>
    </PuzzleFrame>
  );
}
