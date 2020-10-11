import React, { createContext, useState } from "react";

// import { SitesReducer } from "../services/SitesReducer";

import customerLogo from "./img/newLogo.svg";

export const ListSitesContext = createContext();

const ListSitesContextProvider = (props) => {
  let sites = [
    {
      order: 1,
      img: customerLogo,
      text: "中原数字印刷产业园项目",
      selected: false,
      longitude: 121.480944,
      latitude: 31.2,
    },
    {
      order: 2,
      img: customerLogo,
      text: "中原数字",
      selected: false,
      longitude: 121.480944,
      latitude: 31.236171,
    },
    // {
    //   order: 3,
    //   img: customerLogo,
    //   text: "中原数字",
    //   selected: false,
    //   longitude: 114.183361,
    //   latitude: 22.303099,
    // },
    // {
    //   order: 4,
    //   img: customerLogo,
    //   text: "中原数字",
    //   selected: false,
    //   longitude: 116.412309,
    //   latitude: 39.904413,
    // },
  ];

  const [selectedSiteId, setSelectedSiteId] = useState(1);

  const selectedSite = sites.find((x) => x.order === selectedSiteId);

  return (
    <ListSitesContext.Provider
      value={{ sites, setSelectedSiteId, selectedSite }}
    >
      {props.children}
    </ListSitesContext.Provider>
  );
};

export default ListSitesContextProvider;
