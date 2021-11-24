import React, {useState,useEffect} from 'react'; 
import TodoList from './TodoList'; //remember the ./ because it's in a different file
import AddTodoForm from './AddTodoForm';

const useSemiPersistentState=()=>{ 
  const [todoList,setTodoList]=useState(JSON.parse(localStorage.getItem('savedTodoList')))
    // the todoList is the savedTodoList 
    // parsing to make string an object
    useEffect(()=>{ 
      localStorage.setItem('savedTodoList',JSON.stringify(todoList))
    },[todoList])
    // made todoList a string
    // savedTodoList is key and todoList is value
    // each time todoList is change we are saving to savedTodoList in localStorage
      return( 
        [todoList,setTodoList]
      )
}

function App() {
  const [todoList,setTodoList]=useSemiPersistentState() 
  // the custom hook from above that we are implementing
    function addTodo (newTodo){ 
      setTodoList([...todoList,newTodo]);
    }
    // ... is the spread operator
  return (
    <>
      <h1>To Do List</h1> 
      <AddTodoForm onAddTodo={addTodo}/> 
      {/* onAddTodo is the props. We are changing the state of the state in the AddTodoForm and are rending it in App component */}
      <TodoList todoList={todoList}/>

    </>
  );
}

export default App;
