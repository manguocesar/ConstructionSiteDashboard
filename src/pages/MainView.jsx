import React from "react";
import { Router } from "@reach/router";

//components
import TopPannel from "../components/TopPannel";
import NavigationPannel from "../components/NavigationPannel";
import Home from "./Home/index";
import Operators from "./Operators/index";
import NotFound from "../components/NotFound";
import GridView from '../components/GridView';
import Inspection from './Inspection';

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
          <Router className="container_body_router">
            <Home path="/" />
            <Operators path="Operators" />
            <GridView path="Equipments"/>
            <Inspection path="Inspection" />
            <NotFound default />
          </Router>
        </div>
      </div>
    </div>
  );
}
