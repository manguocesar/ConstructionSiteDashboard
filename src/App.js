import React, { useState } from "react";

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

const LoginStatus = {
  NotLoggedIn: 0,
  LoggedIn: 1,
  LoggedInAdmin: 2,
};

function App() {
  let [loginStatus, setLoginStatus] = useState(LoginStatus.NotLoggedIn);

  //set back the original state
  function signout() {
    setLoginStatus(LoginStatus.NotLoggedIn);
  }

  const signin = (username, password) => {
    if (username === "other" && password === "other") {
      setLoginStatus(LoginStatus.LoggedInAdmin);
    } else {
      setLoginStatus(LoginStatus.LoggedIn);
    }
  };

  loginStatus = LoginStatus.LoggedIn;

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
