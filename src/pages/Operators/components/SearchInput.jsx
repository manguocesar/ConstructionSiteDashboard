import React from "react";

export default function SearchInput() {
  return (
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
  );
}
