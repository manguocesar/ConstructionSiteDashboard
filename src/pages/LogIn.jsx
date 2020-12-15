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
      username: "scg_26_sh_hd",
      password: "hd123456",
    },
    projectName: "复旦大学邯郸校区中华经济文化研究中心",
    id: "handan",
    sites: [
      {
        order: 1,
        projectShortName: "复旦大学项目",
        company: "二建集团第六工程公司",
        location: "上海市杨浦区国权路525号",
        longitude: 121.5095,
        latitude: 31.2995,
      },
    ],
  },
  {
    credentials: {
      username: "scg_26_sh_sl",
      password: "sl123456",
    },
    projectName: "三林镇项目",
    id: "sanlin",
    sites: [
      {
        order: 1,
        projectShortName: "三林镇",
        company: "二建集团第六工程公司",
        location: "上南路东明路路口",
        longitude: 121.5412,
        latitude: 31.1288,
      },
    ],
  },
  {
    credentials: {
      username: "scg_26_sh_lg",
      password: "lg123456",
    },
    projectName: "临港新片区105社区金融西九项目",
    id: "lingang",
    sites: [
      {
        order: 1,
        projectShortName: "临港新片区",
        company: "二建集团第六工程公司",
        location: "环湖北二路与香柏路交界处",
        longitude: 121.511214,
        latitude: 31.297654,
      },
    ],
  },

  {
    credentials: {
      username: "scg_26_sh_xgmd",
      password: "xgmd123456",
    },
    projectName: "香港名都住宅楼项目",
    id: "xgmd",
    sites: [
      {
        order: 1,
        projectShortName: "香港名都",
        company: "二建集团第六工程公司",
        location: "昼锦路236号",
        longitude: 121.4964,
        latitude: 31.2289,
      },
    ],
  },

  {
    credentials: {
      username: "scg_26_sh_hy",
      password: "hy123456",
    },
    projectName: "华域汽车技术研发中心建筑工程项目",
    id: "huayu",
    sites: [
      {
        order: 1,
        projectShortName: "华域汽车",
        company: "二建集团第六工程公司",
        location: "科苑路501号",
        longitude: 121.5956,
        latitude: 31.2094,
      },
    ],
  },

  {
    credentials: {
      username: "scg_26_sh_qg",
      password: "qg123456",
    },
    projectName: "徐汇乔高综合体开发项目 （一期）",
    id: "qiaogao",
    sites: [
      {
        order: 1,
        projectShortName: "桥高综合体",
        company: "二建集团第六工程公司",
        location: "苍梧路8号",
        longitude: 121.4204,
        latitude: 31.1736,
      },
    ],
  },

  // {
  //   credentials: {
  //     username: "demo",
  //     password: "demo",
  //   },
  //   projectName: "演示项目",
  //   id: "demo",
  //   sites: [
  //     {
  //       order: 1,
  //       projectShortName: "演示项目",
  //       company: "",
  //       location: "国建路423",
  //       longitude: 121.511214,
  //       latitude: 31.297654,
  //     },
  //   ],
  // }
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
      const { credentials, sites, projectName, id } = tenant;
      if (
        user.username === credentials.username &&
        user.password === credentials.password
      ) {
        // save login info to cache so it is persisted in the browser
        lockr.set("last_login_time", moment().toDate().getTime());
        lockr.set("current_tenant", {
          projectName,
          id,
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
