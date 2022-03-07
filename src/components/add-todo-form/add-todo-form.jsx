import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { url as URL } from "../../variables";

const AddTodoForm = ({ setRequestData }) => {
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
    // Validation checks
    if (!inputName) {
      console.error("There was error an with inputName");
    }
    if (!inputDescription) {
      console.error("There was error an with inputDescription");
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
