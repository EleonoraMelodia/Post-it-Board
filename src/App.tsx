import "./App.css";
import Todo from "./components/Todo";

import TodoForm from "./components/TodoForm";
import ProviderTodoContext from "./components/store/TodoContext";

const App: React.FC = () => {
  return (
    <div className="container">
      <ProviderTodoContext>
        <TodoForm />
        <div className="postitCont">
          <Todo />
        </div>
      </ProviderTodoContext>
    </div>
  );
};

export default App;
