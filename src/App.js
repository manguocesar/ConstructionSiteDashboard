import React, { useState, useCallback, useEffect } from "react";
import lockr from "lockr";
import axios from "axios";

//style
import "./App.less";

//pages
import MainView from "./pages/MainView";
import { LocationProvider, navigate } from "@reach/router";

//context
import ListSitesContextProvider from "./contexts/ListSitesContext"; // will itself imports our Reducer
import TimeContextProvider from "./contexts/TimeContext"; // will itself imports our Reducer

import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.params = {
    ...config.params,
    c: Date.now(),
  };
  return config;
});

const LoginStatus = {
  NotLoggedIn: 0,
  LoggedIn: 1,
};

const tenants = [
  {
    credentials: {
      username: "",
      password: "",
    },
    projectName: "",
    sites: [
      {
        order: 1,
        projectShortName: "",
        projectName: "",
        company: "",
        location: "",
      },
    ],
  },
];

function App() {
  let [loginStatus, setLoginStatus] = useState(LoginStatus.NotLoggedIn);

  useEffect(() => {
    const isLoggedIn = !!lockr.get("login_status");
    if (isLoggedIn) {
      const { projectName, sites } = !!lockr.get("current_tenant");
      setLoginStatus(LoginStatus.LoggedIn);
    }
  }, [0]);

  const signout = useCallback(() => {
    setLoginStatus(LoginStatus.NotLoggedIn);
    lockr.rm("login_status");
  }, [setLoginStatus]);

  const signin = useCallback(
    (username, password) => {
      // for (const tenant of tenants) {
      //   const { credentials, sites, projectName } = tenant;
      //   if (
      //     username === credentials.username &&
      //     password === credentials.password
      //   ) {
      //     setLoginStatus(LoginStatus.LoggedIn);
      //     lockr.set("login_status", true);
      //     lockr.set("current_tenant", {
      //       projectName,
      //       sites,
      //     });
      //     navigate("/");
      //     return;
      //   }
      // }
      // message.error("用户名或密码不正确");
      lockr.set("login_status", true);
      navigate("/");
    },
    [setLoginStatus]
  );

  return (
    <div className="App">
      <LocationProvider>
        <TimeContextProvider>
          <ListSitesContextProvider>
            <MainView signout={signout} />
          </ListSitesContextProvider>
        </TimeContextProvider>
      </LocationProvider>
    </div>
  );
}

export default App;
