import React, {useContext} from "react";
import { Link } from "@reach/router";
import {motion} from 'framer-motion'

//style
import "./NavigationPannel.css";



//SVG defines vector-based graphics in XML format.
import IconCustomer from "./navIcon/home.svg";
import IconOperator from "./navIcon/men.svg";
import IconSchedule from "./navIcon/calandar.svg";
import IconSafety from "./navIcon/shield.svg";
import IconEquipment from "./navIcon/digger.svg";
import IconSetting from "./navIcon/settings.svg";
import IconEnvironment from "./navIcon/tree.svg";
import logoutIcon from "./navIcon/logout.svg";

//context
import { AnimationsContext } from "../contexts/AnimationsContext";

export default function NavigationPannel({ signout }) {

  const { buttonVariants } = useContext(AnimationsContext);

  return (
    <div className="container_nav">
      <ul className="menu_basic">
        <li className="menu_basic_li" >
          <Link
          
            style={{ display: "flex", height: "100%", width: "100%" }}
            to="/"
          >
            <motion.img variants={buttonVariants}
          whileHover ="hover" src={IconCustomer} alt="logo" className="icon_nav_basic" />
          </Link>
        </li>

        <li className="menu_basic_li">
          <Link
            style={{ display: "flex", height: "100%", width: "100%" }}
            to="Equipments"
          >
            <motion.img 
          //   variants={buttonVariants}
          // whileHover ="hover"
              src={IconEquipment}
              alt="logo"
              className="icon_nav_basicInactive"
            />
          </Link>
        </li>

        <li className="menu_basic_li">
          <Link
            style={{ display: "flex", height: "100%", width: "100%" }}
            to="Operators"
          >
            <motion.img variants={buttonVariants}
          whileHover ="hover" src={IconOperator} alt="logo" className="icon_nav_basic" />
          </Link>
        </li>
        <li className="menu_basic_li">
          <Link
            style={{ display: "flex", height: "100%", width: "100%" }}
            to="shield"
          >
            <motion.img
          //    variants={buttonVariants}
          // whileHover ="hover"
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
            <motion.img 
          //   variants={buttonVariants}
          // whileHover ="hover"
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
            <motion.img 
          //   variants={buttonVariants}
          // whileHover ="hover"
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
            <motion.img
          //    variants={buttonVariants}
          // whileHover ="hover"
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
            <motion.img variants={buttonVariants}
          whileHover ="hover"
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
