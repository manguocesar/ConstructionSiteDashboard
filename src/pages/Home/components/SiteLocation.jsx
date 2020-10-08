import React from "react";

//style
import "./SiteLocation.css";

export default function SiteLocation() {
  return (
    <div className="container_info_rightBottom">
      <span className="container_info_rightBottom_title">工地位置</span>
      <div className="container_info_rightBottom_map">
        <iframe
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
        ></iframe>
      </div>
    </div>
  );
}
