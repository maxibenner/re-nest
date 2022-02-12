import { useState, ReactNode } from "react";
import { Nav } from "../../components/nav/Nav";
import { Tabs } from "../../components/tabs/Tabs";
import { Search } from "../../components/search/Search";
import { ActiveTasks } from "../../components/activeTasks/ActiveTasks";
import styles from "./mainPage.module.css";
import { CompletedTasks } from "../../components/completedTasks/CompletedTasks";
import { motion, AnimatePresence } from "framer-motion";

export const MainPage = ({
  onNav,
  onSearch,
}: {
  onNav: () => void;
  onSearch: () => void;
}) => {
  const [tab, setTab] = useState<"tasks" | "completed">("tasks");
  const handleNavigate = (tab: "tasks" | "completed") => {
    setTab(tab);
  };

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      <div className={styles.container}>
        <div className={styles.topBarBg}>
          <Nav onAdd={onNav} />
          <Search
            onClick={onSearch}
            style={{ margin: "0 var(--padding-base)" }}
          />
          <Tabs
            activeTab={tab}
            onNavigate={handleNavigate}
            style={{ marginTop: "15px" }}
          />
        </div>
        {tab === "tasks" && (
          <motion.div
            key="tasks"
            initial="hidden"
            animate="visible"
            variants={variants}
            exit={{ transform: "translateY(100%)" }}
            transition={{ duration: 0.4 }}
            className={styles.scrollContainer}
          >
            <ActiveTasks />
          </motion.div>
        )}
        {tab === "completed" && (
          <motion.div
            key="completed"
            initial="hidden"
            animate="visible"
            variants={variants}
            exit={{ transform: "translateY(100%)" }}
            transition={{ duration: 0.4 }}
            className={styles.scrollContainer}
          >
            <CompletedTasks />
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};
