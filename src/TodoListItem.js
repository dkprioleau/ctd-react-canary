import React from 'react'; 
 
const TodoListItem = ({todo}) =>{ 
    return( 
        <li>
            {todo.title}
            {/* props is an object that we are referencing from TodoList and todo is an object that we are passing from TodoList */}
        </li> 
    );
} 
export default TodoListItem;