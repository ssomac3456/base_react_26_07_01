export default function MapEx02() {
  const members = ["이준", "이종춘", "이미정", "최보미", "정윤아", "이정환", "박소희", "전소희"];

  return (
    <div className="h-screen flex items-center justify-center bg-gray-300 px-6">
      <div className=" bg-white p-6 rounded-lg shadow-2xl w-64">
        <h2 className="text-xl font-bold mb-4 text-center">회원목록</h2>
        <ul className="space-y-[15px]">
          {members.map((mem) => (
            <li key={mem} className="bg-gray-100 hover:bg-gray-200 transition px-4 py-2 rounded-lg border border-gray-300 text-gray-700">{mem}님</li>
          ))}

        </ul>
      </div>
    </div>
     
     );
}