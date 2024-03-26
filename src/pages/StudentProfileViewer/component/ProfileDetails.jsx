import styles from "./ProfileDetails.module.css"

export default function ProfileDetails() {
    // console.log(SDProfileData)

    const SDProfileData = [
        {
          name: "Rawiri Fletcher",
          school: "Homai School",
          teacher: "Jasmina Salvador",
          course: "Beginner",
          date_of_birth: "25 June 2010",
          contact_no: "022 524 63 99",
          email: "fletchy.r@gmail.com",
          src: "/images/students/RawiriFletcher.png"
        },
        {
          name: "Rawiri Fletcher",
          school: "Homai School",
          teacher: "Jasmina Salvador",
          course: "Beginner",
          date_of_birth: "25 June 2010",
          contact_no: "022 524 63 99",
          email: "fletchy.r@gmail.com",
          src: "/images/students/RawiriFletcher.png"
        }
      ]

    
  return (
    <>
        <div className={styles.gridContainer}>
            <div className={styles.gridHeader}><h2>{SDProfileData[0].name}</h2></div>
            <div className={styles.gridLabel}>School</div>
            <div className={styles.gridText}>{SDProfileData[0].school}</div>
            <div className={styles.gridLabel}>Teacher</div>
            <div className={styles.gridText}>{SDProfileData[0].teacher}</div>
            <div className={styles.gridLabel}>Course</div>
            <div className={styles.gridText}>{SDProfileData[0].course}</div>
            <div className={styles.gridLabel}>Date of Birth</div>
            <div className={styles.gridText}>{SDProfileData[0].date_of_birth}</div>
            <div className={styles.gridLabel}>Contact No</div>
            <div className={styles.gridText}>{SDProfileData[0].contact_no}</div>
            <div className={styles.gridLabel}>Email Address</div>
            <div className={styles.gridText}>{SDProfileData[0].email}</div>
     </div>

</>
  )
}
