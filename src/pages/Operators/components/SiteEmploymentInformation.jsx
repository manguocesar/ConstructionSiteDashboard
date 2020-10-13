import React, { useState } from "react";

import "./SiteEmploymentInformation.css";

//img
import SearchIcon from "./SearchIcon.png";

//component
import SearchInput from "./SearchInput";
import ExportButton from "./ExportButton";

export default function SiteEmploymentInformation() {
  const [textOne, setTextOne] = useState();

  function handleChangeSearchOne(e) {
    e.preventDefault();
    setTextOne(e.target.value);
  }

  function onClickIcon(e) {
    e.preventDefault();
    console.log("Search for => ", textOne);
    setTextOne("");
  }

  function handleExportOne(e) {
    e.preventDefault();
    console.log("Exporting SiteEmploymentInformation data");
  }

  return (
    <div className="SiteEmploymentInformation">
      <div className="SiteEmploymentInformation_top">
        <span className="SiteEmploymentInformation_title">工地用工信息</span>

        <SearchInput
          value={textOne}
          onChange={handleChangeSearchOne}
          onClickIcon={onClickIcon}
          placeholder={"请输入工地名称/编号。。。"}
          container={"SiteEmploymentInformation_searchBar_container"}
          content={"SiteEmploymentInformation_searchBar_content"}
        />

        <ExportButton
          onClickButton={handleExportOne}
          button_style={"SiteEmploymentInformation_export"}
        />
      </div>
      <div className="SiteEmploymentInformation_table">
        <p style={{fontSize:"2vh"}}>Table : Replica of worker DB from gov. website</p>
      </div>
    </div>
  );
}
