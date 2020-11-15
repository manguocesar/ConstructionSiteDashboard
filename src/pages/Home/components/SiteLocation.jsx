import React, { useContext } from "react";
import { Map, APILoader } from "@uiw/react-baidu-map";

//style
import "./SiteLocation.css";

//context
import { ListSitesContext } from "../../../contexts/ListSitesContext";

export default function SiteLocation() {
  const { selectedSite } = useContext(ListSitesContext);

  return (
    <div className="map_localisation">
      <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
        <Map
          key={selectedSite.order}
          center={{
            lng: selectedSite.longitude,
            lat: selectedSite.latitude,
          }}
          zoom={18}
        />
      </APILoader>
    </div>
  );
}
