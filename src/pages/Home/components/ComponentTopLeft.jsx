import React, { useContext } from "react";
import { Table } from "antd";

//context
import { TimeContext } from "../../../contexts/TimeContext";

//style
import "./ComponentTopLeft.css";

//components
import PieChart from "./PieChart";

//img
import iconWorker from "./img/iconWorker.png";

export default function ComponentTopLeft(props) {
  const { chinaDate } = useContext(TimeContext);

  const { numberOfWorkersData, accessControlData } = props;

  const accessControlDataSource = Object.entries(accessControlData).map(([key, value]) => {
    return {
      number: value,
      name: key
    }
  })

  return (
    <div className="container_info_leftTop_pannel">
      <div className="container_info_leftTop_pannel_one">
        <div className="container_info_leftTop_pannel_one_top">
          <img
            style={{ height: "32px", width: "32px", marginRight: "16px" }}
            src={iconWorker}
            alt=""
          />
          <span style={{ textAlign: "start", fontSize: 16 }}>工人数量</span>
          <span style={{ color: "#82cdbf", fontSize: "24px", flexGrow: 1 }}>
            {numberOfWorkersData.工人数}
          </span>
        </div>
        <div className="container_info_leftTop_pannel_one_chart">
          <PieChart datas={numberOfWorkersData} />
        </div>
        <div className="container_info_leftTop_pannel_one_ratio">
          <span>男性: {numberOfWorkersData.性别.男} %</span>
          <span>女性: {numberOfWorkersData.性别.女} %</span>
        </div>
      </div>

      <div className="container_info_leftTop_pannel_two">
        <div className="container_info_leftTop_pannel_two_top">
          <span>{chinaDate}</span>
        </div>
        <Table
          size="small"
          pagination={false}
          dataSource={accessControlDataSource}
        >
          <Table.Column title="" dataIndex="name" />
          <Table.Column title="" dataIndex="number" align="center" />
        </Table>
      </div>
    </div>
  );
}
