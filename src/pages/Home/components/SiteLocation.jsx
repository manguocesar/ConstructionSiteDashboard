import React, { useState, useContext, useEffect } from "react";
import { Map, APILoader } from "@uiw/react-baidu-map";

//style
import "./SiteLocation.css";

//context
import { ListSitesContext } from "../../../contexts/ListSitesContext";

export default function SiteLocation() {
  const { selectedSite } = useContext(ListSitesContext);

  return (
    <div className="container_info_rightBottom">
      <span className="container_info_rightBottom_title">工地位置</span>
      <div className="container_info_rightBottom_map">
        <div className="map_localisation">
          <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
            {console.log(selectedSite)}
            <Map
              key={selectedSite.order}
              center={{
                lng: selectedSite.longitude,
                lat: selectedSite.latitude,
              }}
            />
          </APILoader>
        </div>
      </div>
    </div>
  );
}
