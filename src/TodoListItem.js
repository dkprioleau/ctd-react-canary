import React from "react";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  console.log(todo.id);
  return (
    <li>
      {todo.title}
      {/* props is an object that we are referencing from TodoList and todo is an object that we are passing from TodoList */}
      <button type="button" onClick={() => onRemoveTodo(todo.id)}>
        Remove
      </button>
    </li>
  );
};
export default TodoListItem;
