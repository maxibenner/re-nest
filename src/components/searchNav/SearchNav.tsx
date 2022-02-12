import styles from "./searchNav.module.css";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Search } from "../search/Search";
export const SearchNav = ({
  onClick,
  onSearch,
}: {
  onClick: () => void;
  onSearch: (query: string) => void;
}) => {
  return (
    <div className={styles.container}>
      <Search
        onChange={(value: string) => onSearch(value)}
        autoFocus
        style={{ marginRight: "15px" }}
      />
      <p onClick={onClick} className={styles.cancelButton}>
        Cancel
      </p>
    </div>
  );
};
