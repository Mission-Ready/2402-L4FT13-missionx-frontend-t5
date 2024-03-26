// -------- Import Libraries --------
import  styles from './ProjectLibrary.module.css'
import { useState } from 'react';
// -------- Import Components --------
import SecondHeader from './components/SecondHeader'
import VerticalFilter from './components/VerticalFilter';
import HorizontalFilter from './components/HorizontalFilter';
import ProjectCard from './components/ProjectCard';
import BackButton from './components/BackButton';

function ProjectLibrary() {

  // -------- Lifting up States to be used in Project Cards and Horizontal Filter --------
  const [levelBtnChange, setLevelBtnChange] = useState({name: ""});
  const [pagesBtnChange, setPagesBtnChange] = useState({name: 100});
  

  // Function to render the color change on the set of Level Buttons
  function handleLevelClick(e) {
    switch (e.target.id) {
      case 'beginner':
        setLevelBtnChange({name: "beginner"});
        break;
      case 'intermediate':
        setLevelBtnChange({name: "intermediate"});
        break;
      case 'advanced':
        setLevelBtnChange({name: "advanced"});
        break;
      default:
        setLevelBtnChange({name: ""});
    }
  }

  // Function to render the color change on the set of Pagination Buttons
  function handlePagesClick(e) {
    switch (e.target.id) {
      case 'five':
        setPagesBtnChange({name: 5});
        // console.log(e.target.id)
        break;
      case 'ten':
        setPagesBtnChange({name: 10});
        // console.log(e.target.id)
        // setCount=(e.target.id)
        break;
      case 'all':
        setPagesBtnChange({name: 15});
        // console.log(e.target.id)
        // setCount=(e.target.id)
        break;
      default:
        setPagesBtnChange({name: 5});
    }
  }

  return (
    <>
      <div className={styles.gridContainer}>
        {/* Grid Container to display the JSX components */}
            <div className={styles.gridHeader}>header</div>
            <div className={styles.gridSecondHeader}><SecondHeader /></div>
            <div className={styles.gridVerticalFilter}><VerticalFilter />r</div>
            <div className={styles.gridHorizontalFilter}><HorizontalFilter handleLevelClick={handleLevelClick} levelBtnChange={levelBtnChange} handlePagesClick={handlePagesClick} pagesBtnChange={pagesBtnChange}/></div>
            <div className={styles.gridCard}><ProjectCard levelBtnChange={levelBtnChange} pagesBtnChange={pagesBtnChange}/></div>
            <div className={styles.gridButton}><BackButton nameBtn='backHome' textBtb='BACK TO HOME'/></div>
            <div className={styles.gridFooter}>footer</div>
        </div>
    </>
  )
}

export default ProjectLibrary;
