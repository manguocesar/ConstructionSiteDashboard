import React from "react";
import { Router } from "@reach/router";

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
          <ViewNav title="复旦大学邯郸校区中华经济文化研究中心" pageName="移动巡检" path="Inspection" />
          <ViewNav title="复旦大学邯郸校区中华经济文化研究中心" pageName="安标网信息" path="networkinformation" />
          <ViewNav title="复旦大学邯郸校区中华经济文化研究中心" pageName="羿云门禁" path="yiyungate" />
        </Router>
      </div>
      <div className="display_logo">
        <img alt="" src={imagecompany} className="companyLogo_basic" />
        <span className="text_logo">上海建工</span>
      </div>
    </div>
  );
}
