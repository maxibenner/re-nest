import styles from "./nav.module.css";
import { RiMenu2Fill, RiAddFill } from "react-icons/ri";

export const Nav = ({ onAdd }: { onAdd: () => void }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <RiMenu2Fill />
      </div>
      <h1 className={styles.head}>ReNest</h1>
      <div className={styles.icon} onClick={onAdd}>
        <RiAddFill />
      </div>
    </div>
  );
};
