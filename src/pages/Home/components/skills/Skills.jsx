import { group1, group2, group3, group4 } from "./imports";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <section className={styles.skills_section}>
      <div
        className={`${styles.skills_text_container} ${styles.section_margin}`}
      >
        <div className={styles.skills_wrapper}>
          <p>
            Teaching kids programming and digital skills is MORE than just
            writing code.
          </p>
        </div>
      </div>
      <div className={`${styles.skills_row} ${styles.section_padding} `}>
        <div>
          <img src={group1} alt="" />
        </div>
        <div>
          <img src={group2} alt="" />
        </div>
        <div>
          <img src={group3} alt="" />
        </div>
        <div>
          <img src={group4} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
