import React from "react";
import { Link } from "@reach/router";

//style
import "./NavigationPannel.css";

//context

//SVG defines vector-based graphics in XML format.
import IconCustomer from "./navIcon/home.svg";
import IconOperator from "./navIcon/men.svg";
import IconSchedule from "./navIcon/calandar.svg";
import IconSafety from "./navIcon/shield.svg";
import IconEquipment from "./navIcon/digger.svg";
import IconSetting from "./navIcon/settings.svg";
import IconEnvironment from "./navIcon/tree.svg";
import logoutIcon from "./navIcon/logout.svg";

export default function NavigationPannel({ signout }) {
  return (
    <div className="container_nav">
      <ul className="menu_basic">
        <li className="menu_basic_li">
          <Link
            style={{ display: "flex", height: "100%", width: "100%" }}
            to="/"
          >
            <img src={IconCustomer} alt="logo" className="icon_nav_basic" />
          </Link>
        </li>

        <li className="menu_basic_li">
          <Link
            style={{ display: "flex", height: "100%", width: "100%" }}
            to="Equipment"
          >
            <img
              src={IconEquipment}
              alt="logo"
              className="icon_nav_basicInactive"
            />
          </Link>
        </li>

        <li className="menu_basic_li">
          <Link
            style={{ display: "flex", height: "100%", width: "100%" }}
            to="operators"
          >
            <img src={IconOperator} alt="logo" className="icon_nav_basic" />
          </Link>
        </li>
        <li className="menu_basic_li">
          <Link
            style={{ display: "flex", height: "100%", width: "100%" }}
            to="shield"
          >
            <img
              src={IconSafety}
              alt="logo"
              className="icon_nav_basicInactive"
            />
          </Link>
        </li>
        <li className="menu_basic_li">
          <Link
            style={{ display: "flex", height: "100%", width: "100%" }}
            to="tree"
          >
            <img
              src={IconEnvironment}
              alt="logo"
              className="icon_nav_basicInactive"
            />
          </Link>
        </li>
        <li className="menu_basic_li">
          <Link
            style={{ display: "flex", height: "100%", width: "100%" }}
            to="calandar"
          >
            <img
              src={IconSchedule}
              alt="logo"
              className="icon_nav_basicInactive"
            />
          </Link>
        </li>

        <li className="menu_basic_li">
          <Link
            style={{ display: "flex", height: "100%", width: "100%" }}
            to="setting"
          >
            <img
              src={IconSetting}
              alt="logo"
              className="icon_nav_basicInactive"
            />
          </Link>
        </li>

        <li className="menu_basic_li">
          <Link
            style={{ display: "flex", height: "100%", width: "100%" }}
            to={`/`}
          >
            <img
              src={logoutIcon}
              alt="logout"
              className="icon_nav_basic"
              onClick={signout}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
