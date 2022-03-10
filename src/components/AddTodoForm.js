import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from 'prop-types';
import style from "./TodoListItem.module.css";

const AddTodoForm = ({ onAddTodo }) => {
  AddTodoForm.propTypes ={
    OnAddTodo:PropTypes.func
  }
  // added proptypes for error handling
  const [todoTitle, setTodoTitle] = useState("");
  
  const handleTitleChange = (event) => {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };
  
  const handleAddTodo = (event) => {
    event.preventDefault();
    // preventing default behavior of form submit
    console.log(todoTitle);
  
    onAddTodo({
     fields:{ Title: todoTitle}
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

      <button className={style.plus} type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
