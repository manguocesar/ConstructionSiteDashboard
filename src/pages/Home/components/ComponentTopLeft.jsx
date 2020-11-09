import React, { useState,useEffect, useContext } from "react";
import axios from "axios"

//context
import { TimeContext } from "../../../contexts/TimeContext";

//style
import "./ComponentTopLeft.css";

//components
import PieChart from "./PieChart";

//img
import iconWorker from "./img/iconWorker.png";

export default function ComponentTopLeft() {
  const { chinaDate } = useContext(TimeContext);

//numberOfWorkers

let numberOfWorkers_Url ="https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%B7%A5%E4%BA%BA%E6%95%B0%E9%87%8F.json"
const [numberOfWorkers, setNumberOfWorkers] = useState()
useEffect(()=> {
  axios.get(numberOfWorkers_Url)
  .then(response => {
    setNumberOfWorkers(response.data)
  })
  .catch(console.log("Wrong URL"))
}, [numberOfWorkers_Url])

console.log("bla",numberOfWorkers)

let workType = [0.3, 0.06, 0.15, 0.1, 0.2];
// let workType = [numberOfWorkers.工种.建筑装饰工程普工,
//    numberOfWorkers.工种.木工,
//     numberOfWorkers.工种.建筑起重机械司机,
//      numberOfWorkers.工种.混凝土工,
//       numberOfWorkers.工种.建筑焊工,
//       numberOfWorkers.工种.钢筋工,
//       numberOfWorkers.工种.砌筑工,
//     ];


  return (
    <div className="container_info_leftTop_pannel">
      <div className="container_info_leftTop_pannel_one">
        <div className="container_info_leftTop_pannel_one_top">
          <img style={{ height: "32px", width: "32px", marginRight: "16px" }} src={iconWorker} alt="" />
          <span style={{textAlign: "start", fontSize: 16}}>工人数量</span>
          <span style={{ color: "#82cdbf", fontSize: "24px", flexGrow: 1,  }}>
            345
            {/* numberOfWorkers.工人数 */}
            </span>
        </div>
        <div className="container_info_leftTop_pannel_one_chart">
          <PieChart data={workType} />
        </div>
        <div className="container_info_leftTop_pannel_one_ratio">
          <span>
            男性: 85%
  {/* numberOfWorkers.性别.男 */}
          </span>
          <span>
            女性: 15%
  {/* numberOfWorkers.性别.女 */}
          </span>
        </div>
      </div>
      <div className="container_info_leftTop_pannel_two">
        <div className="container_info_leftTop_pannel_two_top">
          <span>{chinaDate}</span>
        </div>
        <div className="container_info_leftTop_pannel_two_chart">
          {/* add table */}
        </div>
      </div>
    </div>
  );
}
