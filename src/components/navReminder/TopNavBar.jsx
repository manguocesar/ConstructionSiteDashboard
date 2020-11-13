import React from "react";
import { Link } from "@reach/router";

import "./TopNavBar.css";

export const HomeNav = () => (
  <div className="container_consimTitle">
    <span className="container_title_text">移动巡检智慧管理平台</span>

    <div className="container_consimTitle_router">
      <div className="TopNavBar_Table_container">
        <div className="triangle-right" />

        <Link to="/" style={{ color: "#82cdbf" }}>
          首页
        </Link>
      </div>
    </div>
  </div>
);

export const OperatorsNav = () => (
  <div className="container_consimTitle">
    <span className="container_title_text">数字孪生施工管理平台</span>

    <div className="container_consimTitle_router">
      <div className="TopNavBar_Table_container">
        <div className="triangle-right" />

        <Link to="/Operators" style={{ color: "#82cdbf" }}>
          人员
        </Link>
      </div>
    </div>
  </div>
);

export const InspectionNav = () => (
  <div className="container_consimTitle">
    <span className="container_title_text">
      复旦大学邯郸校区中华经济文化研究中心
    </span>

    <div className="container_consimTitle_router">
      <div className="TopNavBar_Table_container">
        <div className="triangle-right" />

        <Link to="/Inspection" style={{ color: "#82cdbf" }}>
          移动巡检
        </Link>
      </div>
    </div>
  </div>
);

export const NetworkInformationNav = () => (
  <div className="container_consimTitle">
    <span className="container_title_text">
      复旦大学邯郸校区中华经济文化研究中心
    </span>

    <div className="container_consimTitle_router">
      <div className="TopNavBar_Table_container">
        <div className="triangle-right" />

        <Link to="/networkinformation" style={{ color: "#82cdbf" }}>
          安标网信息
        </Link>
      </div>
    </div>
  </div>
);

export const YiYunGateNav = () => (
  <div className="container_consimTitle">
    <span className="container_title_text">
      复旦大学邯郸校区中华经济文化研究中心
    </span>

    <div className="container_consimTitle_router">
      <div className="TopNavBar_Table_container">
        <div className="triangle-right" />

        <Link to="/yiyungate" style={{ color: "#82cdbf" }}>
          羿云门禁
        </Link>
      </div>
    </div>
  </div>
);
