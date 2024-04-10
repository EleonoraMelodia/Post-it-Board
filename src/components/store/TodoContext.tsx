import Todos from "../../models/Todo";
import React, { useState } from "react";
 const deleteSound = require("../../assets/audio/delete.wav"); 

type TodoContextObj = {
  items: Todos[];
  addTodo: (text: string) => void;
  removeItem: (id: string) => void;
};

export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeItem: (id: string) => {},
});

const ProviderTodoContext: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const [todos, setTodos] = useState<Todos[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todos(text);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const handleRemoveItem = (id: string) => {
    const deleteAudio = new Audio(deleteSound);
    deleteAudio.play(); 
    setTodos((prevTodos) => {
      return prevTodos.filter((items) => items.id !== id);
    });
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeItem: handleRemoveItem,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default ProviderTodoContext;
