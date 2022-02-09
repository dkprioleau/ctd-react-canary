import React, { useState, useEffect } from "react";
import TodoList from "./TodoList"; //remember the ./ because it's in a different file
import AddTodoForm from "./AddTodoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import style from './TodoListItem.module.css';


const { REACT_APP_AIRTABLE_API_KEY, REACT_APP_AIRTABLE_BASE_ID } = process.env;
// variables from .env.local from airtable
console.log(process.env);

function App() {
  const [todoList, setTodoList] = useState([]);
  // made initial state empty array to start with an empty list and simulating fetching todos asynchronously
  // the todoList is the savedTodoList

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${REACT_APP_AIRTABLE_BASE_ID}/Default`, {
      headers: {
        Authorization: `Bearer ${REACT_APP_AIRTABLE_API_KEY}`,
        // header is a fetch option we are authenticating using API key
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTodoList(result.records);
        // updates array to be state instead of the object
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, []);
  // mimicing asynchronous testing of an API
  // returning the promise with the then method
  // using state setter to update list and pass initial state from result object

  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);
  //isLoading is an array dependency
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
  //  we re removing todolist array with the id

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={
            <div className={style.container}>
              <h1>To Do List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              {/* onAddTodo is the props. We are changing the state of the state in the AddTodoForm and are rending it in App component */}
              {isLoading === true ? (
                <p>Loading</p>
              ) : (
                <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
              )}
              {/* condition that when isloading is true loading p will appear when false TodoList component  */}
            </div> 
          }
        >
        </Route>
        <Route path="/new" element={<h1>New Todo List</h1>}></Route>
        {/* new path (page) */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
