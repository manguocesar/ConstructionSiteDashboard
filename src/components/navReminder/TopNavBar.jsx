import React from "react";
import { Link } from "@reach/router";
import { useLocation } from "@reach/router";

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

export function ViewNav({ title, pageName }) {
  const location = useLocation();
  return (
    <div className="container_consimTitle">
      <span className="container_title_text">{title}</span>
      <div className="container_consimTitle_router">
        <div className="TopNavBar_Table_container">
          {/* <div className="triangle-right" />
          <Link to="/" style={{ color: "#82cdbf" }}>
            首页
          </Link> */}
          <div className="triangle-right" />
          <Link to={location.pathname} style={{ color: "#82cdbf" }}>
            {pageName}
          </Link>
        </div>
      </div>
    </div>
  );
}
