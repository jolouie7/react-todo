import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { url as URL } from "../../variables";
import AddTodoForm from "../add-todo-form/add-todo-form";
import AddTodoInput from "../add-todo-input/add-todo-input";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DisplayTodosTable = ({
  todos,
  setRequestData,
  deleteTodoList,
  formButtonText,
}) => {
  const todosList = todos.todos;
  const [editInputName, setEditInputName] = useState("");
  const [editInputDescription, setEditInputDescription] = useState("");
  const [todoId, setTodoId] = useState(null);
  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = (todo) => handleOpenModal(todo);
  const handleClose = () => setOpen(false);

  const handleOnSubmitEdit = (e) => {
    e.preventDefault();
    const todo = {
      name: editInputName,
      description: editInputDescription,
    };
    fetch(`${URL}/todos/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then(setRequestData(new Date()))
      .then(() => handleClose());
  };

  const handleDeleteTodo = async (deleteTodoId) => {
    await fetch(`${URL}/todos/${deleteTodoId}`, { method: "DELETE" });
    // * To keep it uniform: So todos.todos doesn't break
    let filteredTodoList = todosList.filter((todo) => todo.id !== deleteTodoId);
    filteredTodoList = { todos: filteredTodoList };
    deleteTodoList(filteredTodoList);
  };

  const handleOpenModal = (todo) => {
    setOpen(true);
    // Set Todo Info
    setEditInputName(todo.name);
    setEditInputDescription(todo.description);
    setTodoId(todo.id);
  };

  const handleChangeEditInputName = (e) => {
    setEditInputName(e.target.value);
  };

  const handleChangeEditInputDescription = (e) => {
    setEditInputDescription(e.target.value);
  };

  const displayEditModal = () => {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddTodoForm
            setRequestData={setRequestData}
            handleOnSubmit={handleOnSubmitEdit}
            formButtonText={formButtonText}
          >
            <AddTodoInput
              handleOnChange={handleChangeEditInputName}
              inputValue={editInputName}
              inputLabel={"Name"}
            />
            <AddTodoInput
              handleOnChange={handleChangeEditInputDescription}
              inputValue={editInputDescription}
              inputLabel={"Description"}
              row={4}
              multiline={true}
            />
          </AddTodoForm>
        </Box>
      </Modal>
    );
  };

  const displayTodos = () => {
    return todosList.map((todo, idx) => (
      <div key={idx}>
        <div>
          <IconButton aria-label="edit" onClick={() => handleOpen(todo)}>
            <EditIcon sx={{ color: "rgb(144, 202, 249)" }} />
          </IconButton>
          {displayEditModal(todo)}
          <IconButton
            aria-label="delete"
            onClick={() => handleDeleteTodo(todo.id)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
          {`${idx + 1}.`} {todo.name}{" "}
        </div>
        <div>{todo.description}</div>
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
