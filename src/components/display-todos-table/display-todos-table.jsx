import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { url as URL } from "../../variables";

const DisplayTodosTable = ({ todos, setRequestData, deleteTodoList }) => {
  const todosList = todos.todos;

  const handleDeleteTodo = async (deleteTodoId) => {
    await fetch(`${URL}/todos/${deleteTodoId}`, { method: "DELETE" });
    // * To keep it uniform: So todos.todos doesn't break
    let filteredTodoList = todosList.filter((todo) => todo.id !== deleteTodoId);
    filteredTodoList = { todos: filteredTodoList };
    deleteTodoList(filteredTodoList);
  };

  const displayTodos = () => {
    return todosList.map((todo, idx) => (
      <div key={idx}>
        <div>
          <span>
            <IconButton
              aria-label="delete"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              <DeleteIcon />
            </IconButton>
          </span>{" "}
          {`${idx + 1}.`} Name:{todo.name}{" "}
        </div>
        <div>Description:{todo.description}</div>
        <br />
      </div>
    ));
  };

  return (
    <div>
      <h1>TODO LIST:</h1>
      {!todosList && todosList !== 0 ? <div>Loading...</div> : displayTodos()}
    </div>
  );
};

export default DisplayTodosTable;
