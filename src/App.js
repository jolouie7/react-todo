import { useState, useEffect } from "react";
import "./App.css";
import AddTodoForm from "./components/add-todo-form/add-todo-form";
import DisplayTodosTable from "./components/display-todos-table/display-todos-table";

function App() {
  const [todos, setTodos] = useState([]);

  const URL = "http://localhost:3000/todos";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const addToTodosList = (todo) => {
    setTodos([todo, ...todos]);
    console.log(todos);
  };

  return (
    <div>
      <div className="container">
        <h1>React Todo</h1>
        <AddTodoForm addToTodosList={addToTodosList} />
        <DisplayTodosTable todos={todos} />
      </div>
    </div>
  );
}

export default App;
