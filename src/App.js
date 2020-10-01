import React, { useState } from "react";

//style
import "./App.css";

//pages
import MainView from "./MainView";
import LogIn from "./LogIn";

//context
import ListSitesContextProvider from "./ListSitesContext"; // will itself imports our Reducer

const LoginStatus = {
  NotLoggedIn: 0,
  LoggedIn: 1,
  LoggedInAdmin: 2,
};

function App() {
  const [loginStatus, setLoginStatus] = useState(LoginStatus.NotLoggedIn);

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
      <ListSitesContextProvider>
        {loginStatus === LoginStatus.NotLoggedIn && <LogIn signin={signin} />}
        {loginStatus === LoginStatus.LoggedIn && <MainView signout={signout} />}
      </ListSitesContextProvider>
    </div>
  );
}

export default App;
