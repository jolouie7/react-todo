import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { url as URL } from "../../variables";

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

const DisplayTodosTable = ({ todos, setRequestData, deleteTodoList }) => {
  const todosList = todos.todos;
  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeleteTodo = async (deleteTodoId) => {
    await fetch(`${URL}/todos/${deleteTodoId}`, { method: "DELETE" });
    // * To keep it uniform: So todos.todos doesn't break
    let filteredTodoList = todosList.filter((todo) => todo.id !== deleteTodoId);
    filteredTodoList = { todos: filteredTodoList };
    deleteTodoList(filteredTodoList);
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Todo
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    );
  };

  const displayTodos = () => {
    return todosList.map((todo, idx) => (
      <div key={idx}>
        <div>
          <IconButton aria-label="edit" onClick={handleOpen}>
            <EditIcon sx={{ color: "rgb(144, 202, 249)" }} />
          </IconButton>
          {displayEditModal()}
          <IconButton
            aria-label="delete"
            onClick={() => handleDeleteTodo(todo.id)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
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
