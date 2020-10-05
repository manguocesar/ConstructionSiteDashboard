import React from "react";

//style
import "./Equipment.css";

//img
import SearchIcon from "./SearchIcon.png";

//components

export default function Equipment() {
  return (
    <div className="container_info_display_Equipment">
      <div className="EquipmentOne">
        <div className="EquipmentOne_top">
          <span>工地用工信息</span>
          <div className="EquipmentOne_searchBar">
            <span style={{ marginLeft: "5%" }}>请输入工地名称/编号。。。</span>
            <img style={{ marginRight: "5%" }} alt="" src={SearchIcon} />
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
              <span style={{ marginLeft: "5%" }}>
                请输入工地名称/编号。。。
              </span>
              <img style={{ marginRight: "5%" }} alt="" src={SearchIcon} />
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
