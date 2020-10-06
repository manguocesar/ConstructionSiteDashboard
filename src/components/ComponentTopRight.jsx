import React from "react";

import "./ComponentTopRight.css";

export default function ComponentTopRight() {
  return (
    <div className="container_info_rightTop">
      <div className="container_info_rightTop_head">
        <span className="container_info_rightTop_title">总体指标</span>{" "}
      </div>

      <div className="container_info_rightTop_pannelOne">
        <span className="container_info_rightTop_title">工地数量</span>
        <span className="green_numbers" style={{ margin: "1% 4% 1% 1%" }}>
          2
        </span>
      </div>

      <div className="container_info_rightTop_pannelTwo">
        <span className="container_info_rightTop_title">工人总数</span>
        <span className="green_numbers" style={{ margin: "1% 4% 1% 1%" }}>
          548
        </span>
      </div>

      <div className="container_info_rightTop_pannelThree">
        <span className="container_info_rightTop_text">公告栏</span>
        <div className="NoInformation">
          <span className="container_info_rightTop_text">暂无信息</span>
        </div>
      </div>
    </div>
  );
}
