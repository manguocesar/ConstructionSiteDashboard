import React, { useState, useContext } from "react";
import { motion } from "framer-motion";

//img
import Title from "./img/Consim_Dark.png";

//refactoriser le style de ce composant si j'ai le temps
import styles from "./Login.module.css";

//context
import { AnimationsContext } from "../contexts/AnimationsContext";

function LogIn({ signin }) {
  const { buttonVariants } = useContext(AnimationsContext);

  const [user, setUser] = useState({});

  //store the values
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleClick(e) {
    e.preventDefault();
    signin(user.username, user.password);
  }

  return (
    <div>
      <div className={styles.content}>
        {/* left side */}
        <div className={styles["panel-left"]}>
          <div className={styles["firm"]}>
            <img src={Title} alt="" style={{ width: "150px" }} />
          </div>
          <div className={styles["pagetitle"]}>
            舆策智能
            <br />
            施工工地智慧化升级方案
            <br />
          </div>
          <div className={styles["subtitle"]}>数字孪生施工管理平台</div>
        </div>

        {/* right side */}
        <div className={styles["panel-right"]}>
          <p className={styles["logInText"]}>登陆</p>
          <form>
            <p className={styles["UserLogInText"]}>用户名</p>

            <input
              name="username"
              value={user.username}
              onChange={handleChange}
              className={styles["input"]}
              type="text"
              placeholder="输入用户名"
            />
            <br />
            <p className={styles["UserLogInText"]}>密码</p>
            <input
              name="password"
              value={user.password}
              onChange={handleChange}
              className={styles["input"]}
              type="password"
              placeholder="输入密码"
            />
            <br />
            <p className={styles["UserLogInText"]}>忘记密码</p>

            <div style={{ textAlign: "center" }}>
              <motion.button
                className={styles["btn-login"]}
                onClick={handleClick}
                variants={buttonVariants}
                whileHover="hover"
              >
                登陆
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
