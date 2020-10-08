import React, { useState } from "react";

//img
import SearchIcon from "./SearchIcon.png";

//style
import "./SiteAccessInformation.css";

export default function SiteAccessInformation() {
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
    <div className="SiteAccessInformation">
      <div className="SiteAccessInformation_top">
        <span className="SiteAccessInformation_title">工地出入信息</span>
        <div className="SiteAccessInformation_searchBar_container">
          <label>
            <input
              className="SiteAccessInformation_SearchBar_content"
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
        <button
          onClick={handleExportTwo}
          className="SiteAccessInformation_export"
        >
          <span style={{ margin: "0% auto" }}>导出</span>
        </button>
      </div>
      <div className="SiteAccessInformation_table">
        <p>Table : In and out DB from site gate system</p>
      </div>
    </div>
  );
}
