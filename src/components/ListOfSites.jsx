import React, { useState, useContext } from "react";
import { Link } from "@reach/router";

//image
import exPlan from "./img/exPlan.png";
import positionSmall from "./img/positionSmall.svg";
import SearchIcon from "./img/SearchIcon.png";

//context
import { ListSitesContext } from "../contexts/ListSitesContext";

//styles
import "./ListOfSites.css";

export default function ListOfSites() {
  const { setHasChosenSite, list, addTrue } = useContext(ListSitesContext);

  let nbrMap = 8 - list.stateList.length;
  let arrIcon = [];
  for (let i = 0; nbrMap > i; i++) {
    arrIcon.push(i);
  }

  const [text, setText] = useState();

  function handleChange(e) {
    e.preventDefault();
    setText(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    console.log("Search for => ", text);
    setText("");
  }

  return (
    <div className="container_info_leftBottom">
      <div className="container_info_leftBottom_searchBar">
        <label>
          <input
            className="ListOfSite_SearchBar"
            onChange={handleChange}
            placeholder="请输入工地名称/编号。。。"
            type="text"
            name="newText"
            id="mainInput"
            maxlength="100"
            value={text}
          ></input>
        </label>
        <img
          onClick={handleClick}
          style={{ marginRight: "2%", height: "60%" }}
          alt=""
          src={SearchIcon}
        />
      </div>
      <div className="container_info_leftTop_sitesList">
        <div className="container_home_list_of_sites">
          {list.stateList.map((nbr, key) => (
            <div
              key={key}
              className={
                nbr.selected
                  ? "site_item_activeBasic"
                  : "site_item_inactiveBasic"
              }
            >
              <div className="site_item_inactiveBasic_container_text">
                <div className="site_device_name_site">
                  <span className="site_device_name_title">
                    复旦大学项目
                    <br /> 二建集团第六分公司
                  </span>
                </div>
                <div className="site_device_numBasic">
                  <img
                    className="sites_icon_localisation"
                    src={positionSmall}
                    alt="positionSmall"
                  />
                  <span
                    style={{ width: "90%", height: "50%", fontSize: "0.8vw" }}
                  >
                    {nbr.text}
                  </span>
                </div>

                <Link to="/Equipment">
                  <div
                    onClick={() => {
                      addTrue(nbr.order);
                      setHasChosenSite(true);
                    }}
                    className="site_enterBasic_home"
                  >
                    进入工地
                  </div>
                </Link>
              </div>
            </div>
          ))}

          {arrIcon.map(() => (
            <div className="container_emptyIcons_home">
              <img alt="emptySite" src={exPlan} className="emptyIcons_home" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
