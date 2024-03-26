// -------- Import Libraries --------
import styles from './BackButton.module.css'



// export default function BackButton({nameBtn, textBtb, colour}) {
export default function BackButton({nameBtn, textBtb}) {
  return (
    <div className={styles.btnDiv}>
      {/* <button id={nameBtn} className={styles.btn} style={{color: {colour}}}>{textBtb}</button>  */}
      <button id={nameBtn} className={styles.btn} >{textBtb}</button> 

      

      
    </div>
  )
}
