import { useState } from "react";

export default function Ex01() {
  const [like, setLike] = useState(false);

  const onLike = () => {
    setLike((prev) => !prev);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-64 text-center space-y-4">
        <button
          onClick={onLike}
          className={`px-4 py-2 rounded transition ${
            like ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
        >
          {like ? "🤍" : "❤"}
        </button>

        <div>{like ? "좋아요 눌림" : "좋아요 안 눌림"}</div>
      </div>
    </div>
  );
}
