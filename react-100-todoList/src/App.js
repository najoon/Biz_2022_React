import logo from "./logo.svg";
import "./App.css";
import Main from "./comps/Main";
import AppContext from "./context/Context";
import { useState } from "react";
function App(checked) {
  // address state 변수가 생성되고
  // address state 변수를 변경시키는 setAddress 함수를 선언
  const [address, setAddress] = useState({
    todoList: "",
  });
  const [addrList, setAddrList] = useState([]);

  const [isEdit, setEdit] = useState(false);

  // Store 에 보관하기 위하여 bundling
  // Store  에 보관할때 개별적인 요소들로 보낼수 있지만
  // 관리 측면에서 bundling 하는 것이 좋다
  const props = {
    address,
    setAddress,
    addrList,
    setAddrList,
    isEdit,
    setEdit,
  };
  /*
프로젝트에서 사용할 state 변수와 setstate 함수를 모두 App.js (가장 상위)컴포넌트로 이동하고 
Main 컴포넌트 AppContext.provider 로 감싸고 AppContext.procifer 에 value 변수로 state 변수와 setState 함수를 전달하였다
이제 모든 변수와 함수는 AppContext.Provider 의 store 에 보관된다

*/
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="로고" />
      </header>
      <div className="TodoBox">
        <h1>todoList</h1>
      </div>
      <br />
      <div className="TodoBox">
        <AppContext.Provider value={props}>
          <Main />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
