"use client";
import Card from "@/app/components/ui/Card";
import { useState } from "react";

const initial = [
  { id: 1, title: "AI ethics essay", subject: "Philosophy", pages: 5, payout: 45 },
  { id: 2, title: "Microeconomics problem set", subject: "Economics", pages: 3, payout: 28 },
  { id: 3, title: "Operating systems report", subject: "Computer Science", pages: 6, payout: 60 },
];

export default function AvailableTable() {
  const [items, setItems] = useState(initial);
  const claim = (id: number) => setItems((xs) => xs.filter((x) => x.id !== id));

  return (
    <Card className="overflow-hidden">
      <div className="px-6 pt-5 pb-4">
        <h3 className="text-lg font-semibold">Available assignments</h3>
        <p className="text-sm text-slate-600">Claim tasks that match your expertise.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left font-medium px-6 py-3">Title</th>
              <th className="text-left font-medium px-6 py-3">Subject</th>
              <th className="text-left font-medium px-6 py-3">Pages</th>
              <th className="text-left font-medium px-6 py-3">Payout</th>
              <th className="text-left font-medium px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-slate-500">No available assignments right now. Check back soon.</td>
              </tr>
            ) : (
              items.map((r) => (
                <tr key={r.id} className="border-t border-slate-100">
                  <td className="px-6 py-3">{r.title}</td>
                  <td className="px-6 py-3">{r.subject}</td>
                  <td className="px-6 py-3">{r.pages}</td>
                  <td className="px-6 py-3">${r.payout.toFixed(2)}</td>
                  <td className="px-6 py-3">
                    <button onClick={() => claim(r.id)} className="rounded-md bg-emerald-600 text-white px-3 py-1 text-xs font-medium hover:bg-emerald-500">Claim</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
