import { useState } from "react";

export default function StateEx01() {
  /*  let num = 0;
  const plusHandler = () => {
    console.log(num);
    return num++;
  }; 못씀*/
  const [num, setNum] = useState(0);
  //=>리액트상태관리해줌
  //=>state는 컴포넌트 내부에서 관리하는 값입니다.
  //=>hook
  /* const plusHandler = () => {
    setNum(num + 1);
  }; */
  /*  const minusHandler = () => {
    setNum(num - 1);
  }; */
  ///////////////////////////////////////

  //const plusHandler = () => setNum(num + 1);
  //const minusHandler = () => setNum(num - 1);
  ///////////////////////////////////////////

  const plusHandler = () => setNum((prev) => prev + 1);
  const minusHandler = () => setNum((prev) => prev - 1);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-2xl flex flex-col items-center justify-center gap-4 ">
        <div className="text-4xl font-bold">{num}</div>
        <div className="flex gap-3">
          <button
            onClick={plusHandler}
            className="flex px-6 text-white py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition cursor-pointer active:scale-95"
          >
            +
          </button>
          <button
            onClick={minusHandler}
            className="flex px-6 text-white py-2 bg-red-500 rounded-lg hover:bg-red-600 transition cursor-pointer active:scale-95"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
