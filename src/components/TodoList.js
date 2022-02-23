import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types';

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

TodoList.propTypes={
    todoList:PropTypes.array,
    onRemoveTodo:PropTypes.func
  }
export default TodoList;
