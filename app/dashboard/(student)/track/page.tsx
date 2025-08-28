import Card from "@/app/components/ui/Card";
import StatusTimeline from "@/app/components/dashboard/StatusTimeline";

export default function StudentTrackPage() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold">Order tracking</h3>
        <p className="text-sm text-slate-600">Follow your assignment’s progress in real-time.</p>
        <div className="mt-6">
          <StatusTimeline initial={2} />
        </div>
      </Card>
    </div>
  );
}
