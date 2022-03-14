import React from "react";
import { TextField } from "@mui/material";

const AddTodoInput = ({
  handleOnChange,
  inputValue,
  inputLabel,
  row,
  multiline,
}) => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        label={inputLabel}
        onChange={handleOnChange}
        value={inputValue}
        minRows={row}
        multiline={multiline}
        sx={{
          marginBottom: "1rem",
          width: "100%", // You can pass as props if you want to customize more
        }}
      />
    </div>
  );
};

export default AddTodoInput;
