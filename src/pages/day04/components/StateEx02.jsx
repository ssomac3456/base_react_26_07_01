import { useState } from "react";

export default function StateEx02() {
  const [count, setCount] = useState(1);

  const price = 12000;
  const totalPrice = count * price;

  const hPlus = () => setCount((prev) => prev + 1);
  const hMinus = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-64 text-center space-y-4">
        {/* 수량 */}
        <div className="text-3xl font-bold">{count}</div>
        {/* 버튼 */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={hPlus}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition "
          >
            +
          </button>
          <button
            onClick={hMinus}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition "
          >
            -
          </button>
        </div>
        <div>단가:{price.toLocaleString()}원</div>
        <div>총:{totalPrice.toLocaleString()}원</div>
      </div>
    </div>
  );
}
