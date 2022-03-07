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

  const handleOnSubmit = () => {
    addToTodosList({
      name: inputName,
      description: "TODO",
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={handleInputNameChange}
        value={inputName}
      />
      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
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
