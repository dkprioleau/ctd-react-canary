import React, {useState} from 'react'; 
import TodoList from './TodoList'; //remember the ./ because it's in a different file
import AddTodoForm from './AddTodoForm';



function App() {
    
    const [todoList,setTodoList]=useState([])
    // ... is the spread operator
    function addTodo (newTodo){ 
      setTodoList([...todoList,newTodo])
    }
  
  return (
    <div>
      <h1>To Do List</h1> 
      <AddTodoForm onAddTodo={addTodo}/> 
      {/* onAddTodo is the props. We are changing the state of the state in the AddTodoForm and are rending it in App component */}
      <TodoList todoList={todoList}/>

    </div>
  );
}

export default App;
