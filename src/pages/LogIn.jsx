import React, { useState, useContext } from "react";
import lockr from "lockr";
import { navigate } from "@reach/router";
import { message } from "antd";
import moment from 'moment';

//img
import Title from "./img/Consim_Dark.png";

//refactoriser le style de ce composant si j'ai le temps
import styles from "./Login.module.css";

const tenants = [
  {
    credentials: {
      username: "aaa",
      password: "bbb",
    },
    projectName: "复旦大学邯郸校区中华经济文化研究中心",
    sites: [
      {
        order: 1,
        projectShortName: "复旦大学项目",
        company: "二建集团第六工程公司",
        location: "邯郸路155号",
        longitude: 121.511214,
        latitude: 31.297654,
      },
    ],
  },
  {
    credentials: {
      username: "ccc",
      password: "ddd",
    },
    projectName: "Test Project Name",
    sites: [
      {
        order: 1,
        projectShortName: "Short Name",
        company: "Company",
        location: "Location",
        longitude: 121.511214,
        latitude: 31.297654,
      },
    ],
  },
];

function LogIn() {
  const [user, setUser] = useState({});

  //store the values
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleClick(e) {
    e.preventDefault();

    for (const tenant of tenants) {
      const { credentials, sites, projectName } = tenant;
      if (
        user.username === credentials.username &&
        user.password === credentials.password
      ) {
        // save login info to cache so it is persisted in the browser
        lockr.set("last_login_time", moment().toDate().getTime());
        lockr.set("current_tenant", {
          projectName,
          sites,
        });
        lockr.set("pin_set", false);
        navigate("/");
        return;
      }
    }
    message.error("用户名或密码不正确");
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
            施工工地移动巡检
            <br />
          </div>
          <div className={styles["subtitle"]}>智慧管理平台</div>
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
            <p className={styles["UserLogInText"]}>{/*忘记密码*/}</p>

            <div style={{ textAlign: "center" }}>
              <div
                className={styles["btn-login"]}
                onClick={handleClick}
                // whileHover="hover"
              >
                登陆
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
