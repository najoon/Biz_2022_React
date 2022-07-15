import { useContext } from "react";
import AppContext from "../context/Context";
const View = () => {
  /*
  App.js 에서 생성한 address state 를 
  Main.jsx 에 공급하고
   Main.jsx 는 List.jsx 에 공급하고

   useContext 는 React 16.x버전부터 공식적으로 지원
  */

  const { address } = useContext(AppContext);
  const { todoList } = address;
};
export default View;
