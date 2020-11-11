import React, { useState, useCallback } from "react";

//style
import "./App.css";

//pages
import MainView from "./pages/MainView";
import LogIn from "./pages/LogIn";
import { LocationProvider } from "@reach/router";

//context
import ListSitesContextProvider from "./contexts/ListSitesContext"; // will itself imports our Reducer
import TimeContextProvider from "./contexts/TimeContext"; // will itself imports our Reducer
import AnimationsContextProvider from "./contexts/AnimationsContext"; // will itself imports our Reducer

import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

const LoginStatus = {
  NotLoggedIn: 0,
  LoggedIn: 1,
  LoggedInAdmin: 2,
};

function App() {
  let [loginStatus, setLoginStatus] = useState(LoginStatus.NotLoggedIn);

  const signout = useCallback(() => {
    setLoginStatus(LoginStatus.NotLoggedIn);
  }, [setLoginStatus]);

  const signin = useCallback(
    (username, password) => {
      // if (username === "other" && password === "other") {
        setLoginStatus(LoginStatus.LoggedIn);
      // }
    },
    [setLoginStatus]
  );

  return (
    <div className="App">
      <LocationProvider>
        <TimeContextProvider>
          <ListSitesContextProvider>
            <AnimationsContextProvider>
              {loginStatus === LoginStatus.NotLoggedIn && (
                <LogIn signin={signin} />
              )}
              {loginStatus === LoginStatus.LoggedIn && (
                <MainView signout={signout} />
              )}
            </AnimationsContextProvider>
          </ListSitesContextProvider>
        </TimeContextProvider>
      </LocationProvider>
    </div>
  );
}

export default App;
