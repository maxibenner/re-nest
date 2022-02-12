import styles from "./taskElementCompleted.module.css";
import { RiCheckFill } from "react-icons/ri";
export const TaskElementCompleted = ({ text }: { text: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.radio}>
        <RiCheckFill style={{color: "#32315c8f"}} />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
