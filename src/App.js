import React, { useState } from "react";

//style
import "./App.css";

//pages
import MainView from "./pages/MainView";
import LogIn from "./pages/LogIn";

//context
import ListSitesContextProvider from "./contexts/ListSitesContext"; // will itself imports our Reducer
import TimeContextProvider from "./contexts/TimeContext"; // will itself imports our Reducer

const LoginStatus = {
  NotLoggedIn: 0,
  LoggedIn: 1,
  LoggedInAdmin: 2,
};

function App() {
  const [loginStatus, setLoginStatus] = useState(LoginStatus.LoggedIn);

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

  return (
    <div className="App">
      <TimeContextProvider>
        <ListSitesContextProvider>
          {loginStatus === LoginStatus.NotLoggedIn && <LogIn signin={signin} />}
          {loginStatus === LoginStatus.LoggedIn && (
            <MainView signout={signout} />
          )}
        </ListSitesContextProvider>
      </TimeContextProvider>
    </div>
  );
}

export default App;
