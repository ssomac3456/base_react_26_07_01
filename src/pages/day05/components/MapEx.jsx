/* export default function MapEx() {
  const arrs = [1, 2, 3, 4, 5];
  //   arrs.map((num) => console.log(`숫자: ${num} ❤`));
  //   =>map은 배열을 순회하면서 각 요소를 변환하여 새로운 배열을 반환함

  return (
    <ul>
      {arrs.map((num) => (
        <li key={num}>숫자 {num} ❤</li>
        // =>jsx에서 map을 사용할때 반드시 key를 써야되며 값으론 고유값이 지정되어야됨
      ))}
    </ul>
  );

} */

export default function MapEx() {
    const arrs =[1,2,3,4,5,6,7,8,9,10];
    // arrs.map((num) => cobnsole.log(`숫자: ${num} ❤`));
    //=>map은 배열을 순회하면서 각 요소를 변환하여 새로운 배열을 반환함
    return (
        <ul>
         {arrs.map((num) => (
            <li key={num}>숫자 {num} ❤</li>
            //=>jsx에서 map을 사용할 때 반드시 키를 써야하며 값으로는 고유값이 지정되어야 함

         ))}
        </ul>
    );
}