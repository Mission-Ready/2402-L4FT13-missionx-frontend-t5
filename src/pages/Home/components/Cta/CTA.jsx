import React from "react";
import styles from "./Cta.module.css";
import classroom from "../../../../assets/Home/classroom.png";

function CTA() {
  return (
    <section
      className={`${styles.level_up_cta_section} ${styles.section_padding}`}
    >
      <div className={styles.level_up_cta_image_container}>
        <img src={classroom} alt="" />
      </div>
      <div className={styles.level_up_cta_content}>
        <h1>What are you waiting for?</h1>
        <h2>Start teaching Digital Technologies today.</h2>
        <p>
          If you need more information, we are happy to answer any question you
          may have.
        </p>
        <div className={styles.level_up_cta_buttons_container}>
          <button type="button" className={styles.enquire_now_button}>
            Enquire Now
          </button>
          <button type="button" className={styles.level_up_cta_sign_up_button}>
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
