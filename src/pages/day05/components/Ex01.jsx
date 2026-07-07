// *문제
// =>배열 데이터의 값을 사용하여 링크를
// 클릭하면 해당 페이지로 이동되게 만들기
// =>배열 제작: 고유값, 타이틀, 설명, 링크
// =>배열의 요소는 5개 이상
// 예)
// SNS 사이트 모음
// 네이버
// 대한민국 no1 포털사이트
// --------

// 인스타
// 내자랑 사진 ...
// --------

// 유튜브
// 영상 어쩌고...
// --------

// 틱톡
// 페이스북

import { links } from "../data/data";

export default function Ex01() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-300">
      <div className="w-80 space-y-3">
        <h1>SNS 사이트 모음</h1>
        {links.map((like) => (
          <a
            key={like.id}
            className="
            block
            bg-white
            p-4
            rounded-lg
        "
            href={like.url}
          >
            {like.title}
          </a>
        ))}
      </div>
    </div>
  );
}