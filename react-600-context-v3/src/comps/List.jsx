import Item from "./Item";
import View from "./View";
import { useAppContext } from "../context/ContextProvider";
// addrList 배열의 값을 표형식으로 구현하기
const List = () => {
  /*
  부모Contaiver 로 부터 props 로 전달받던 addrList state 배열을 AppContext.provider 의  Store에서 제공받기
  */
  const { addrList } = useAppContext();

  const addrBody = addrList.map((addr) => {
    return <Item addr={addr} />;
  });
  return (
    <>
      <View />
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>전화번호</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody>{addrBody}</tbody>
      </table>
    </>
  );
};
export default List;
