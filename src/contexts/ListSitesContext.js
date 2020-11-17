import React, { createContext, useState } from "react";

// import { SitesReducer } from "../services/SitesReducer";

import customerLogo from "./img/newLogo.svg";

export const ListSitesContext = createContext();

const ListSitesContextProvider = (props) => {
  let sites = [
    {
      order: 1,
      img: customerLogo,
      title: '二建集团第六工程公司',
      text: "邯郸路155号",
      selected: false,
      // 31.292305, 121.504120
      // 121.511214,31.297654
      longitude: 121.511214,
      latitude: 31.297654,
    },
    // {
    //   order: 2,
    //   img: customerLogo,
    //   text: "中原数字",
    //   selected: false,
    //   longitude: 121.480944,
    //   latitude: 31.236171,
    // },
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
      value={{ sites, setSelectedSiteId, selectedSite }} >
      {props.children}
    </ListSitesContext.Provider>
  );
};

export default ListSitesContextProvider;
