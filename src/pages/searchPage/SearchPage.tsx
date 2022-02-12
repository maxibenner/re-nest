import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { PriorityContainer } from "../../components/priorityContainer/PriorityContainer";
import { SearchNav } from "../../components/searchNav/SearchNav";
import { TaskElement } from "../../components/taskElement/TaskElement";
import { Todo, TodoContext } from "../../contexts/todoContext";
import styles from "./searchPage.module.css";
import Fuse from "fuse.js";

export const SearchPage = ({ onCancel }: { onCancel: () => void }) => {
  const { todos, completeTodo } = useContext(TodoContext);
  const [query, setQuery] = useState("");
  const [sortedTodos, setSortedTodos] = useState<{
    high: Todo[];
    normal: Todo[];
    low: Todo[];
  }>({
    high: [],
    normal: [],
    low: [],
  });
  const [fuse, setFuse] = useState<Fuse<Todo>>();

  // Recreate fuzzy search index
  useEffect(() => {
    const fuse = new Fuse(todos, {
      keys: ["text"],
    });
    setFuse(fuse);
  }, [todos]);

  // Sort todos into arrays for different priorities
  useEffect(() => {
    let high: Todo[] = [];
    let normal: Todo[] = [];
    let low: Todo[] = [];

    if (fuse) {
      if (query) {
        const filtered = fuse.search(query);

        filtered.forEach(({ item }: { item: Todo }) => {
          if (item.priority === "high" && item.completed === false) high.push(item);
          if (item.priority === "normal" && item.completed === false) normal.push(item);
          if (item.priority === "low" && item.completed === false) low.push(item);
        });

        setSortedTodos({ high, normal, low });
      } else {
        todos.forEach((item: Todo) => {
          if (item.priority === "high" && item.completed === false) high.push(item);
          if (item.priority === "normal" && item.completed === false) normal.push(item);
          if (item.priority === "low" && item.completed === false) low.push(item);
        });

        setSortedTodos({ high, normal, low });
      }
    }
  }, [query, fuse]);

  const handleSearch = (value: string) => {
    setQuery(value);
  };

  useEffect(()=>{
    console.log(sortedTodos)
  },[sortedTodos])

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
      <SearchNav
        onClick={onCancel}
        onSearch={(value: string) => handleSearch(value)}
      />
      <div className={styles.taskContainer}>
        {sortedTodos.high.length > 0 && (
          <PriorityContainer
            style={{ padding: 0 }}
            gradient={false}
            title="HIGH PRIORITY"
            color="var(--red)"
          >
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
          <PriorityContainer
            style={{ padding: 0 }}
            gradient={false}
            title="NORMAL PRIORITY"
            color="var(--green)"
          >
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
          <PriorityContainer
            style={{ padding: 0 }}
            gradient={false}
            title="LOW PRIORITY"
            color="var(--blue)"
          >
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
    </motion.div>
  );
};
