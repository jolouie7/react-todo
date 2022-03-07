import { useState, useEffect } from "react";
import "./App.css";
import AddTodoForm from "./components/add-todo-form/add-todo-form";
import DisplayTodosTable from "./components/display-todos-table/display-todos-table";
import { url as URL } from "./variables";

function App() {
  const [todos, setTodos] = useState([]);
  const [requestData, setRequestData] = useState(new Date());

  useEffect(() => {
    fetch(`${URL}/todos`)
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, [requestData]);

  const addToTodosList = (todo) => {
    setTodos([todo, ...todos]);
    console.log(todos);
  };

  return (
    <div>
      <div className="container">
        <h1>React Todo</h1>
        <AddTodoForm addToTodosList={addToTodosList} />
        <DisplayTodosTable todos={todos} setRequestData={setRequestData} />
      </div>
    </div>
  );
}

export default App;
