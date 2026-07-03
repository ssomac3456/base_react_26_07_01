/* import Header from "./components/Header";
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2"; */

/* import Intro from "./components/Intro"; */
import Exercise from "./components/Exercise";
export default function Day02() {
  return (
    <div>
      {/* 
      <Header />
      <Section_1 />
      <Section_2 /> */}
      {/* 컴포넌트로 분리하여 유지보수 좋게 만듬 */}

      {/* <div>
     <h2>자기소개</h2>
    <p>이름: 전소희</p>
    <p>나이: 23</p>
</div>
<div>
     <h2>자기소개</h2>
    <p>이름: 정윤아</p>
    <p>나이: 23</p>
</div>
<div>
     <h2>자기소개</h2>
    <p>이름: 박소희</p>
    <p>나이: 22</p>
</div> */}

      {/* <Intro name="박소희" age="22" />
      <Intro name="전소희" age="23" />
      <Intro name="정윤아" age="23" />
      <Intro name="이준" age="28" />
      <Intro name="최보미" age="26" />
      <Intro name="이종춘" age="53" />
      <Intro name="이미정" age="46" />
      {/* 컴포넌트에 넘겨주는 변수를 props라고함 
      프롭스는 객체로 반환함 */}
      <div
        style={{
          display: "flex",
        }}
      >
        <Exercise name="이미정" food="햄치즈" side="코울슬로" />
        <Exercise name="이미정" food="햄치즈" side="코울슬로" />
        <Exercise name="이미정" food="햄치즈" side="코울슬로" />
      </div>
    </div>
  );
}
