import styles from "./tabs.module.css";
export const Tabs = ({
  activeTab,
  onNavigate,
  style,
}: {
  activeTab: "tasks" | "completed";
  onNavigate: (tab: "tasks" | "completed") => void;
  style?: React.CSSProperties;
}) => {
  return (
    <div className={styles.container} style={style}>
      <div
        onClick={() => onNavigate("tasks")}
        className={`${styles.tab} ${activeTab === "tasks" && styles.active}`}
      >
        <h3>Tasks</h3>
      </div>
      <div
        onClick={() => onNavigate("completed")}
        className={`${styles.tab} ${
          activeTab === "completed" && styles.active
        }`}
      >
        <h3>Completed</h3>
      </div>
    </div>
  );
};
