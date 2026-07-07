import { CircleUserRound, Sparkles } from "lucide-react";

export default function ResponsiveEx() {
  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <div
        className="
            mx-auto
            bg-blue-500
            text-white
            rounded-lg
            p-4
            text-center

            w-full
            sm:w-[80%]
            md:w-[50%]
            lg:w-2/5

            text-base
            md:text-[30px]
            lg:text-2xl
        "
      >
        <h1>
          <Sparkles /> 반응형 예제
        </h1>
        <p>창 크기를 조절해보세요</p>

        <div className="mt-4">
          <div className="sm:hidden ">
            <CircleUserRound size={24} strokeWidth={1} />
            모바일
          </div>
          <div className="hidden sm:block md:hidden">📱Small (sm)</div>
          <div className="hidden md:block lg:hidden">Medium (md)</div>
          <div className="hidden lg:block">Large (lg 이상)</div>
        </div>
      </div>
    </div>
  );
}