
import styles from './VerticalFilter.module.css'

export default function VerticalFilter() {
  
  return (
    <>
      {/* <div>HorizontalFilter</div> */}

      {/* SUBSCRIPTION FILTERS */}
      <div className={styles.filter}>
        <div className={styles.filterTxt}>SUBSCRIPTION</div>
        <div className={styles.filterGroup}>
          <input id='free' type="checkbox" name="free" value="test"/> <label htmlFor="free">Free</label> <br />
          <input id='premium' type="checkbox" name="premium" value="test"/> <label htmlFor="premium">Premium</label> <br />
        </div>
      </div>
      {/* ACTIVITY FILTERS */}
      <div className={styles.filter}>
        <div className={styles.filterTxt}>ACTIVITY TYPE</div>
        <div className={styles.filterGroup}>
          <input id='animation' type="checkbox" name="animation" value="activity"/> <label htmlFor="animation">Animation</label> <br />
          <input id='game' type="checkbox" name="game" value="activity"/> <label htmlFor="game">Game</label> <br />
          <input id='chatbot' type="checkbox" name="chatbot" value="activity"/> <label htmlFor="chatbot">Chatbot</label> <br />
          <input id='augmentedReality' type="checkbox" name="augmentedReality" value="activity"/> <label htmlFor="augmentedReality">Augmented Reality</label> <br />
        </div>
      </div>
      {/* YEAR FILTERS */}
      <div className={styles.filter}>
        <div className={styles.filterTxt}>YEAR LEVEL</div>
        <div className={styles.filterGroup}>
          <input id='oneFour' type="checkbox" name="oneFour" value="level"/> <label htmlFor="oneFour">1 - 4</label> <br />
          <input id='fiveSix' type="checkbox" name="fiveSix" value="level"/> <label htmlFor="fiveSix">5 - 6</label> <br />
          <input id='sevenEight' type="checkbox" name="sevenEight" value="level"/> <label htmlFor="sevenEight">7 - 8</label> <br />
          <input id='nineThirteen' type="checkbox" name="nineThirteen" value="level"/> <label htmlFor="nineThirteen">9 - 13</label> <br />
        </div>
      </div>
      {/* SUBJECT FILTERS */}
      <div className={styles.filter}>
        <div className={styles.filterTxt}>SUBJECT MATTER</div>
        <div className={styles.filterGroup}>
          <input id='computerScience' type="checkbox" name="computerScience" value="subject"/> <label htmlFor="computerScience">Computer Science</label> <br />
          <input id='maths' type="checkbox" name="maths" value="subject"/> <label htmlFor="maths">Maths</label> <br />
          <input id='science' type="checkbox" name="science" value="subject"/> <label htmlFor="science">Science</label> <br />
          <input id='language' type="checkbox" name="language" value="subject"/> <label htmlFor="language">Language</label> <br />
          <input id='art' type="checkbox" name="art" value="subject"/> <label htmlFor="art">Art</label> <br />
          <input id='music' type="checkbox" name="music" value="subject"/> <label htmlFor="music">Music</label> <br />
        </div>
      </div>

      
    </>
  )
}
