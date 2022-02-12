import styles from "./taskElement.module.css";
export const TaskElement = ({
  text,
  onDone,
}: {
  text: string;
  onDone: () => void;
}) => {
  return (
    <div className={styles.container}>
      <div onClick={onDone} className={styles.radio} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};
