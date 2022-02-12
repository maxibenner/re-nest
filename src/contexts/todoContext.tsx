import React, { createContext, useEffect, useState } from "react";
import { getRandomString } from "../utils/getRandom";

export const TodoContext = createContext<{
  todos: Todo[] | [];
  addTodo: (text: string, priority: Priority) => void;
  completeTodo: (id: string) => void;
}>(undefined as any);

export const TodoWrapper = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  /**
   * Adds a todo item with the given text and priority, and assigns it a unique identifier
   * @param text The text of the todo item
   * @param priority The priority set by the user for this item
   */
  const addTodo = (text: string, priority: Priority) => {
    const identifier = getRandomString(12);
    const newTodo = {
      id: identifier,
      text: text,
      priority: priority,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  /**
   * finds the todo element thats to be completed, modifies it, and updates the todos
   * @param id Id of the todo item to be modified
   */
  const completeTodo = (id: string) => {
    for (let i = 0; i <= todos.length; i++) {
      if (todos[i].id === id) {
        const todo = todos[i];
        const completedTodo = { ...todo, completed: true };
        const newTodos = [...todos];
        newTodos.splice(i, 1, completedTodo);
        return setTodos(newTodos);
      }
    }
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, completeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export type Todo = {
  id: string;
  text: string;
  priority: Priority;
  completed: boolean;
};
export type Priority = "high" | "normal" | "low";
