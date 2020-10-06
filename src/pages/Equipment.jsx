import React, { useState } from "react";

//style
import "./Equipment.css";

//img
import SearchIcon from "./img/SearchIcon.png";

//components

export default function Equipment() {
  const [textOne, setTextOne] = useState();
  const [textTwo, setTextTwo] = useState();

  function handleChangeSearchOne(e) {
    e.preventDefault();
    setTextOne(e.target.value);
  }

  function handleClickOne(e) {
    e.preventDefault();
    console.log("Search for => ", textOne);
    setTextOne("");
  }

  function handleChangeSearchTwo(e) {
    e.preventDefault();
    setTextTwo(e.target.value);
  }

  function handleClickTwo(e) {
    e.preventDefault();
    console.log("Search for => ", textTwo);
    setTextTwo("");
  }

  return (
    <div className="container_info_display_Equipment">
      <div className="EquipmentOne">
        <div className="EquipmentOne_top">
          <span>工地用工信息</span>
          <div className="EquipmentOne_searchBar">
            <label>
              <input
                className="Equipment_SearchBar"
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
          <div className="EquipmentOne_export">
            <span style={{ margin: "0% auto" }}>导出</span>
          </div>
        </div>
        <div className="EquipmentOne_table">
          <p>Table</p>
        </div>
      </div>
      <div className="container_bottom_Equipment">
        <div className="EquipmentTwo">
          <div className="EquipmentTwo_top">
            {" "}
            <span>工地出入信息</span>
            <div className="EquipmentOne_searchBar">
              <label>
                <input
                  className="Equipment_SearchBar"
                  onChange={handleChangeSearchTwo}
                  placeholder="请输入工地名称/编号。。。"
                  type="text"
                  name="newText"
                  id="mainInput"
                  maxlength="100"
                  value={textTwo}
                />
              </label>
              <img
                onClick={handleClickTwo}
                style={{ marginRight: "2%", height: "60%" }}
                alt=""
                src={SearchIcon}
              />
            </div>
            <div className="EquipmentOne_export">
              <span style={{ margin: "0% auto" }}>导出</span>
            </div>
          </div>
          <div className="EquipmentTwo_table">
            <p>Table</p>
          </div>
        </div>
        <div className="EquipmentThree">
          <div className="EquipmentThree_top">
            <span>巡检报告</span>
            <div className="EquipmentOne_export">
              <span style={{}}>导出</span>
            </div>
          </div>
          <div className="EquipmentThree_table">
            <p>Table</p>
          </div>
        </div>
      </div>
    </div>
  );
}
