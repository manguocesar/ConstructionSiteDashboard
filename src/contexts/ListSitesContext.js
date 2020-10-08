import React, { createContext, useState, useReducer } from "react";

import { SitesReducer } from "../services/SitesReducer";

import customerLogo from "./img/newLogo.svg";

export const ListSitesContext = createContext();

const ListSitesContextProvider = (props) => {
  let sitesList = [
    {
      order: 1,
      img: customerLogo,
      text: "中原数字印刷产业园项目",
      selected: false,
      lat: 121.512959,
      long: 31.306697,
    },
    {
      order: 2,
      img: customerLogo,
      text: "中原数字",
      selected: false,
      lat: 121.480944,
      long: 31.236171,
    },
    {
      order: 3,
      img: customerLogo,
      text: "中原数字",
      selected: false,
      lat: 114.183361,
      long: 22.303099,
    },
    {
      order: 4,
      img: customerLogo,
      text: "中原数字",
      selected: false,
      lat: 116.412309,
      long: 39.904413,
    },
  ];

  const [hasChosenSite, setHasChosenSite] = useState(false);

  const [list, dispatch] = useReducer(SitesReducer, {
    stateList: sitesList,
  });

  function addTrue(order) {
    return dispatch({ type: "ADD_TRUE", order });
  }

  return (
    <ListSitesContext.Provider
      value={{ list, sitesList, hasChosenSite, setHasChosenSite, addTrue }}
    >
      {props.children}
    </ListSitesContext.Provider>
  );
};

export default ListSitesContextProvider;
