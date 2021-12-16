import React, { useState, useEffect } from "react";
import TodoList from "./TodoList"; //remember the ./ because it's in a different file
import AddTodoForm from "./AddTodoForm";

function App() {
  const [todoList, setTodoList] = useState([]);
  // made initial state empty array to start with an empty list and simulating fetching todos asynchronously
  // the todoList is the savedTodoList

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            data: {
              todoList: JSON.parse(localStorage.getItem("savedTodoList")),
            },
          }),
        2000
      );
    }).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
    // parsing to make string an object
  }, []);
  // mimicing asynchronous testing of an API
  // returning the promise with the then method
  // using state setter to update list and pass initial state from result object

  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);
  // made todoList a string
  // savedTodoList is key and todoList is value
  // each time todoList is change we are saving to savedTodoList in localStorage

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }
  // ... is the spread operator
  const removeTodo = (id) => {
    const newTodoList = todoList.filter((listItem) => id !== listItem.id);
    setTodoList(newTodoList);
  };
  // id refers to object from AddTodoForm
  // made a new event handler removeTodo to remove initial state
  // made a new variable for new array newTodoList that removes array
  // calling the new state function and passing the new array

  return (
    <>
      <h1>To Do List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {/* onAddTodo is the props. We are changing the state of the state in the AddTodoForm and are rending it in App component */}
      {isLoading === true ? (
        <p>Loading</p>
      ) : (
        <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
      )}
      {/* condition that when isloading is true loading p will appear when false TodoList component  */}
    </>
  );
}

export default App;
