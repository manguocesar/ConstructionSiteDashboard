import React, { useContext } from "react";
import { Router } from "@reach/router";
import { ListSitesContext } from '../contexts/ListSitesContext'

//style
import "./TopPannel.css";

// navigation reminder icons
import {
  HomeNav,
  ViewNav
} from "./navReminder/TopNavBar";

//photo
import consimLogo from "./img/consimLogo.png";
import imagecompany from "./img/logoSCG.png";
import scgLogoText from "./img/scg_text.png";

export default function TopPannel() {
  const sitesContext = useContext(ListSitesContext)
  return (
    <div className="container_top_pannel">
      <div className="container_consimLogo">
        <img className="consimLogo" alt="" src={consimLogo} />
      </div>
      {/* TODO FIX BREADCUMB */}
      <div className="container_router">
        <Router>
          <HomeNav path="/" />
          <ViewNav title={sitesContext.currentProjectName} pageName="移动巡检" path="Inspection" />
          <ViewNav title={sitesContext.currentProjectName} pageName="安标网信息" path="networkinformation" />
          <ViewNav title={sitesContext.currentProjectName} pageName="羿云门禁" path="yiyungate" />
        </Router>
      </div>
      <div className="display_logo">
        <img alt="" src={imagecompany} className="companyLogo_basic" />
        <img alt="" src={scgLogoText} className="companyLogo_text" />
      </div>
    </div>
  );
}
