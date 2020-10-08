import React, { useState } from "react";

//img
import SearchIcon from "./SearchIcon.png";

//style
import "./SiteEmploymentInformation.css";

export default function SearchInput(handleChangeSearchOne) {
  const [textOne, setTextOne] = useState();

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
    <div className="SiteEmploymentInformation_searchBar_container">
      <label>
        <input
          className="SiteEmploymentInformation_SearchBar_content"
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
  );
}
