import logo from "./logo.svg";
import "./React.css";
import "./w3css.css";
import FoodInput from "./comps/FoodInput";

function React() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FoodInput />
    </div>
  );
}

export default React;
