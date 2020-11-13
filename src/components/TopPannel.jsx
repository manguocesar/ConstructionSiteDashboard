import React from "react";
import { Router } from "@reach/router";

//style
import "./TopPannel.css";

// navigation reminder icons
import {
  HomeNav,
  OperatorsNav,
  InspectionNav,
  NetworkInformationNav,
  YiYunGateNav,
} from "./navReminder/TopNavBar";

//photo
import consimLogo from "./img/consimLogo.png";
import imagecompany from "./img/logoSCG.png";
import scgLogoText from "./img/scg_text.png";

export default function TopPannel() {
  return (
    <div className="container_top_pannel">
      <div className="container_consimLogo">
        <img className="consimLogo" alt="" src={consimLogo} />
      </div>
      {/* TODO FIX BREADCUMB */}
      <div className="container_router">
        <Router>
          <HomeNav path="/" />
          <OperatorsNav path="Operators" />
          <InspectionNav path="Inspection" />
          <NetworkInformationNav path="networkinformation" />
          <YiYunGateNav path="yiyungate" />
        </Router>
      </div>
      <div className="display_logo">
        <img alt="" src={imagecompany} className="companyLogo_basic" />
        <img alt="" src={scgLogoText} className="companyLogo_text" />
      </div>
    </div>
  );
}
