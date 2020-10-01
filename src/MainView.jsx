import React from "react";

//components
import ListofSites from "./ListOfSites";
import SiteLocation from "./SiteLocation";
import TopPannel from "./TopPannel";
import NavigationPannel from "./NavigationPannel";

//style
import "./MainView.css";

export default function MainView({ signout }) {
  return (
    <div style={{ color: "white" }} className="main_container">
      <div className="container_header">
        <TopPannel />
      </div>
      <div className="container_underTop">
        <div className="container_nav">
          <NavigationPannel signout={signout} />
        </div>
        <div className="container_info_diplay">
          333
          <div className="container_info_left">
            444
            <div className="container_info_leftTop">
              <div className="container_info_leftTop_title">复旦大学项目</div>
              <div className="container_info_leftTop_pannel">
                <div className="container_info_leftTop_pannel_one">
                  工人数量
                </div>
                <div className="container_info_leftTop_pannel_two">
                  2020年10月9日 12:30:57
                </div>
              </div>
            </div>
            <div className="container_info_leftBottom">
              666
              <div className="container_info_leftTop_searchBar">Search bar</div>
              <div className="container_info_leftTop_sitesList">
                <ListofSites />
              </div>
            </div>
          </div>
          <div className="container_info_right">
            777
            <div className="container_info_rightTop">
              <div className="container_info_rightTop_title">总体指标 </div>

              <div className="container_info_rightTop_pannelOne">工地数量 </div>

              <div className="container_info_rightTop_pannelTwo">工人总数 </div>

              <div className="container_info_rightTop_pannelThree">公告栏 </div>
            </div>
            <div className="container_info_rightBottom">
              <div className="container_info_rightBottom_title">map</div>
              <div className="container_info_rightBottom_map">
                <SiteLocation />
              </div>
            </div>
          </div>
          aaa
        </div>
      </div>{" "}
    </div>
  );
}
