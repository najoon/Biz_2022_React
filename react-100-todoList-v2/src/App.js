import logo from "./logo.svg";
import "./App.css";
import TodoMain from "./comps/TodoMain";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <TodoMain header="todoList" form={<TodoInput />}>
        <TodoList />
      </TodoMain>
    </div>
  );
}

export default App;
