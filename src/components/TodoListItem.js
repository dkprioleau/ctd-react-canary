import { object } from "prop-types";
import React from "react";
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, onRemoveTodo }) => {

  TodoListItem.propTypes={
    todo:PropTypes.object,
    onRemoveTodo:PropTypes.func
  } 

  console.log(todo);
  return (
    <li className={style.ListItem}>
      {todo.fields.Title}
      {/* This is grabbing the title from the API array */}
      <button type="button" onClick={() => onRemoveTodo(todo.id)}>
        Remove
      </button>
    </li>
  );
};
export default TodoListItem;
