import React from "react";
import TodoListItem from "./TodoListItem";
// remember to always do the ./ for the path

const TodoList = ({ todoList, onRemoveTodo }) => {
  console.log(todoList)
  return (
    
    <ul>
      {todoList.map(function (item) {
        // remember you can only map over an array and we have updated todoList to be an array (result.records) so we 
        // we are mapping through the state here which is an empty array
        return (
          <TodoListItem onRemoveTodo={onRemoveTodo} key={item.id} todo={item} />
          // we are passing key as a prop equal to the id of the todo object and passing todo as a prop
        );
      })}
    </ul>
  );
};

export default TodoList;
