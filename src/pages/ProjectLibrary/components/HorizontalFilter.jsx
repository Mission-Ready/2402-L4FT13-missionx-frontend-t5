
import { useState } from 'react'
import styles from './HorizontalFilter.module.css'

export default function HorizontalFilter({handleLevelClick, levelBtnChange, handlePagesClick, pagesBtnChange}) {
  
  // Just remember that here it was used States that was lifted up in Project Library JSX

  return (
    <>
    <div className={styles.horizontal}>
        <div className={styles.left}>
          
          <button id='beginner' type="" onClick={handleLevelClick} className={`${styles.beginnerBtn} ${styles.btn} ${levelBtnChange.name === "beginner" ? styles.btnActive : ""}`}>BEGNINNER</button>
          <button id='intermediate' onClick={handleLevelClick} className={`${styles.btn} ${levelBtnChange.name === "intermediate" ? styles.btnActive : ""}`}>INTERMEDIATE</button>
          <button id='advanced' onClick={handleLevelClick} className={`${styles.advancedBtn} ${styles.btn} ${levelBtnChange.name === "advanced" ? styles.btnActive : ""}`}>ADVANCED</button>
        </div>
        <div className={styles.rigth}>
          <span>SHOW</span>      
         
          <button id='five' onClick={handlePagesClick} className={`${styles.fiveBtn} ${styles.btn} ${pagesBtnChange.name === 5 ? styles.btnActive : ""}`}>5</button>
          <button id='ten' onClick={handlePagesClick} className={`${styles.btn} ${pagesBtnChange.name === 10 ? styles.btnActive : ""}`}>10</button>
          <button id='all' onClick={handlePagesClick} className={`${styles.allBtn} ${styles.btn} ${pagesBtnChange.name === 15 ? styles.btnActive : ""}`}>ALL</button>
        </div>
      </div>
    </>
  )
}















