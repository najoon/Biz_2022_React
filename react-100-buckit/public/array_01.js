const data = {
  b_title: "우리나라",
  b_comment: "Republic of Korea",
};

const dataList = [data];
// dataList 배열에 담긴값을 dataList2 로 그대로 복제하면서
// 새로운 data 요소를 추가하는 코드
// react 에서 state 변수가 배열일경우
// setter 함수 내부에서 다음과 같은 코드가 사용되어야 한다
const dataList2 = [...dataList, data];
console.log(dataList2);
