import React from "react";
import { Router, Link } from "@reach/router";

//style
import "./TopPannel.css";

// navigation reminder icons
import { HomeNav, EquipmentNav } from "./navReminder/TopNavBar";

//photo
import consimLogo from "./img/consimLogo.png";
import imagecompany from "./img/imagecompany.png";

export default function TopPannel() {
  return (
    <div className="container-top-pannel">
      <div className="container-consimLogo">
        <img className="consimLogo" alt="" src={consimLogo} />
      </div>
      <div className="container_consimTitle">
        <span>数字孪生施工管理平台</span>
        <div style={{ border: "solid 1px yellow" }}>
          <Router primary={false}>
            <HomeNav path="/" />
            <EquipmentNav path="Equipment" />
          </Router>
        </div>
      </div>
      <div className="container-companyLogo">
        <img alt="" src={imagecompany} className="companyLogo-basic" />
      </div>
    </div>
  );
}
