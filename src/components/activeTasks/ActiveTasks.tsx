import styles from "./activeTasks.module.css";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../contexts/todoContext";
import { PriorityContainer } from "../priorityContainer/PriorityContainer";
import { TaskElement } from "../taskElement/TaskElement";
import { Todo } from "../../contexts/todoContext";
export const ActiveTasks = () => {
  const { todos, completeTodo } = useContext(TodoContext);
  const [sortedTodos, setSortedTodos] = useState<{
    high: Todo[];
    normal: Todo[];
    low: Todo[];
  }>({
    high: [],
    normal: [],
    low: [],
  });

  // Sort todos into arrays for different priorities
  useEffect(() => {
    let high: Todo[] = [];
    let normal: Todo[] = [];
    let low: Todo[] = [];

    todos.forEach((todo: Todo) => {
      if (todo.priority === "high" && todo.completed === false) high.push(todo);
      if (todo.priority === "normal" && todo.completed === false)
        normal.push(todo);
      if (todo.priority === "low" && todo.completed === false) low.push(todo);
    });

    setSortedTodos({ high, normal, low });
  }, [todos]);

  return (
    <div className={styles.container}>
      {sortedTodos.high.length > 0 && (
        <PriorityContainer title="HIGH PRIORITY" color="var(--red)">
          {sortedTodos.high.map((task) => {
            if (task.priority === "high" && task.completed === false)
              return (
                <TaskElement
                  key={task.id}
                  onDone={() => completeTodo(task.id)}
                  text={task.text}
                />
              );
          })}
        </PriorityContainer>
      )}
      {sortedTodos.normal.length > 0 && (
        <PriorityContainer title="NORMAL PRIORITY" color="var(--green)">
          {sortedTodos.normal.map((task) => {
            if (task.priority === "normal" && task.completed === false)
              return (
                <TaskElement
                  key={task.id}
                  onDone={() => completeTodo(task.id)}
                  text={task.text}
                />
              );
          })}
        </PriorityContainer>
      )}
      {sortedTodos.low.length > 0 && (
        <PriorityContainer title="LOW PRIORITY" color="var(--blue)">
          {sortedTodos.low.map((task) => {
            if (task.priority === "low" && task.completed === false)
              return (
                <TaskElement
                  key={task.id}
                  onDone={() => completeTodo(task.id)}
                  text={task.text}
                />
              );
          })}
        </PriorityContainer>
      )}
    </div>
  );
};
