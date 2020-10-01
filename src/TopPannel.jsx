import React from "react";

//style
import "./TopPannel.css";

//photo
import consimLogo from "./consimLogo.png";
import imagecompany from "./imagecompany.png";

export default function TopPannel() {
  return (
    <div className="container-top-pannel">
      <div className="container-consimLogo">
        <img className="consimLogo" alt="" src={consimLogo} />
      </div>
      <div className="container-consimTitle">
        <span>数字孪生施工管理平台</span>
      </div>
      <div className="container-companyLogo">
        <img alt="" src={imagecompany} className="companyLogo-basic" />
      </div>
    </div>
  );
}
