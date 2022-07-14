import { useAppContext } from "../context/ContextProvider";
const View = () => {
  /*
  App.js 에서 생성한 address state 를 
  Main.jsx 에 공급하고
   Main.jsx 는 List.jsx 에 공급하고

   useContext 는 React 16.x버전부터 공식적으로 지원
  */

  const { address } = useAppContext;
  const { a_name, a_tel, a_address } = address;
  return (
    <div>
      <strong>이름 : </strong>
      <span>{a_name}</span>
      <strong>전화번호 : </strong>
      <span>{a_tel}</span>
      <strong>주소 : </strong>
      <span>{a_address}</span>
    </div>
  );
};
export default View;
