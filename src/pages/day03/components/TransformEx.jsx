export default function TransformEx() {
  return (
    <div className="space-y-14 p-10">
      {/* scle */}
      <div>
        <h2 className="text-xl font-bold mb-3">Scale</h2>

        <div className="w-32 h-32 bg-green-300 rounded-lg shadow-lg hover:scale-110 duration-500"></div>
      </div>

      {/* rotate */}
      <div>
        <h2 className="text-xl font-bold mb-3">Rotate</h2>
        <div className="w-32 h-32 bg-green-300 rounded-lg hover:rotate-180 duration-300"></div>
      </div>

      {/* translate */}
      <div>
        <h2 className="text-xl font-bold mb-3">translate</h2>
        <div className="w-32 h-32 bg-green-300 rounded-lg hover:-translate-x-10 duration-300"></div>
      </div>
    </div>
  );
}