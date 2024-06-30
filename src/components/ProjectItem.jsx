/** @format */
import { useRef } from "react";
import styles from "../styles/ProjectItem.module.css";
import { useEffect } from "react";
import { useState } from "react";
// import temp_logo from "../assets/mini_logo_en";
export default function ProjectItem({
  logo,
  title,
  rating,
  visits,
  caption,
  tags,
}) {
  const tagElements = tags.map((ele) => (
    <p className={styles.tag} key={ele}>
      {ele}
    </p>
  ));
  const rightSectionRef = useRef(null);
  const captionRef = useRef(null);

  const [captionWidth, setCaptionWidth] = useState(
    captionRef.current?.offsetWidth
  );
  const [projectItemWidth, setProjectItemWidth] = useState(
    rightSectionRef.current?.offsetWidth
  );

  useEffect(() => {
    const projectItem = rightSectionRef.current;
    const captionItem = captionRef.current;

    const synchronize = () => {
      setCaptionWidth(captionItem.getBoundingClientRect().width);
      setProjectItemWidth(projectItem.getBoundingClientRect().width);
    };

    window.addEventListener("resize", synchronize);

    return () => window.removeEventListener("resize", synchronize);
  }, []);

  return (
    <div className={styles.project}>
      <img src={logo} className={styles.theLogo} />
      <div className={styles.rightSection} ref={rightSectionRef}>
        <h3>{title}</h3>
        <p
          ref={captionRef}
          className={`${styles.caption} ${
            captionWidth > projectItemWidth ? styles.moving : styles.noMoving
          }`}
        >
          {caption}
        </p>
        <div className={styles.infoCtn}>
          <h5>{rating && `${rating}⭐`}</h5>
          <h5>{visits && `Visits: ${visits}`}</h5>
        </div>
        <div className={styles.tagsCtn}>{tagElements}</div>
      </div>
    </div>
  );
}
