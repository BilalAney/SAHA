/** @format */

import { useState } from "react";
import styles from "../styles/SearchQuery.module.css";
import Button from "./Button";
export default function SearchQuery() {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.searchQuery}>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button className={styles.btn} type="ok">
        🔎
      </Button>
    </form>
  );
}
