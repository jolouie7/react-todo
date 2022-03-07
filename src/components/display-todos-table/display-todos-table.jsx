import React from "react";

const DisplayTodosTable = ({ todos }) => {
  const todosList = todos.todos;
  console.log("todos in display:", todosList);

  const displayTodos = () => {
    return todosList.map((todo, idx) => (
      <div key={idx}>
        <div>
          {`${idx + 1}.`} Name:{todo.name}
        </div>
        <div>Description:{todo.description}</div>
        <br />
      </div>
    ));
  };

  return (
    <div>
      <h1>TODO LIST:</h1>
      {!todosList ? <div>Loading...</div> : displayTodos()}
    </div>
  );
};

export default DisplayTodosTable;
