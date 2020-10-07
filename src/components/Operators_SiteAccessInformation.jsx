import React, { useState } from "react";

//img
import SearchIcon from "./img/SearchIcon.png";

import "./Operators_SiteAccessInformation.css";

export default function Operators_SiteAccessInformation() {
  const [textTwo, setTextTwo] = useState();

  function handleChangeSearch_SiteAccessInformation(e) {
    e.preventDefault();
    setTextTwo(e.target.value);
  }

  function handleClick_SiteAccessInformation(e) {
    e.preventDefault();
    console.log("Search for => ", textTwo);
    setTextTwo("");
  }

  function handleExportTwo(e) {
    e.preventDefault();
    console.log("Exporting SiteAccessInformation data");
  }

  return (
    <div className="Operators_SiteAccessInformation">
      <div className="Operators_SiteAccessInformation_top">
        <span className="Operators_SiteAccessInformation_title">
          工地出入信息
        </span>
        <div className="Operators_SiteAccessInformation_searchBar_container">
          <label>
            <input
              className="Operators_SiteAccessInformation_SearchBar_content"
              onChange={handleChangeSearch_SiteAccessInformation}
              placeholder="请输入工地名称/编号。。。"
              type="text"
              name="newText"
              id="mainInput"
              maxlength="100"
              value={textTwo}
            />
          </label>
          <img
            onClick={handleClick_SiteAccessInformation}
            style={{ marginRight: "2%", height: "60%" }}
            alt=""
            src={SearchIcon}
          />
        </div>
        <div
          onClick={handleExportTwo}
          className="Operators_SiteAccessInformation_export"
        >
          <span style={{ margin: "0% auto" }}>导出</span>
        </div>
      </div>
      <div className="Operators_SiteAccessInformation_table">
        <p>Table : In and out DB from site gate system</p>
      </div>
    </div>
  );
}
