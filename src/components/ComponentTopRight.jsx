import React from "react";

import "./ComponentTopRight.css";

export default function ComponentTopRight() {
  return (
    <div className="container_info_rightTop">
      <div className="container_info_rightTop_title">
        <span style={{ margin: "0% 1% 0% 4%" }}>总体指标</span>{" "}
      </div>

      <div className="container_info_rightTop_pannelOne">
        <span style={{ margin: "1% 1% 1% 4%" }}>工地数量</span>
        <span style={{ margin: "1% 4% 1% 1%" }}>2</span>
      </div>

      <div className="container_info_rightTop_pannelTwo">
        <span style={{ margin: "1% 1% 1% 4%" }}>工人总数</span>
        <span style={{ margin: "1% 4% 1% 1%" }}>548</span>
      </div>

      <div className="container_info_rightTop_pannelThree">
        <span>公告栏</span>
        <span>暂无信息</span>
      </div>
    </div>
  );
}
