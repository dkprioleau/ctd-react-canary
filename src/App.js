import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList"; //remember the ./ because it's in a different file
import AddTodoForm from "./components/AddTodoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import style from './components/TodoListItem.module.css';
import Airtable from "airtable";
import Header from "./components/Header";

const baseId = process.env.REACT_APP_AIRTABLE_BASE_ID;
  const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;
  const base = new Airtable({ apiKey: apiKey }).base(baseId);

// const { REACT_APP_AIRTABLE_API_KEY, REACT_APP_AIRTABLE_BASE_ID } = process.env;
// variables from .env.local from airtable

console.log(process.env);

function App() {
  const [todoList, setTodoList] = useState([]);
  // the todoList is the savedTodoList

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${baseId}/Default?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`, {
      /* after the url is a query parameter that makes sure the list is in the right order as API
      they start with ? and have a & between each pair
      asc is short for ascending (a to z)*/

      headers: {
        Authorization: `Bearer ${apiKey}`,
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
    base('Default').create([
      newTodo
    ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
       setTodoList([...todoList, records[0]]);
    });
   
  }
  // ... is the spread operator
  const removeTodo = (id) => {
    base('Default').destroy([id], function(err, deletedRecords) {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Deleted', deletedRecords.length, 'records');
    });
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
        <Route
          path="/"
          exact
          element={
            <>
              <Header/>
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
            </>
          }
        ></Route>
        <Route path="/new" element={
          <>
          <Header/>
          <div className={style.TipsContainer}>
            <h1>Helpful Tips</h1>
              <p className={style.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. </p>
          </div>
          </>
        }>
          </Route>
        {/* new path (page) */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
