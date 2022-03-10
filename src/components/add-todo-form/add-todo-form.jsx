import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { FormControl } from "@mui/material";
import { url as URL } from "../../variables";

const AddTodoForm = ({ setRequestData, handleOnSubmit, children }) => {
  return (
    <div>
      <form onSubmit={handleOnSubmit} className="todoForm">
        {children}
        <Button variant="text" type="submit">
          Add to List
        </Button>
      </form>
    </div>
  );
};

export default AddTodoForm;
