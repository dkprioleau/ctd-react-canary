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
    onAddTodo({
      id: Date.now(),
      title: todoTitle,
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
