import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  
  const handleTitleChange = (event) => {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = (event) => {
    // created handler function
    event.preventDefault();
    // preventing default behavior of form submit
    console.log(todoTitle);
    const d = new Date()
    onAddTodo({
      id: d.toISOString(),
      // creating new date id for each
     fields:{ Title: todoTitle,}
    //  updated to match the airtable object syntax
    });
    setTodoTitle("");
    // this is so the input is a blank string after typing
  };

  // we are invoking the newTodo as the todoTitle so we can see the state
  // we use totoTitle instead of saying newTodo because newTodo is not defined here and we are taking the todoTitle from the input
  console.log(todoTitle);
  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        handleTitleChange={handleTitleChange}
        todoTitle={todoTitle}
      >
        <strong>Title</strong>
      </InputWithLabel>

      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
