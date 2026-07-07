import { useState } from "react";
import { dataEx } from "../data/data";

export default function Ex02() {
  // 전체를 클릭하면 데이터 배열 전체를 반환 /
  // 특정 탭메뉴를 클릭하면 해당 탭메뉴의 이름에 맞는 데이터를 필터링 하여 반환
  const [filter, setFilter] = useState("all");

  const filterList =
    filter === "all"
      ? dataEx
      : dataEx.filter((item) => item.category === filter);

  return (
    <div
      className="
        h-screen
        flex
        flex-col
        items-center
        justify-center
        bg-gray-300
        space-y-4
        "
    >
      {/* 필터 버튼 */}
      <div className="flex gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`
            cursor-pointer
            px-3 
            py-1 
            rounded
           
            ${filter === "all" ? "bg-red-400 text-white" : "bg-white text-black"}
            `}
        >
          전체
        </button>
        <button
          onClick={() => setFilter("portal")}
          className={`
            cursor-pointer
            px-3 
            py-1 
            rounded
            ${filter === "portal" ? "bg-red-400 text-white" : " bg-white text-black"}
            `}
        >
          포털
        </button>
        <button
          onClick={() => setFilter("video")}
          className={`
            cursor-pointer
            px-3 
            py-1 
            rounded
            ${filter === "video" ? "bg-red-400 text-white" : " bg-white text-black"}
            `}
        >
          영상
        </button>
        <button
          onClick={() => setFilter("sns")}
          className={`
            cursor-pointer
            px-3 
            py-1 
            rounded
            ${filter === "sns" ? "bg-red-400 text-white" : " bg-white text-black"}
            `}
        >
          sns
        </button>
      </div>

      {/* 컨텐츠 */}
      <div className="w-80 space-y-3">
        {filterList.map((item) => (
          <a
            key={item.id}
            className="
            block
            bg-white
            p-4
            rounded-lg 
            shadow
        "
            href={item.url}
          >
            <h2 className="text-[22px] font-bold">{item.title}</h2>
            <p className="text-gray-500 mt-4">{item.descritpion}</p>
          </a>
        ))}
      </div>
    </div>
  );
}