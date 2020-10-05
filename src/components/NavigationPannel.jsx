import React, { useContext } from "react";
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
    <div>
      <ul className="menu-basic">
        <li>
          <Link to="/">
            <img src={IconCustomer} alt="logo" className="icon_nav_basic" />
          </Link>
        </li>

        <div>
          <li>
            <Link to="Equipment">
              <img src={IconEquipment} alt="logo" className="icon_nav_basic" />
            </Link>
          </li>

          <li>
            <Link to="operators">
              <img src={IconOperator} alt="logo" className="icon_nav_basic" />
            </Link>
          </li>
          <li>
            <Link to="shield">
              <img src={IconSafety} alt="logo" className="icon_nav_basic" />
            </Link>
          </li>
          <li>
            <Link to="tree">
              <img
                src={IconEnvironment}
                alt="logo"
                className="icon_nav_basic"
              />
            </Link>
          </li>
          <li>
            <Link to="calandar">
              <img src={IconSchedule} alt="logo" className="icon_nav_basic" />
            </Link>
          </li>

          <li>
            <Link to="setting">
              <img src={IconSetting} alt="logo" className="icon_nav_basic" />
            </Link>
          </li>
        </div>
      </ul>

      <div>
        <Link to={`/`}>
          <img
            src={logoutIcon}
            alt="logout"
            className="icon_nav_basic"
            onClick={signout}
          />
        </Link>
      </div>
    </div>
  );
}
