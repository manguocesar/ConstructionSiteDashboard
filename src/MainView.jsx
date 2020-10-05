import React from "react";

//components
import ListofSites from "./ListOfSites";
import SiteLocation from "./SiteLocation";
import TopPannel from "./TopPannel";
import NavigationPannel from "./NavigationPannel";
import ComponentTopLeft from "./ComponentTopLeft";
import ComponentTopRight from "./ComponentTopRight";

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
            <ComponentTopLeft />
            <ListofSites />
          </div>
          <div className="container_info_right">
            <ComponentTopRight />
            <SiteLocation />
          </div>
        </div>
      </div>
    </div>
  );
}
