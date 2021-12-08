import React, { useRef, useEffect } from "react";

export default function InputWithLabel({
  todoTitle,
  handleTitleChange,
  children,
}) {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  // imperative way of telling input how to focus

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>{" "}
      {/*now what's displayed as the label is reusable. Children refers to the children of the component (in AddTodoForm)*/}
      <input
        name="title"
        id="todoTitle"
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
        // we are referncing the ref hook to focus input whenever rendered
        // focus on input when page loads
      />
      {/* made reusable component */}
    </>
  );
}
