import React, { useContext } from "react";
import { Map, APILoader } from "@uiw/react-baidu-map";

//style
import "./SiteLocation.css";

//context
import { ListSitesContext } from "../../../contexts/ListSitesContext";

export default function SiteLocation({latLong}) {
  const { selectedSite } = useContext(ListSitesContext);


  return (
    <div className="map_localisation"  >
    <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
      <Map
        key={selectedSite?.id}
        // when no coordinates, Fudan coordinates are displayed
        center={{
          lng: latLong ? latLong.latitude : 121.5095,
          lat:  latLong ? latLong.longitude : 31.2995
        }} 
        zoom={18}
      />
    </APILoader>
  </div>
  );
}
