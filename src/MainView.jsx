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
          <div className="container_info_left">
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
              <div className="container_info_leftTop_searchBar">
                <span style={{ marginLeft: "5%" }}>
                  请输入工地名称/编号。。。
                </span>
              </div>
              <div className="container_info_leftTop_sitesList">
                <ListofSites />
              </div>
            </div>
          </div>
          <div className="container_info_right">
            <div className="container_info_rightTop">
              <div className="container_info_rightTop_title">
                <span style={{ margin: "0% 1% 0% 4%" }}>总体指标</span>{" "}
              </div>

              <div className="container_info_rightTop_pannelOne">
                <span style={{ margin: "1% 1% 1% 4%" }}>工地数量</span>
                <span style={{ margin: "1% 4% 1% 1%" }}>2</span>
              </div>

              <div className="container_info_rightTop_pannelTwo">
                <span style={{ margin: "1% 1% 1% 4%" }}>工人总数</span>
                <span style={{ margin: "1% 4% 1% 1%" }}>548</span>
              </div>

              <div className="container_info_rightTop_pannelThree">
                <span>公告栏</span>
                <span>暂无信息</span>
              </div>
            </div>
            <div className="container_info_rightBottom">
              <span className="container_info_rightBottom_title">工地位置</span>
              <div className="container_info_rightBottom_map">
                <SiteLocation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
