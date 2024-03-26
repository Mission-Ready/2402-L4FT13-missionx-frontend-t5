import styles from "./ProfilePhoto.module.css"

export default function ProfilePhoto() {
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

console.log(SDProfileData[0].src)
  return (
    <div className={styles.main}> 
        <div className={styles.profileImage}><img src={SDProfileData[0].src} alt="photo" width="200px"/></div>
        <div className={styles.profileEdit}><button className={styles.btnProfile}>EDIT PROFILE</button></div>
        <div className={styles.profileChange}><button className={styles.btnProfile}>CHANGE PHOTO</button></div>
    </div>
  )
}
