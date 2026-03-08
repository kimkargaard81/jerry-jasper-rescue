"use client";
import { getProgress } from "@/lib/progress";
import { useEffect, useState } from "react";

export default function ProgressBar({ total }: { total: number }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const p = getProgress();
    const solved = Object.values(p.solved).filter(Boolean).length;
    setPct(Math.round((solved / Math.max(total, 1)) * 100));
  }, [total]);
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-slate-600 mb-1">
        <span>Progress</span><span>{pct}%</span>
      </div>
      <div className="h-2 bg-slate-200 rounded">
        <div className="h-2 bg-indigo-600 rounded" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
