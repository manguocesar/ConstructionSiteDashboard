import React, { useState, useCallback, useEffect } from "react";
import lockr from "lockr";
import axios from "axios";

//style
import "./App.less";

//pages
import MainView from "./pages/MainView";
import { LocationProvider } from "@reach/router";

//context
import ListSitesContextProvider from "./contexts/ListSitesContext"; // will itself imports our Reducer
import TimeContextProvider from "./contexts/TimeContext"; // will itself imports our Reducer

import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

axios.interceptors.request.use(function (config) {
  // add a timestamp or order to break cache
  config.params = {
    ...config.params,
    c: Date.now(),
  };
  return config;
});

axios.interceptors.response.use(undefined, function (error) {
  if (error.response?.status === 404) {
    return {
      ...error.response,
      data: []
    }
  }
  return Promise.reject(error);
});

function App() {
  return (
    <div className="App">
      <LocationProvider>
        <TimeContextProvider>
          <ListSitesContextProvider>
            <MainView />
          </ListSitesContextProvider>
        </TimeContextProvider>
      </LocationProvider>
    </div>
  );
}

export default App;
