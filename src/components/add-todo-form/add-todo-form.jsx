import React from "react";
import { Button } from "@mui/material";

const AddTodoForm = ({ handleOnSubmit, children, formButtonText }) => {
  return (
    <div>
      <form onSubmit={handleOnSubmit} className="todoForm">
        {children}
        <Button variant="text" type="submit">
          {formButtonText}
        </Button>
      </form>
    </div>
  );
};

export default AddTodoForm;
