export default function Exercise({ name, food, side }) {
  return (
    <div>
      <div
      >
        <div
          style={{
            width: "200px",
            backgroundColor: "lightpink",
            padding: "20px",
          }}
        >
          <h2>메뉴선정</h2>
          <p>이름: {name}</p>
          <p>음식명: {food}</p>
          <p>사이드: {side}</p>
          <hr />
        </div>
      </div>
    </div>
  );
}
