/** @format */
import { useEffect } from "react";
import styles from "../styles/ItemsContainer.module.css";
import { useProjectsContext } from "../contexts/ProjectsContext";
import LoadingSpinner from "./LoadingSpinner";
export default function ItemsContainer({ title, children }) {
  const { state } = useProjectsContext();

  return (
    <section className={styles.ctn}>
      {state === `loading` ? (
        <LoadingSpinner />
      ) : (
        <>
          <h2>{title}</h2>
          <ul>{children}</ul>
        </>
      )}
    </section>
  );
}
