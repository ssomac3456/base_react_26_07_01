export default function TailwindEx() {
  return (
    <>
      <div className="w-28 h-28 bg-green-300 my-[20px]"></div>
      <div className="w-[100px] h-[100px] border border-gray-400 m-auto"></div>
      <br />
      {/* ------------------------------------ */}
      <div className="text-3xl font-black text-red-400">글자 스타일</div>
      <br />
      {/* ------------------------------------ */}

      <div className="w-[500px] bg-gray-300 flex justify-between items-center">
        <div className="w-[100px] h-[100px] 2xl bg-blue-400 flex justify-center items-center">
          컨텐츠1
        </div>
        <div className="w-[100px] h-[100px] 2xl bg-blue-400 flex justify-center items-center">
          컨텐츠2
        </div>
        <div className="w-[100px] h-[100px] 2xl bg-blue-400 flex justify-center items-center">
          컨텐츠3
        </div>
      </div>
      <br />
      {/* ------------------------------------ */}

      <div className="w-[300px] h-[300px] bg-pink-400 hover:bg-amber-500 transition"></div>
    </>
  );
}