import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styles from "./HomeNavbar.module.css";
// import logo from "../../assets/NavBar/LevelUpWorks-white.png";
// import avatar from "../../assets/NavBar/Avatar-white.png";
// import flag1 from "../../assets/NavBar/MaoriFlag.png";
// import flag2 from "../../assets/NavBar/NZFlag.png";
import logo from "../assets/NavBar/LevelUpWorks-white.png";
import avatar from "../assets/NavBar/Avatar-white.png";
import flag1 from "../assets/NavBar/MaoriFlag.png";
import flag2 from "../assets/NavBar/NZFlag.png";
import "../index.css";
import LoginSignUpModal from "../pages/Home/components/LoginSignup/LoginSignUpModal";
import SignUpModal from "../pages/Home/components/LoginSignup/SignUpModal";
import { Link } from "react-router-dom";

const Menu = () => (
  <>
    <ul className={styles.levelup_links}>
      <li>
        <Link id={styles.levelup_navbar_link} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link id={styles.levelup_navbar_link} to="/features">
          Features
        </Link>
      </li>
      <li>
        <Link id={styles.levelup_navbar_link} to="/teacherdashboard">
          Teachers
        </Link>
      </li>
    </ul>
  </>
);
function HomeNavbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className={styles.levelup_navbar}>
        <div className={styles.levelup_navbar_links}>
          <div className={styles.levelup_navbar_link_logo}>
            <img src={logo} />
          </div>
        </div>
        <div className={styles.levelup_navbar_links_container}>
          <Menu />
        </div>
        <div className={styles.levelup_navbar_sign}>
          <div className={styles.language}>
            <p>lang</p>

            <img src={flag1} className={styles.maori_flag} alt="" />
            <img src={flag2} className={styles.nz_flag} alt="" />
          </div>
          <div className={styles.signup_container}>
            <div className={styles.signup_wrapper}>
              <img src={avatar} className={styles.avatar} alt="" />
              {/* <a href="">Register</a> */}
              <LoginSignUpModal />

              <span className={styles.divider}>|</span>
              <SignUpModal text="Sign Up" />

              {/* <a href="">Signup</a> */}
              {/* <a className={styles.register}>Register</a>
              <a className={styles.login}>Login</a> */}
            </div>
          </div>
        </div>
        <div className={styles.levelup_navbar_menu}>
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div
              className={`${styles.levelup_navbar_menu_container}  ${styles.scale_up_center}`}
            >
              <div className={styles.levelup_navbar_menu_container_links}>
                <Menu />
                <div
                  className={styles.levelup_navbar_menu_container_links_sign}
                >
                  <div className={styles.signup_wrapper}>
                    <img src={avatar} className={styles.avatar} alt="" />
                    <div className={styles.mobile_menu_buttons}>
                      <LoginSignUpModal />

                      <span className={styles.divider}>|</span>

                      <SignUpModal text="Sign Up" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HomeNavbar;
