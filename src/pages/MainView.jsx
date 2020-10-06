import React from "react";
import { Link, Router } from "@reach/router";

//components
import TopPannel from "../components/TopPannel";
import NavigationPannel from "../components/NavigationPannel";
import Home from "./Home";
import Operators from "./Operators";
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
        <NavigationPannel signout={signout} />
        <div className="container_body">
          <Router
            style={{
              border: "red solid 2px",
              display: "flex",
              width: "100%",
              height: "100%",
            }}
          >
            <Home path="/" />
            <Operators path="Operators" />
            <NotFound default />
          </Router>
        </div>{" "}
      </div>
    </div>
  );
}
