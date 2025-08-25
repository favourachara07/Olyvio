export default function WelcomeBanner({ name = "Student" }: { name?: string }) {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Welcome back, {name}</h2>
          <p className="text-sm text-white/90">Let’s get your next task started.</p>
        </div>
        <div className="h-12 w-12 rounded-full bg-white/20" />
      </div>
    </div>
  );
}
