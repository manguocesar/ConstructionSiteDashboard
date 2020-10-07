import React, { useState, useContext } from "react";

//context
import { TimeContext } from "../contexts/TimeContext";

//style
import "./ComponentTopLeft.css";

//components
import PieChart from "./PieChart";
import BarChart from "./BarChart";

//img
import iconWorker from "./img/iconWorker.png";

export default function ComponentTopLeft() {
  const { chinaDate } = useContext(TimeContext);
  const [gaugeData, setGaugeData] = useState([0.3, 0.06, 0.15, 0.1, 0.2]);

  return (
    <div className="container_info_leftTop">
      <div className="container_info_leftTop_title">复旦大学项目</div>
      <div className="container_info_leftTop_pannel">
        <div className="container_info_leftTop_pannel_one">
          <div className="container_info_leftTop_pannel_one_top">
            <img style={{ height: "2vw" }} src={iconWorker} alt="" />
            <span>工人数量</span>
            <span style={{ color: "#82cdbf" }}>345</span>
          </div>
          <div className="container_info_leftTop_pannel_one_chart">
            <PieChart data={gaugeData} />
          </div>
          <div className="container_info_leftTop_pannel_one_ratio">
            <span>男性: 85%</span>
            <span>女性: 15%</span>
          </div>
        </div>
        <div className="container_info_leftTop_pannel_two">
          <div className="container_info_leftTop_pannel_two_top">
            <span>{chinaDate}</span>
          </div>
          <div className="container_info_leftTop_pannel_two_chart">
            <BarChart />
          </div>
          <div className="container_info_leftTop_pannel_two_ratio">
            <span>进入人数</span>
            <span>离开人数</span>
            <span>工地人数</span>
          </div>
        </div>
      </div>
    </div>
  );
}
