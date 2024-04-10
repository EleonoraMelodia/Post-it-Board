import React, { useContext, useState } from "react";
import classes from "./Todoform.module.css";
import EmojiInput from "react-input-emoji";

import { TodoContext } from "./store/TodoContext";

const TodoForm: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value: any) => {
    setInputValue(value);
  };

  const todoCtx = useContext(TodoContext);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Clean up the input value by removing HTML tags other than <img> tags
    const cleanedInputValue = inputValue.replace(/<(?!img)[^>]+>/g, "");

    if (cleanedInputValue.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(cleanedInputValue);
    setInputValue(""); // Reset input value after submission
  };

  return (
    <div className={classes.container}>
      <div className={classes.overlay}></div>
      <form onSubmit={handleFormSubmit} className={classes.form}>
        <label htmlFor=""> What to do today? </label>
        <EmojiInput
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message here..."
          shouldReturn={true}
          shouldConvertEmojiToImage={false}
        />

        <button type="submit"> Add your post-it </button>
      </form>
    </div>
  );
};

export default TodoForm;
