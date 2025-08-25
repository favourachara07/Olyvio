"use client";
import { useState } from "react";
import FileDropzone from "@/app/components/ui/FileDropzone";
import Card from "@/app/components/ui/Card";

export default function AssignmentForm() {
  const [services, setServices] = useState<string[]>([]);
  const toggle = (k: string) => setServices((s) => (s.includes(k) ? s.filter((i) => i !== k) : [...s, k]));

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold">Submit new assignment</h3>
      <p className="text-sm text-slate-600">Provide details to get matched with a SwiftAssigner.</p>

      <form className="mt-6 grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Title</label>
            <input required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Research methods essay" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Subject</label>
            <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Computer Science</option>
              <option>Economics</option>
              <option>Biology</option>
              <option>Literature</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Description</label>
          <textarea rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Instructions, citations, rubric..." />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Writing style</label>
            <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>APA</option>
              <option>MLA</option>
              <option>Chicago</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Urgency</label>
            <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Flexible</option>
              <option>48 hours</option>
              <option>24 hours</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Pages</label>
            <input type="number" min={1} defaultValue={3} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Additional services</label>
          <div className="mt-2 grid sm:grid-cols-3 gap-2 text-sm">
            {[
              { k: "plagiarism", label: "Plagiarism report" },
              { k: "powerpoint", label: "PowerPoint slides" },
              { k: "priority", label: "Priority delivery" },
            ].map((opt) => (
              <label key={opt.k} className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
                <input type="checkbox" checked={services.includes(opt.k)} onChange={() => toggle(opt.k)} />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Attachments</label>
          <div className="mt-2"><FileDropzone /></div>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button type="button" className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50">Save draft</button>
          <button type="submit" className="rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-500">Submit</button>
        </div>
      </form>
    </Card>
  );
}
