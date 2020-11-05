import React from "react";
import { Router } from "@reach/router";
import {motion} from "framer-motion"

//style
import "./TopPannel.css";

// navigation reminder icons
import { HomeNav, OperatorsNav } from "./navReminder/TopNavBar";

//photo
import consimLogo from "./img/consimLogo.png";
import imagecompany from "./img/LogoCompany.svg";

export default function TopPannel() {
  return (
    <div className="container_top_pannel">
      <div className="container_consimLogo" >
        <img className="consimLogo" alt="" src={consimLogo} 
         />
      </div>
      <div className="container_consimTitle">
        <span className="container_title_text">数字孪生施工管理平台</span>

        {/* TODO FIX BREADCUMB */}
        <div className="container_consimTitle_router">
          <Router>
            <HomeNav path="/" />
            <OperatorsNav path="Operators" />
          </Router>
        </div>
      </div>
      <img alt="" src={imagecompany} className="companyLogo_basic" />
    </div>
  );
}
