"use client";
import { useEffect, useState } from "react";

const STEPS = [
  { key: "payment", label: "Payment Confirmed" },
  { key: "progress", label: "In Progress" },
  { key: "completed", label: "Completed" },
];

type Props = { initial?: number };

export default function StatusTimeline({ initial = 1 }: Props) {
  const [step, setStep] = useState(initial);

  // Demo: auto-advance to show motion; in real app, replace with live updates
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s < 3 ? s + 1 : s)), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      <ol className="relative border-l border-slate-200 ml-3">
        {STEPS.map((s, idx) => {
          const i = idx + 1;
          const state = i < step ? "done" : i === step ? "current" : "upcoming";
          const dot = state === "done" ? "bg-emerald-500" : state === "current" ? "bg-indigo-600" : "bg-slate-300";
          return (
            <li key={s.key} className="mb-8 ml-6">
              <span className={`absolute -left-3 flex h-5 w-5 items-center justify-center rounded-full ring-2 ring-white ${dot}`}></span>
              <h4 className="font-medium">{s.label}</h4>
              <p className="text-sm text-slate-600 mt-1">
                {state === "done" && "Completed"}
                {state === "current" && "Happening now"}
                {state === "upcoming" && "Queued"}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
