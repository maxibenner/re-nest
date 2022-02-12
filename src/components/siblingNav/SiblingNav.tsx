import styles from "./siblingNav.module.css";
import { RiArrowLeftSLine } from "react-icons/ri";
export const SiblingNav = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon} onClick={onClick} style={{marginLeft: "-10px"}}>
        <RiArrowLeftSLine />
      </div>
      <h3 className={styles.head}>Add Task</h3>
      <div className={styles.icon} />
    </div>
  );
};
