import React, { useState } from "react";

import "./Operators_SiteEmploymentInformation.css";

//img
import SearchIcon from "./img/SearchIcon.png";

export default function Operators_SiteEmploymentInformation() {
  const [textOne, setTextOne] = useState();

  function handleChangeSearchOne(e) {
    e.preventDefault();
    setTextOne(e.target.value);
  }

  function handleClickOne(e) {
    e.preventDefault();
    console.log("Search for => ", textOne);
    setTextOne("");
  }

  function handleExportOne(e) {
    e.preventDefault();
    console.log("Exporting SiteEmploymentInformation data");
  }

  return (
    <div className="Operators_SiteEmploymentInformation">
      <div className="Operators_SiteEmploymentInformation_top">
        <span className="Operators_SiteEmploymentInformation_title">
          工地用工信息
        </span>
        <div className="Operators_SiteEmploymentInformation_searchBar_container">
          <label>
            <input
              className="Operators_SiteEmploymentInformation_SearchBar_content"
              onChange={handleChangeSearchOne}
              placeholder="请输入工地名称/编号。。。"
              type="text"
              name="newText"
              id="mainInput"
              maxlength="100"
              value={textOne}
            />
          </label>
          <img
            onClick={handleClickOne}
            style={{ marginRight: "2%", height: "60%" }}
            alt=""
            src={SearchIcon}
          />
        </div>
        <div
          onClick={handleExportOne}
          className="Operators_SiteEmploymentInformation_export"
        >
          <span style={{ margin: "0% auto" }}>导出</span>
        </div>
      </div>
      <div className="Operators_SiteEmploymentInformation_table">
        <p>Table : Replica of worker DB from gov. website</p>
      </div>
    </div>
  );
}
