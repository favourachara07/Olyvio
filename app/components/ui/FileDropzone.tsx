"use client";
import { useCallback, useState } from "react";

type Props = { onFiles?: (files: File[]) => void };

export default function FileDropzone({ onFiles }: Props) {
  const [isOver, setIsOver] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleFiles = useCallback((list: FileList | null) => {
    if (!list) return;
    const fs = Array.from(list);
    setFiles(fs);
    onFiles?.(fs);
  }, [onFiles]);

  return (
    <div
      className={`rounded-xl border-2 border-dashed p-6 text-sm transition ${isOver ? "border-indigo-500 bg-indigo-50/60" : "border-slate-300"}`}
      onDragOver={(e) => { e.preventDefault(); setIsOver(true); }}
      onDragLeave={() => setIsOver(false)}
      onDrop={(e) => { e.preventDefault(); setIsOver(false); handleFiles(e.dataTransfer.files); }}
    >
      <input id="file-input" type="file" className="hidden" multiple onChange={(e) => handleFiles(e.target.files)} />
      <label htmlFor="file-input" className="block cursor-pointer text-center">
        <span className="font-medium text-slate-700">Drag & drop</span> files here, or <span className="text-indigo-600">browse</span>
      </label>
      {files.length > 0 && (
        <ul className="mt-3 grid gap-1 text-xs text-slate-600">
          {files.map((f) => (<li key={f.name}>{f.name} • {(f.size/1024).toFixed(1)} KB</li>))}
        </ul>
      )}
    </div>
  );
}
