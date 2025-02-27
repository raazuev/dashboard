import { useEffect, useState } from "react";
import Search from "../../shared/assets/icons/search.svg";
import styles from "./SearchTest.module.scss";

interface SearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  totalTests: number;
}

export const SearchTest = ({
  onSearchChange,
  totalTests,
  searchTerm,
}: SearchProps) => {
  const [inputTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearchChange(inputTerm);
    }, 300);
    return () => clearTimeout(timeout);
  }, [inputTerm, onSearchChange]);

  console.log(searchTerm);

  return (
    <div className={styles.search}>
      <img className={styles.search__img} src={Search} alt="search" />
      <input
        className={styles.search__input}
        type="text"
        placeholder="What test are you looking for?"
        value={inputTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="What test are you looking for?"
      />
      <span className={styles.search__total}>{totalTests} tests</span>
    </div>
  );
};
