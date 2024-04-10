import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";
import { TodoContext } from "./store/TodoContext";

const Todo: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => {
        return (
          <li key={item.id}>
            <TodoItem
              text={item.text}
              removeItem={todoCtx.removeItem.bind(null, item.id)}
            /> 
          </li>
        );
      })}
    </ul>
  );
};

export default Todo;
