import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const AddTodoForm = ({ addToTodosList }) => {
  const [inputName, setInputName] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const handleInputNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleInputDescriptionChange = (e) => {
    setInputDescription(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addToTodosList({
      name: inputName,
      description: inputDescription,
    });
    setInputName("");
    setInputDescription("");
  };

  return (
    <div className="todoForm">
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={handleInputNameChange}
        value={inputName}
        sx={{
          marginBottom: "1rem",
        }}
      />
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={4}
        label="Description"
        onChange={handleInputDescriptionChange}
        value={inputDescription}
      />
      <Button variant="text" onClick={handleOnSubmit}>
        Add to List
      </Button>
    </div>
  );
};

export default AddTodoForm;
