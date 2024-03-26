import { useState } from "react";
import ProfileDetails from "./component/ProfileDetails";
import ProfilePhoto from "./component/ProfilePhoto";
import styles from "./StudentProfileViewer.module.css"


function StudentProfileViewer() {

   
  //  const [SDProfileData , setSDProfileData] = useState([])
  

  // const setSDProfileData = [
  //   {
  //     name: "Rawiri Fletcher",
  //     school: "Homai School",
  //     teacher: "Jasmina Salvador",
  //     course: "Beginner",
  //     date_of_birth: "25 June 2010",
  //     contact_no: "022 524 63 99",
  //     email: "fletchy.r@gmail.com",
  //     src: "/images/student/RawiriFletcher.png"
  //   },
  //   {
  //     name: "Rawiri Fletcher",
  //     school: "Homai School",
  //     teacher: "Jasmina Salvador",
  //     course: "Beginner",
  //     date_of_birth: "25 June 2010",
  //     contact_no: "022 524 63 99",
  //     email: "fletchy.r@gmail.com",
  //     src: "/images/student/RawiriFletcher.png"
  //   }
  // ]
  // console.log(setSDProfileData);
  return (
    <>
      {/* <div>StudentProfileViewer</div>
      <div style={{display:"flex", justifyContent:"center"}}>
        <ProfilePhoto />
        <ProfileDetails />
      </div> */}
      
      <div className={styles.gridContainer}>
            <div className={styles.gridHeader}>header</div>
            <div className={styles.gridMain}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <ProfilePhoto />
                    <ProfileDetails />
                </div>
            </div>
            {/* <div className={styles.gridButton}><BackButton nameBtn='backHome' textBtb='BACK TO HOME'/></div> */}
            <div className={styles.gridFooter}>footer</div>
        </div>

    </>
)
}

export default StudentProfileViewer;
