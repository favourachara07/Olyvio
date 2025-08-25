import Card from "@/app/components/ui/Card";

const data = [
  { name: "Alex Johnson", role: "Student", email: "alex@uni.edu", status: "Active" },
  { name: "Maya Patel", role: "Expert", email: "maya@olyvio.com", status: "Active" },
  { name: "Leo Kim", role: "Student", email: "leo@uni.edu", status: "Suspended" },
];

export default function AdminUsersPage() {
  return (
    <Card className="overflow-hidden">
      <div className="px-6 pt-5 pb-4">
        <h3 className="text-lg font-semibold">Users</h3>
        <p className="text-sm text-slate-600">Manage students and experts.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left font-medium px-6 py-3">Name</th>
              <th className="text-left font-medium px-6 py-3">Role</th>
              <th className="text-left font-medium px-6 py-3">Email</th>
              <th className="text-left font-medium px-6 py-3">Status</th>
              <th className="text-left font-medium px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((u, i) => (
              <tr key={i} className="border-t border-slate-100">
                <td className="px-6 py-3">{u.name}</td>
                <td className="px-6 py-3">{u.role}</td>
                <td className="px-6 py-3">{u.email}</td>
                <td className="px-6 py-3">{u.status}</td>
                <td className="px-6 py-3"><button className="text-indigo-600 hover:text-indigo-500">Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
