import React, { useContext } from "react";
import { Map, APILoader } from "@uiw/react-baidu-map";

//style
import "./SiteLocation.css";

//context
import { ListSitesContext } from "../../../contexts/ListSitesContext";

export default function SiteLocation({latLong}) {
  const { selectedSite } = useContext(ListSitesContext);

console.log("latLong",latLong)
  return (
    <div className="map_localisation"  >

      <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
        <Map
          key={selectedSite?.id}
          center={{
            lng: 
            // location? location.longitude : 
             selectedSite?.longitude,
            lat: 
            // location? location.latitude : 
             selectedSite?.latitude,
          }}
          zoom={18}
        />
      </APILoader>
    </div>
  );
}
