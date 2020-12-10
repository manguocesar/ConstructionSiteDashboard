import React, { useState, useContext } from "react";
import { Button, Row, Col } from "antd";

//image
import exPlan from "./img/exPlan.png";
import positionSmall from "./img/positionSmall.svg";
import SearchIcon from "./img/SearchIcon.png";

//context
import { ListSitesContext } from "../../../contexts/ListSitesContext";

//styles
import "./ListOfSites.css";

export default function ListOfSites() {
  const { sites, selectedSite, setSelectedSiteId } = useContext(
    ListSitesContext
  );
  let nbrMap = 8 - sites.length;
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
      {/* <div className="container_info_leftBottom_searchBar">
        <label className="ListOfSite_SearchBar">
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
      </div> */}
      <div className="container_info_leftBottom_sitesList">
        <Row className="row">
          {sites.map((nbr, key) => (
            <Col key={key} className="col" span={6}>
              <div
                className={`site_item_container ${
                  selectedSite?.order === nbr.order ? "selected" : ""
                }`}
              >
                <div className="site_item_inactiveBasic_container_text">
                  <div className="site_device_name_site">
                    <span className="site_device_name_title">
                      {nbr?.projectShortName}
                    </span>
                    {nbr.company}
                    <span className="site_device_name_subtitle"></span>
                  </div>
                  <div className="site_device_numBasic">
                    <img
                      className="sites_icon_localisation_img"
                      src={positionSmall}
                      alt="positionSmall"
                    />
                    <span className="sites_icon_localisation_text">
                      {nbr.location}
                    </span>
                  </div>
                  <Button
                    className="sites_button"
                    type="primary"
                    size="small"
                    onClick={() => {
                      setSelectedSiteId(nbr.order);
                    }}
                  >
                    点击进入
                  </Button>
                </div>
              </div>
            </Col>
          ))}
          {arrIcon.map((_, key) => (
            <Col key={key} className="col" span={6}>
              <div className="site_item_container container_emptyIcons_home">
                <img
                  alt="empty_Site"
                  src={exPlan}
                  className="emptyIcons_home"
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
