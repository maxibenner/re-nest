import styles from "./addTodoElement.module.css";
import { RiAddFill } from "react-icons/ri";
import { useState } from "react";
import { Priority } from "../../contexts/todoContext";

/**
 * Creates an element of a task thats available to add
 * @param text Text of the task
 */
export const AddTodoElement = ({
  text,
  onAdd,
}: {
  text: string;
  onAdd: (priority: Priority) => void;
}) => {
  const [active, setActive] = useState(false);

  // Toggle priority menu
  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      <div
        className={styles.icon}
        onClick={handleClick}
        style={{
          transform: active ? "rotate(45deg)" : "rotate(0deg)",
          color: active ? "var(--font-light)" : "var(--font-main)",
        }}
      >
        <RiAddFill />
      </div>
      {active && (
        <div className={styles.priorityOverlay}>
          <div onClick={() => onAdd("high")}>High Priority</div>
          <div onClick={() => onAdd("normal")}>Normal Priority</div>
          <div onClick={() => onAdd("low")}>Low Priority</div>
        </div>
      )}
    </div>
  );
};
