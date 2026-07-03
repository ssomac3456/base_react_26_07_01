export default function BaseEx03() {
  return (
    //<div>
    // <h2>두개 이상의 태그는 반드시 부모 태그로 감싸줄것</h2>
    //<div>태그하나 더 제작</div>
    // <>
    //<h2>빈태그가 싫으면 fragment를 사용할 수 있음</h2>
    //<h2>빈태그가 싫으면 fragment를 사용할 수 있음</h2>
    //</>
    <React.Fragment>
      <h2>빈태그가 싫으면 fragment를 사용할 수 있음</h2>
      <h2>빈태그가 싫으면 fragment를 사용할 수 있음</h2>
    </React.Fragment>
  );
}
