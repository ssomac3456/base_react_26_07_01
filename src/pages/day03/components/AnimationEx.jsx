export default function AnimationEx() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-xl font-bold mb-3">Spin</h2>
        <div className="w-20 h-20 bg-sky-300 rounded-2xl animate-spin"></div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3">Ping</h2>
        <div className="w-20 h-20 bg-sky-300 rounded-2xl animate-ping"></div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3">Pulse</h2>
        <div className="w-20 h-20 bg-sky-300 rounded-2xl animate-pulse"></div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3">Bounce</h2>
        <div className="w-20 h-20 bg-sky-300 rounded-2xl animate-bounce"></div>
      </div>
    </div>
  );
}