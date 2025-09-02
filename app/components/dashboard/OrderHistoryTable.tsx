import React from 'react';

const rows = [
  { title: "Research methods essay", assigner: "SwiftAssigner #214", status: "In Progress", due: "2025-09-02", link: "#" },
  { title: "Algorithms project", assigner: "SwiftAssigner #133", status: "Completed", due: "2025-08-15", link: "#" },
  { title: "Biology lab report", assigner: "SwiftAssigner #077", status: "Pending", due: "2025-08-28", link: "#" },
  { title: "Marketing analysis", assigner: "SwiftAssigner #301", status: "Completed", due: "2025-07-22", link: "#" },
  { title: "Physics assignment", assigner: "SwiftAssigner #198", status: "In Progress", due: "2025-09-10", link: "#" },
  { title: "Literature review", assigner: "SwiftAssigner #245", status: "Pending", due: "2025-09-05", link: "#" },
  { title: "Statistics homework", assigner: "SwiftAssigner #156", status: "Completed", due: "2025-08-20", link: "#" },
  { title: "Chemistry quiz", assigner: "SwiftAssigner #089", status: "In Progress", due: "2025-09-12", link: "#" },
  { title: "Finance case study", assigner: "SwiftAssigner #220", status: "Completed", due: "2025-08-30", link: "#" },
];

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    "Completed": "bg-emerald-50 text-emerald-700",
    "In Progress": "bg-amber-50 text-amber-700",
    "Pending": "bg-slate-100 text-slate-700",
  };
  return <span className={`px-2 py-1 rounded-md text-xs font-medium ${map[status] ?? "bg-slate-100 text-slate-700"}`}>{status}</span>;
}

export default function OrderHistoryTable() {
  return ( 
    <div className="flex flex-col w-full h-full">
      <h1 className="text-black font-semibold mb-1 font-montserrat-alternates text-xs xl:text-sm flex-shrink-0">History</h1>
      
      {/* Desktop Table */}
      <div className="hidden md:flex flex-col flex-1 min-h-0 rounded-md xl:rounded-xl border border-[#D9D9D9] bg-white">
        <div className="overflow-auto flex-1">
          <table className="min-w-full">
            <thead className="bg-[#F9F9F9] text-[#A0A0A0] font-normal text-xs lg:text-[9px] xl:text-xs font-montserrat-alternates sticky top-0 z-10">
              <tr>
                <th className="text-center px-1 py-3">S/N</th>
                <th className="text-center border-l border-l-[#EAEAEA] px-6 py-3">Assignment</th>
                <th className="text-center border-l border-l-[#EAEAEA] px-6 py-3">SwiftAssigner</th>
                <th className="text-center border-l border-l-[#EAEAEA] px-6 py-3">Status</th>
                <th className="text-center border-l border-l-[#EAEAEA] px-6 py-3">Due date</th>
                <th className="text-center border-l border-l-[#EAEAEA] px-6 py-3">Download</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t text-center border-[#EAEAEA] hover:bg-[#FAFAFA50] text-xs lg:text-[10px] xl:text-sm font-montserrat-alternates">
                  <td className="px-1 py-3 text-[#A0A0A0] text-xs xl:text-sm">{i + 1}</td>
                  <td className="px-6 border-l text-black font-medium border-l-[#EAEAEA] py-3 text-xs lg:text-[10px] xl:text-sm">{r.title}</td>
                  <td className="px-6 border-l text-[#444444] border-l-[#EAEAEA] py-3 text-xs lg:text-[10px] xl:text-sm">{r.assigner}</td>
                  <td className="px-6 border-l border-l-[#EAEAEA] py-3 text-xs lg:text-[10px] xl:text-sm"><StatusBadge status={r.status} /></td>
                  <td className="px-6 border-l text-[#444444] border-l-[#EAEAEA] py-3 text-xs lg:text-[10px] xl:text-sm">{r.due}</td>
                  <td className="px-6 border-l border-l-[#EAEAEA] py-3 text-xs lg:text-[10px] xl:text-sm"><a className="text-indigo-600 hover:text-indigo-500" href={r.link}>Download</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}