import styles from "./OfferSection.module.css";
import { useState } from "react";

import { RxDotFilled } from "react-icons/rx";

import laptop1 from "../../../../assets/Home/laptop1.png";
import laptop2 from "../../../../assets/Home/laptop2.png";
import laptop3 from "../../../../assets/Home/laptop3.png";
import laptop4 from "../../../../assets/Home/laptop4.png";
import animation from "../../../../assets/Home/animation.png";
import augReality from "../../../../assets/Home/augreality.png";
import chatbots from "../../../../assets/Home/chatbots.png";
import games from "../../../../assets/Home/games.png";

function OfferSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slides = [
    {
      image: laptop1,
    },
    {
      image: laptop2,
    },
    {
      image: laptop3,
    },
    {
      image: laptop4,
    },
  ];

  const tiles = [
    {
      image: animation,
    },
    {
      image: augReality,
    },
    {
      image: chatbots,
    },
    {
      image: games,
    },
  ];
  return (
    <section className={styles.levelup_section}>
      <div className={`${styles.levelup_offer} ${styles.section_margin}`}>
        <div className={styles.levelup_what_we_offer_container}>
          <h1 className={styles.levelup_what_we_offer_heading}>
            What we offer
          </h1>
          <p>
            The Creative Problem Solving programme is series of digital creation
            projects aimed to encourage self-motivation and student agency,
            designed by New Zealand’s leading IT industry experts and schools.
          </p>
        </div>
        <div className={styles.levelup_what_we_offer_projects_container}>
          <h1 className={styles.levelup_student_projects_heading}>
            What will students create?
          </h1>
          <div className={styles.levelup_student_tiles}>
            {tiles.map((tile, slideIndex) => {
              return (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                  <img src={tile.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.level_up_slider_container}>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          className={styles.levelup_offer_background_image}
        ></div>
        <div className={styles.dots_container}>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`${
                currentIndex === slideIndex ? styles.dots : styles.dots_opacity
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
