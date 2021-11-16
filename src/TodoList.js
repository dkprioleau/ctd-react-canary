import React from 'react'; 
import TodoListItem from './TodoListItem'; 
// remember to always do the ./ for the path

  



const TodoList = ({todoList}) =>{ 
    return( 
      <ul> 
        {todoList.map(function(item){ 
          // we are mapping through the state here which is an empty array
          return(
            <TodoListItem key={item.id} todo={item}/>
            // we are passing key as a prop equal to the id of the todo object and passing todo as a prop
          )
        })}
      </ul>
    )
};

export default TodoList;