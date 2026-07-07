// import "../../../style/style.css";

export default function StyleEx() {
  const w = 500;

  return (
    <>
      <div
        className="box_1"
        style={{
          width: w,
          height: w / 2,
        }}
      >
        인라인 스타일
      </div>

      <div className="box">외부 스타일</div>
    </>
  );
}