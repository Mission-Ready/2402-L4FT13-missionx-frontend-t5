import React, { useState } from 'react';
import styles from './HelpRequests.module.css';

function HelpRequests() {
  // State to manage sidebar
  const [isActive, setIsActive] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {/* Navigation Bar */}
      <div className={styles.navBar}></div>

      {/* Sidebar with Toggle Button */}
      <div className={`${styles.sideBar} ${isActive ? styles.isActive : ""}`}>
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
      </div>

      {/* Main Content Area */}
      <div className={styles.bigContainer}>
        <div className={styles.smallerContainer}></div>
        <div className={styles.helpRequestsTitle}>HELP REQUESTS</div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>© LevelUp Works 2020</div>
    </>
  );
}

export default HelpRequests;