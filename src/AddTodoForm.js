import React, { useState } from 'react';

const AddTodoForm = ({onAddTodo}) => {
    const [todoTitle, setTodoTitle] = useState('')
    const handleTitleChange = (event) => {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle)
    }
    const handleAddTodo = (event) => {
        // created handler function
        event.preventDefault()
        // preventing default behavior of form submit 
        console.log(todoTitle);
        onAddTodo({
            id: Date.now(),
            title: todoTitle,
        })
        setTodoTitle('')
        // this is so the input is a blank string after typing
    };

    //    we are invoking the newTodo as the todoTitle so we can see the state
    // we use totoTitle instead of saying newTodo because newTodo is not defined here and we are taking the todoTitle from the input
console.log(todoTitle)
return (
    <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label> {/*htmlFor- react syntax for for attr*/}
        <input name="title" id="todoTitle" value={todoTitle} onChange={handleTitleChange} />
        {/* making the value be the initial state */}
        <button type="submit" >Add</button>
    </form>
    
)
}


export default AddTodoForm;