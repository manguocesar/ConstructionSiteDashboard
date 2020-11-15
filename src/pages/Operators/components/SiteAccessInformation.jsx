import React, { useState } from "react";

//img
import SearchIcon from "./SearchIcon.png";

//component
import SearchInput from "./SearchInput";
import ExportButton from "./ExportButton";

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
    setTextTwo("");
  }

  function handleExportTwo(e) {
    e.preventDefault();
  }

  return (
    <div className="SiteAccessInformation">
      <div className="SiteAccessInformation_top">
        <span className="SiteAccessInformation_title">工地出入信息</span>
        <SearchInput
          value={textTwo}
          onChange={handleChangeSearch_SiteAccessInformation}
          onClickIcon={handleClick_SiteAccessInformation}
          container={"SiteAccessInformation_searchBar_container"}
          content={"SiteAccessInformation_searchBar_content"}
          placeholder={"请输入工地名称/编号。。。"}
        />
        <ExportButton
          onClickButton={handleExportTwo}
          button_style={"SiteAccessInformation_export"}
        />
      </div>
      <div className="SiteAccessInformation_table">
        <p style={{fontSize:"2vh"}}>Table : In and out DB from site gate system</p>
      </div>
    </div>
  );
}
