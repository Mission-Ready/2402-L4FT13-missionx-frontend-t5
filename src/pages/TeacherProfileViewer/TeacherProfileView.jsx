import styles from './TeacherProfileView.module.css';

function TeacherProfileView() {
  return (
    <>
      {/* Nav Bar */}
      <div className={styles.navBar}></div>
      {/* Nav Bar */}

      {/* Middle Section */}
      <div className={styles.rectangle272}>
        {/* Left Box */}
        <div className={styles.leftBox}></div>
        <div className={styles.profileImage}>Image</div>
        <div className={styles.profileEdit}>
          <button className={styles.profileBtn}>EDIT PROFILE</button>
          <button className={styles.profileBtn}>CHANGE PHOTO</button>
          <button className={styles.profileBtn}>SETTINGS</button>
        </div>
        {/* Left Box */}

        {/* Right Box */}
        <div className={styles.infoBox}>
          <div className={styles.profileCard}>
            <h2>Jasmina Salvador</h2>
            <p className={styles.profileDetails}>School</p>
            <p className={styles.profileDetails}>Course Purchased</p>
            <p className={styles.profileDetails}>Date Of Birth</p>
            <p className={styles.profileDetails}>Contact No</p>
            <p className={styles.profileDetails}>Email Adress</p>
          </div>
        </div>
        {/* Right Box */}

        {/* Buttons */}
        <button className={styles.backToProjectBtn}>BACK TO PROJECTS</button>
        <button className={styles.backToDashboardBtn}>BACK TO DASHBOARDS</button>
        {/* Buttons */}
      </div>
      {/* Middle Section */}

      {/* Footer */}
      <div className={styles.footer}></div>
      {/* Footer */}
    </>
  );
}

export default TeacherProfileView;

