import React, { useEffect, useContext } from "react";
import { Router, Redirect } from "@reach/router";

//components
import TopPannel from "../components/TopPannel";
import NavigationPannel from "../components/NavigationPannel";
import Home from "./Home/index";
import Operators from "./Operators/index";
import NotFound from "../components/NotFound";
import GridView from "../components/GridView";
import Inspection from "./Inspection";
import Login from './LogIn'
import lockr from "lockr";
import { ListSitesContext } from '../contexts/ListSitesContext';

import NetworkInformation from "./AnbiaoNetworkInformation";
import YiYunGate from "./YiYunGate";

//style
import "./MainView.css";

function Root(props) {

  const sitesContext = useContext(ListSitesContext);
  const isLoggedIn = !!lockr.get("login_status");

  useEffect(() =>  {
    if (isLoggedIn) {
      const { projectName, sites } =  lockr.get("current_tenant");
      sitesContext.setCurrentProjectName(projectName);
      sitesContext.setSites(sites);
    }
  }, [0])

  if (!isLoggedIn) {
    return (
      <Redirect to="login" noThrow />
    )
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
