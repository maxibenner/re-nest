import { SiblingNav } from "../../components/siblingNav/SiblingNav";
import { AddTodoElement } from "../../components/addTodoElement/AddTodoElement";
import { availableTasks } from "../../constants/availableTasks";
import styles from "./addTodoPage.module.css";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../contexts/todoContext";
import { motion, AnimatePresence } from "framer-motion";

export const AddTodoPage = ({ onNav }: { onNav: () => void }) => {
  const { todos, addTodo } = useContext(TodoContext);

  // Tasks that haven't been added to the todo list, yet
  const [remainingTasks, setRemainingTasks] = useState<string[]>([]);

  // Update remaining tasks after every add
  useEffect(() => {
    var filtered = availableTasks.filter((val) => {
      for (var i = 0; i < todos.length; i++) {
        if (val == todos[i].text) {
          return false;
        }
      }
      return true;
    });
    setRemainingTasks(filtered);
  }, [todos]);

  const variants = {
    visible: { transform: "translateY(0%)" },
    hidden: { transform: "translateY(100%)" },
  };

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={variants}
      exit={{ transform: "translateY(100%)" }}
      transition={{ duration: 0.4 }}
    >
      <SiblingNav onClick={onNav} />
      <div className={styles.taskContainer}>
        {remainingTasks.length > 0 &&
          remainingTasks.map((task) => {
            return (
              <AddTodoElement
                key={Math.random()}
                text={task}
                onAdd={(priority) => addTodo(task, priority)}
              />
            );
          })}
      </div>
    </motion.div>
  );
};
