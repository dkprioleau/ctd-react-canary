import React from "react";
import style from './TodoListItem.module.css';

const TodoListItem = ({ todo, onRemoveTodo }) => {
  console.log(todo);

  // const [completed,setCompleted] = useState();
  // const handleCompleted= (e)=>{
  //   setCompleted(e.target.id)

  // }
  return (
    <li className={style.ListItem}>
      {todo.fields.Title}
      {/* This is grabbing the title from the API array */}
      {/* <button type="button" onClick={handleCompleted}>Completed</button> */}
      <button type="button" onClick={() => onRemoveTodo(todo.id)}>
        x 
        {/* remove */}
      </button>
    </li>
  );
};
export default TodoListItem;
