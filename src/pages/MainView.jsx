import React from "react";
import { Link, Router } from "@reach/router";

//components
import TopPannel from "../components/TopPannel";
import NavigationPannel from "../components/NavigationPannel";
import Home from "./Home";
import Equipment from "./Equipment";
import NotFound from "../components/NotFound";

//style
import "./MainView.css";

export default function MainView({ signout }) {
  return (
    <div style={{ color: "white" }} className="main_container">
      <div className="container_header">
        <TopPannel />
      </div>
      <div className="container_underTop">
        <div className="container_nav">
          <NavigationPannel signout={signout} />
        </div>

        <Router>
          <Home path="/" />
          <Equipment path="Equipment" />

          <NotFound default />
        </Router>
      </div>
    </div>
  );
}
