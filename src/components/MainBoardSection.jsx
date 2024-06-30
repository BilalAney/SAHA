/** @format */

import { useProjectsContext } from "../contexts/ProjectsContext";
import styles from "../styles/MainBoardSection.module.css";
import ItemsContainer from "./ItemsContainer";
import ProjectItem from "./ProjectItem";

export default function MainBoardSection() {
  const { data } = useProjectsContext();

  return (
    <section className={styles.board}>
      {data.recent && (
        <>
          <ItemsContainer title="Recently Added">
            {data.recent.map((ele) => (
              <ProjectItem
                key={ele.id}
                title={ele.name}
                logo={ele.logo}
                tags={ele.tags}
                rating={ele.rating}
                caption={ele.caption}
                visits={ele.visits}
              ></ProjectItem>
            ))}
          </ItemsContainer>

          <ItemsContainer title="Popular on Saha©️">
            {data.popular.map((ele) => (
              <ProjectItem
                key={ele.id}
                title={ele.name}
                logo={ele.logo}
                tags={ele.tags}
                rating={ele.rating}
                visits={ele.visits}
              ></ProjectItem>
            ))}
          </ItemsContainer>

          <ItemsContainer title="Top Rated">
            {data.top.map((ele) => (
              <ProjectItem
                key={ele.id}
                title={ele.name}
                logo={ele.logo}
                tags={ele.tags}
                rating={ele.rating}
                caption={ele.caption}
                visits={ele.visits}
              ></ProjectItem>
            ))}
          </ItemsContainer>

          <ItemsContainer title="Last visited">
            {data.top.map((ele) => (
              <ProjectItem
                key={ele.id}
                title={ele.name}
                logo={ele.logo}
                tags={ele.tags}
              ></ProjectItem>
            ))}
          </ItemsContainer>
        </>
      )}
    </section>
  );
}
