import React, { useEffect, useContext } from "react";
import { Router, Redirect, navigate } from "@reach/router";
import { message } from "antd";

//components
import TopPannel from "../components/TopPannel";
import NavigationPannel from "../components/NavigationPannel";
import Home from "./Home/index";
import Operators from "./Operators/index";
import NotFound from "../components/NotFound";
import GridView from "../components/GridView";
import Inspection from "./Inspection";
import Login from "./LogIn";
import moment from "moment";
import lockr from "lockr";
import { ListSitesContext } from "../contexts/ListSitesContext";

import NetworkInformation from "./AnbiaoNetworkInformation";
import YiYunGate from "./YiYunGate";

//style
import "./MainView.css";

function shouldLogOut() {
  const lastLoginTime = lockr.get("last_login_time");
  const isLoggedIn = !!lastLoginTime;

  if (!isLoggedIn) {
    return false;
  }

  if (
    moment(lastLoginTime).format("YYYYMMDD") !== moment().format("YYYYMMDD")
  ) {
    return true;
  }
  // logout automatically everday after 10pm
  const currentHour = moment().get("hours");
  if (currentHour >= 22) {
    if (moment(lastLoginTime).get("hours") < 22) {
      return true;
    }
  }
  return false;
}

function Root(props) {
  const sitesContext = useContext(ListSitesContext);
  const lastLoginTime = lockr.get("last_login_time");
  const isLoggedIn = !!lastLoginTime;

  useEffect(() => {
    const logout = () => {
      lockr.rm("last_login_time");
      lockr.rm("current_tenant");
      lockr.rm("pin_set");
      navigate("login");
      message.error("登录已过期。请重新登录");
    };

    if (isLoggedIn) {
      const { projectName, sites } = lockr.get("current_tenant");
      sitesContext.setCurrentProjectName(projectName);
      sitesContext.setSites(sites);

      if (shouldLogOut()) {
        logout();
      }
    }

    // logout without refreshing page
    const interval = setInterval(() => {
      if (shouldLogOut()) {
        logout();
      }
    }, 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [0]);

  if (!isLoggedIn) {
    return <Redirect to="login" noThrow />;
  }

  return (
    <div style={{ color: "white" }} className="main_container">
      <div className="container_header">
        <TopPannel />
      </div>
      <div className="container_underTop">
        <NavigationPannel />
        <div className="container_body">
          <div className="container_body_router">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default function MainView({ signout }) {
  return (
    <Router>
      <Login path="login" />
      <Root path="/">
        <Home path="/" />
        <Operators path="Operators" />
        <GridView path="Equipments" />
        <Inspection path="Inspection" />
        <NetworkInformation path="networkinformation" />
        <YiYunGate path="yiyungate" />
        <NotFound default />
      </Root>
    </Router>
  );
}
