import { useContext } from "react";
import { TodoContext } from "../../contexts/todoContext";
import styles from "./completedTasks.module.css";
import { TaskElementCompleted } from "../taskElementCompleted/TaskElementCompleted";
export const CompletedTasks = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className={styles.container}>
        {todos.map(
          (task) =>
            task.completed === true && (
              <TaskElementCompleted key={task.id} text={task.text} />
            )
        )}
    </div>
  );
};
