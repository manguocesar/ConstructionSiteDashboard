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
    },
    {
      order: 2,
      img: customerLogo,
      text: "中原数字",
      selected: false,
    },
    // {
    //   order: 3,
    //   img: customerLogo,
    //   text: "中原数字",
    //   selected: false,
    // },
    // {
    //   order: 4,
    //   img: customerLogo,
    //   text: "中原数字",
    //   selected: false,
    // },
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
