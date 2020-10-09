import React, { useState } from "react";

//img
import SearchIcon from "./SearchIcon.png";

//style
import "./SiteEmploymentInformation.css";

export default function SearchInput(props) {
  const {
    onChange,
    value,
    placeholder,
    onClickIcon,
    container,
    content,
    style,
  } = props;

  return (
    <div className={container} style={style}>
      <label>
        <input
          className={content}
          onChange={onChange}
          placeholder={placeholder}
          type="text"
          maxlength="100"
          value={value}
        />
      </label>
      <img
        onClick={onClickIcon}
        style={{ marginRight: "2%", height: "60%" }}
        alt=""
        src={SearchIcon}
      />
    </div>
  );
}
