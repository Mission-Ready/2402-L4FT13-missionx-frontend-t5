import styles from "./HomeFooter.module.css";

function HomeFooter() {
  return (
    <section
      className={`${styles.level_up_footer_section} ${styles.section_padding}`}
    >
      <div className={styles.level_up_footer_links}>
        <div className={styles.level_up_footer_links_div}>
          <h4>Company</h4>

          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Partners</a>
          </li>
        </div>
        <div className={styles.level_up_footer_links_div}>
          <h4>Courses</h4>
          <li>
            <a href="">Register</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a href="">Projects</a>{" "}
          </li>
          <li>
            <a href="">Teachers</a>
          </li>
          <li>
            <a href="">Parents</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
        </div>
        <div className={styles.level_up_footer_links_div}>
          <h4>Support</h4>

          <li>
            <a href="">FAQs</a>
          </li>
          <li>
            <a href="">Helpdesk</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </div>
        <div className={styles.level_up_footer_links_div}>
          <h4>Legal</h4>
          <li>
            <a href="">Terms & Conditions</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
        </div>
        <div className={styles.level_up_footer_links_div}>
          <h4 className={styles.levelup_footer_heading}>LevelUp Works</h4>
          <p>
            LevelUp Works LevelUp Works is an Auckland-based enterprise
            dedicated to developing game-based learning software to help
            teachers in response to the New Zealand Digital Technologies &
            Hangarau Matihiko.
          </p>
          <p>alan@levelupwroks.com</p>
          <p>(021) 668 185</p>
        </div>
      </div>
    </section>
  );
}

export default HomeFooter;
