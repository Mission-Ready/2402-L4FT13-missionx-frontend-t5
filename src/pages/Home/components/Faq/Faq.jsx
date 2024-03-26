import { useState } from "react";
import star from "../../../../assets/Home/star.png";
import styles from "./Faq.module.css";

function Faq() {
  const data = [
    {
      id: "faq-1",
      image: star,
      title: "Learning Pathways",
      contentTitle: "Our Learning Pathways",
      contentSubtitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iste neque ea quasi distinctio eligendi magnam perspiciatis quis hic consequuntur dignissimos, aliquid temporibus voluptatem cupiditate,",
      heading1: "Animation",
      heading1SubContent:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iste neque ea quasi distinctio eligendi magnam perspiciatis quis hic consequuntur dignissimos, aliquid temporibus voluptatem cupiditate,",
      heading2: "Games",
      heading2SubContent:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iste neque ea quasi distinctio eligendi magnam perspiciatis quis hic consequuntur dignissimos, aliquid temporibus voluptatem cupiditate,",
      heading3: "Chatbots",
      heading3SubContent:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iste neque ea quasi distinctio eligendi magnam perspiciatis quis hic consequuntur dignissimos, aliquid temporibus voluptatem cupiditate,",
      heading4: "Augmented Reality ",
      heading4SubContent:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iste neque ea quasi distinctio eligendi magnam perspiciatis quis hic consequuntur dignissimos, aliquid temporibus voluptatem cupiditate,",
      heading5: "PARTICIPATION AND COLLABORATION",
      heading5SubContent:
        "The programme encourages students to be involved in communities, such as family, whānau, school, and contribute and make connections with other people",
    },
    {
      id: "faq-2",
      image: star,
      title: "Digital Technologies",
      contentTitle: "Enhance Digital Technologies",
      contentSubtitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iste neque ea quasi distinctio eligendi magnam perspiciatis quis hic consequuntur dignissimos, aliquid temporibus voluptatem cupiditate,",
      heading1: "React",
      heading1SubContent:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iste neque ea quasi distinctio eligendi magnam perspiciatis quis hic consequuntur dignissimos, aliquid temporibus voluptatem cupiditate,",
      heading2: "HTML",
      heading2SubContent:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iste neque ea quasi distinctio eligendi magnam perspiciatis quis hic consequuntur dignissimos, aliquid temporibus voluptatem cupiditate,",
      heading3: "CSS",
      heading3SubContent:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iste neque ea quasi distinctio eligendi magnam perspiciatis quis hic consequuntur dignissimos, aliquid temporibus voluptatem cupiditate,",
      heading4: "JS ",
      heading4SubContent:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iste neque ea quasi distinctio eligendi magnam perspiciatis quis hic consequuntur dignissimos, aliquid temporibus voluptatem cupiditate,",
      heading5: "PARTICIPATION AND COLLABORATION",
      heading5SubContent:
        "The programme encourages students to be involved in communities, such as family, whānau, school, and contribute and make connections with other people",
    },
    {
      id: "faq-3",
      image: star,
      title: "Key Competencies",
      contentTitle: "Enhance Key Competencies",
      contentSubtitle:
        "The programme enhances capabilities of students in the 5 Key Competencies identified in the New Zealand Curriculum:",
      heading1: "THINKING",
      heading1SubContent:
        "In particular the programme focused on problem solving, design thinking and computational thinking.",
      heading2: "DISCERNING CODES",
      heading2SubContent:
        "Analysing language, symbols, and texts in order to understand and make sense of the codes in which knowledge is expressed. ",
      heading3: "SELF-MANAGEMENT",
      heading3SubContent:
        "Projects and challenges are designed to motivate students to explore and experiment with self-motivation ",
      heading4: "RELATIONSHIPS WITH PEERS ",
      heading4SubContent:
        "The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognise different points of view, and share ideas.",
      heading5: "PARTICIPATION AND COLLABORATION",
      heading5SubContent:
        "The programme encourages students to be involved in communities, such as family, whānau, school, and contribute and make connections with other people",
    },
    {
      id: "faq-4",
      image: star,
      title: "IR4.0",
      contentTitle: "Our role in the IR4.0",
      contentSubtitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iste neque ea quasi distinctio eligendi magnam perspiciatis quis hic consequuntur dignissimos, aliquid temporibus voluptatem cupiditate,",
      heading1: "First industrial revolution",
      heading1SubContent:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iste neque ea quasi distinctio eligendi magnam perspiciatis quis hic consequuntur dignissimos, aliquid temporibus voluptatem cupiditate,",
      heading2: "Second industrial revolution",
      heading2SubContent:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iste neque ea quasi distinctio eligendi magnam perspiciatis quis hic consequuntur dignissimos, aliquid temporibus voluptatem cupiditate,",
      heading3: "Third industrial revolution",
      heading3SubContent:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iste neque ea quasi distinctio eligendi magnam perspiciatis quis hic consequuntur dignissimos, aliquid temporibus voluptatem cupiditate,",
      heading4: "Fourth industrial revolution ",
      heading4SubContent:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iste neque ea quasi distinctio eligendi magnam perspiciatis quis hic consequuntur dignissimos, aliquid temporibus voluptatem cupiditate,",
      heading5: `PARTICIPATION AND    COLLABORATION`,
      heading5SubContent:
        "The programme encourages students to be involved in communities, such as family, whānau, school, and contribute and make connections with other people",
    },
  ];
  const [toggled, setToggled] = useState();
  return (
    <section className={`${styles.faq_section} ${styles.section_padding}`}>
      <div className={`${styles.faq_text_container} ${styles.section_margin}`}>
        <div className={styles.faq_text_wrapper}>
          <p>How our programme helps teachers and schools</p>
        </div>
      </div>
      <div className={styles.button_wrapper}>
        {data.map(({ title, index, id }) => {
          return (
            <>
              <button
                onClick={() => setToggled(id)}
                key={index}
                className={`${styles.faq_button} ${
                  toggled === id ? styles.active : ""
                }`}
              >
                {title}
              </button>
            </>
          );
        })}
      </div>
      {data.map(
        ({
          contentTitle,
          contentSubtitle,
          id,
          heading1,
          heading1SubContent,
          heading2,
          heading2SubContent,
          heading3,
          heading3SubContent,
          heading4,
          heading4SubContent,
          heading5,
          heading5SubContent,
        }) => {
          return (
            <>
              {toggled === id ? (
                <div className={styles.toggleContent}>
                  <div className={styles.toggle_content_title}>
                    <h2 className={styles.faq_title}>{contentTitle}</h2>
                    <p className={styles.faq_subtitle}>{contentSubtitle}</p>
                  </div>

                  <div className={styles.faq_bullets}>
                    <div className={styles.faq_bullets_text_wrapper}>
                      <img src={star} alt="" />
                      <h2 className={styles.faq_heading}>{heading1}</h2>
                    </div>
                    <p className={styles.faq_sub_content}>
                      {heading1SubContent}
                    </p>
                    <div className={styles.faq_bullets_text_wrapper}>
                      <img src={star} alt="" />
                      <h2 className={styles.faq_heading}>{heading2}</h2>
                    </div>
                    <p className={styles.faq_sub_content}>
                      {heading2SubContent}
                    </p>
                    <div className={styles.faq_bullets_text_wrapper}>
                      <img src={star} alt="" />
                      <h2 className={styles.faq_heading}>{heading3}</h2>
                    </div>
                    <p className={styles.faq_sub_content}>
                      {heading3SubContent}
                    </p>
                    <div className={styles.faq_bullets_text_wrapper}>
                      <img src={star} alt="" />
                      <h2 className={styles.faq_heading}>{heading4}</h2>
                    </div>
                    <p className={styles.faq_sub_content}>
                      {heading4SubContent}
                    </p>
                    {toggled === "faq-2" ? (
                      <div></div>
                    ) : (
                      <div className={styles.faq_bullets_text_wrapper}>
                        <img src={star} alt="" />
                        <h2 className={styles.faq_heading}>{heading5}</h2>
                      </div>
                    )}
                    {toggled === "faq-2" ? (
                      <p></p>
                    ) : (
                      <p className={styles.faq_sub_content}>
                        {heading5SubContent}
                      </p>
                    )}
                  </div>

                  {/* <div className={styles.faq_bullets}>
                    <div className={styles.faq_bullets_text_wrapper}>
                        <h2 className={styles.faq_heading}>{heading1}</h2>

                        <img src={star} alt="" />
                    </div>
                  </div> */}
                </div>
              ) : null}
            </>
          );
        }
      )}
    </section>
  );
}

export default Faq;
