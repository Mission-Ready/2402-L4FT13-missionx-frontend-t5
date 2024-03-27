import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import students from "../../../../assets/LoginSignup/students.png";
import teachers from "../../../../assets/LoginSignup/teachers.png";
import styles from "./SignUpModal.module.css";

function SignUpButtonModal() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Sign Up");

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button className={styles.hero_register_button} onClick={onOpenModal}>
        Sign Up
      </button>

      <Modal open={open} onClose={onCloseModal} center>
        <section className={styles.form_section}>
          <div className={styles.container}>
            <div className={styles.student_image_wrapper}>
              <img src={students} alt="" />
            </div>
            <div className={styles.form_header}>
              <h1 className={styles.form_text}>Students</h1>
            </div>
            <div className={styles.tabs_container}>
              <div
                className={
                  active === "Sign Up"
                    ? `${styles.gray}`
                    : `${styles.login_tab}`
                }
                onClick={() => {
                  setActive("Login");
                }}
              >
                Log In
              </div>
              <div
                className={
                  active === "Login" ? `${styles.gray}` : `${styles.signup_tab}`
                }
                onClick={() => {
                  setActive("Sign Up");
                }}
              >
                Sign Up
              </div>
            </div>
            <div className={styles.form_inputs}>
              <form action="">
                {active === "Login" ? (
                  <div></div>
                ) : (
                  <div className={styles.form_input}>
                    <input
                      type="Full Name"
                      placeholder="Full Name"
                      className={styles.input_field}
                    />
                  </div>
                )}

                <div className={styles.form_input}>
                  <input
                    placeholder="Email Address"
                    type="email"
                    className={styles.input_field}
                  />
                </div>
                <div className={styles.form_input}>
                  <input
                    placeholder="Password"
                    type="password"
                    className={styles.input_field}
                  />
                </div>
                {active === "Login" ? (
                  <div></div>
                ) : (
                  <div className={styles.form_input}>
                    <input
                      placeholder="Confirm Password"
                      type="password"
                      className={styles.input_field}
                    />
                  </div>
                )}

                <div className={styles.submit_container}>
                  {active === "Login" ? (
                    <button className={styles.submit_button}>Log In</button>
                  ) : (
                    <button className={styles.submit_button}>Sign Up</button>
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.teacher_image_wrapper}>
              <img src={teachers} alt="" />
            </div>
            <div className={styles.form_header}>
              <h1 className={styles.form_text}>Teachers</h1>
            </div>
            <div className={styles.tabs_container}>
              <div
                className={
                  active === "Sign Up"
                    ? `${styles.gray}`
                    : `${styles.login_tab}`
                }
                onClick={() => {
                  setActive("Login");
                }}
              >
                Log In
              </div>
              <div
                className={
                  active === "Login" ? `${styles.gray}` : `${styles.signup_tab}`
                }
                onClick={() => {
                  setActive("Sign Up");
                }}
              >
                Sign Up
              </div>
            </div>
            <div className={styles.form_inputs}>
              <form action="">
                {active === "Login" ? (
                  <div></div>
                ) : (
                  <div className={styles.form_input}>
                    <input
                      type="Full Name"
                      placeholder="Full Name"
                      className={styles.input_field}
                    />
                  </div>
                )}

                <div className={styles.form_input}>
                  <input
                    placeholder="Email Address"
                    type="email"
                    className={styles.input_field}
                  />
                </div>
                <div className={styles.form_input}>
                  <input
                    placeholder="Password"
                    type="password"
                    className={styles.input_field}
                  />
                </div>
                {active === "Login" ? (
                  <div></div>
                ) : (
                  <div className={styles.form_input}>
                    <input
                      placeholder="Confirm Password"
                      type="password"
                      className={styles.input_field}
                    />
                  </div>
                )}

                <div className={styles.submit_container}>
                  {active === "Login" ? (
                    <button className={styles.submit_button}>Log In</button>
                  ) : (
                    <button className={styles.submit_button}>Sign Up</button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </Modal>
    </div>
  );
}

export default SignUpButtonModal;
