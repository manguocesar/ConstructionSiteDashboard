import React from "react";

//style
import "./Home.css";

//components
import ListofSites from "../components/ListOfSites";
import SiteLocation from "../components/SiteLocation";
import ComponentTopLeft from "../components/ComponentTopLeft";
import ComponentTopRight from "../components/ComponentTopRight";

export default function Home() {
  return (
    <div className="container_info_display_home">
      <div className="container_info_left">
        <ComponentTopLeft />
        <ListofSites />
      </div>
      <div className="container_info_right">
        <ComponentTopRight />
        <SiteLocation />
      </div>
    </div>
  );
}
