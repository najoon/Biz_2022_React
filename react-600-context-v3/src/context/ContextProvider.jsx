import { createContext, useContext, useState } from "react";
const AppContext = createContext();

// 각각 props 가 필요한 Componten 들이
// useContext 를 사용하여 props 들을 분해하던 코드를 여기에서 함수로 선언하고
const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
// provider.provider 역할을 수행하는 Component
// props.children 속성을 매개변수 받고있다
// 이 Conponet 내에서 state 들을 선언
const AppContextProvider = ({ children }) => {
  // address state 변수가 생성되고
  // address state 변수를 변경시키는 setAddress 함수를 선언
  // App.js 에서 AppContext.provier 로 컴포넌트 들을 묶고
  // 여기에 value 값을 지정한 코드를
  // AppContextProvifer 랄는 객체함수로 선언
  const [address, setAddress] = useState({
    a_name: "홍길동",
    a_tel: "1010-5444-5251",
    a_address: "경기도 양주",
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
  return (
    <>
      <AppContext.Provider value={props}>{children}</AppContext.Provider>
    </>
  );
}; // AppContextProvider end

export { useAppContext, AppContextProvider };
