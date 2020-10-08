import React, { useState, useContext, useEffect } from "react";
import { Map, APILoader } from "@uiw/react-baidu-map";

//style
import "./SiteLocation.css";

//context
import { ListSitesContext } from "../../../contexts/ListSitesContext";

export default function SiteLocation() {
  const { list } = useContext(ListSitesContext);

  const [positionMap, setPositionMap] = useState([0, 0]);

  var itemSelected = {};

  const whichIsTrue = (arr) => {
    return arr.selected === true;
  };

  const giveValues = (itemSelected) => {
    itemSelected = list.stateList.find(whichIsTrue);
    return itemSelected;
  };
  giveValues(itemSelected);

  // setPositionMap([isSelected.lat, isSelected.long]);

  return (
    <div className="container_info_rightBottom">
      <span className="container_info_rightBottom_title">工地位置</span>
      <div className="container_info_rightBottom_map">
        <div style={{ width: "100%", height: "160px" }}>
          <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
            <Map center={{ lng: 116.393345, lat: 39.936183 }} />
            {/* <Map center={{ lng: ${positionMap[0]}, lat:  ${positionMap[1]} }} /> */}
          </APILoader>
        </div>

        {/* <iframe
          className="map_localisation"
          title="mapLocalisation"
          allowfullscreen="false"
          allowpaymentrequest="false"
          id="gmap_canvas"
          content="none"
          src="http://api.map.baidu.com/marker?location=34.7,113.6&iwloc=near&output=html"
          // src="https://maps.google.com/maps?q=%E4%B8%AD%E7%89%9F%E5%8E%BF%E5%BE%B7%E6%83%A0%E8%A1%97&t=&z=11&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe> */}
      </div>
    </div>
  );
}
