import { CSSProperties, ReactNode } from "react";
import styles from "./priorityContainer.module.css";
export const PriorityContainer = ({
  children,
  title,
  color,
  gradient = true,
  style,
}: {
  children: ReactNode;
  title: string;
  color: string;
  gradient?: boolean;
  style?: CSSProperties;
}) => {
  return (
    <div
      className={styles.container}
      style={{
        background: gradient
          ? "linear-gradient(0deg,rgba(50, 49, 92, 0) 0%,hsla(241, 30%, 28%, 0.04) 100%)"
          : "transparent",
        ...style,
      }}
    >
      <h2 className={styles.head} style={{ color: color }}>
        {title}
      </h2>
      <div className={styles.elementContainer}>{children}</div>
    </div>
  );
};
