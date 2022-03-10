import { useState, useEffect } from "react";
import "./App.css";
import AddTodoForm from "./components/add-todo-form/add-todo-form";
import AddTodoInput from "./components/add-todo-input/add-todo-input";
import DisplayTodosTable from "./components/display-todos-table/display-todos-table";
import { url as URL } from "./variables";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [requestData, setRequestData] = useState(new Date());

  useEffect(() => {
    fetch(`${URL}/todos`)
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, [requestData]);

  const handleInputNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleInputDescriptionChange = (e) => {
    setInputDescription(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Validation checks
    if (!inputName) {
      console.error("There was error an with inputName");
      return;
    }
    if (!inputDescription) {
      console.error("There was error an with inputDescription");
      return;
    }
    const todo = {
      name: inputName,
      description: inputDescription,
    };
    fetch(`${URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    setRequestData(new Date());
    // Reset input fields
    setInputName("");
    setInputDescription("");
    console.log("onSubmit", todo);
  };

  const deleteTodoList = (newTodos) => {
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="container">
        <h1>React Todo</h1>
        <AddTodoForm
          setRequestData={setRequestData}
          handleOnSubmit={handleOnSubmit}
        >
          <AddTodoInput
            handleOnChange={handleInputNameChange}
            inputValue={inputName}
            inputLabel={"Name"}
          />
          <AddTodoInput
            handleOnChange={handleInputDescriptionChange}
            inputValue={inputDescription}
            inputLabel={"Description"}
            row={4}
            multiline={true}
          />
        </AddTodoForm>
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
