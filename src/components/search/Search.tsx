import styles from "./search.module.css";
import { RiSearchLine } from "react-icons/ri";
import { CSSProperties, EventHandler } from "react";
export const Search = ({
  onClick,
  onChange,
  autoFocus,
  style,
}: {
  onClick?: () => void;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  style?: CSSProperties;
}) => {
  const handleChange = (e: any) => {
    if (onChange && e.target.value) {
      onChange(e.target.value);
    }
  };
  return (
    <div className={styles.container} onClick={onClick} style={style}>
      <div className={styles.icon}>
        <RiSearchLine />
      </div>
      <input
        onChange={handleChange}
        autoFocus={autoFocus}
        className={styles.input}
        placeholder="Search"
      />
    </div>
  );
};
