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

  const deleteTodoList = (newTodos) => {
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="container">
        <h1>React Todo</h1>
        <AddTodoForm setRequestData={setRequestData} />
        <DisplayTodosTable
          todos={todos}
          setRequestData={setRequestData}
          deleteTodoList={deleteTodoList}
        />
      </div>
    </div>
  );
}

export default App;
