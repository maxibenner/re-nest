import React from "react";
import styles from "./phoneWrapper.module.css";
export const PhoneWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.screen}>{children}</div>
    </div>
  );
};
