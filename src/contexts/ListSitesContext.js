import React, { createContext, useState } from "react";

export const ListSitesContext = createContext();

const ListSitesContextProvider = (props) => {

  const [sites, setSites] = useState([]);
  const [currentProjectName, setCurrentProjectName] = useState('');
  const [selectedSiteId, setSelectedSiteId] = useState(1);

  const selectedSite = sites.find((x) => x.order === selectedSiteId);

  return (
    <ListSitesContext.Provider
      value={{ sites, setSelectedSiteId, selectedSite, currentProjectName, setCurrentProjectName, setSites }} >
      {props.children}
    </ListSitesContext.Provider>
  );
};

export default ListSitesContextProvider;
