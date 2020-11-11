import React, { useState,useEffect, useContext } from "react";
import axios from "axios"
import { Table} from "antd";

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
// !!!!! 2 PAGES (Home and Inspection)  AT LEAST USE ITS DATA !!!!!

const [datas, setDatas] = useState(0);
let numberOfWorkers_Url =
"https://thingproxy.freeboard.io/fetch/" +
"https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%B7%A5%E4%BA%BA%E6%95%B0%E9%87%8F.json"

useEffect(()=> {
  axios.get(numberOfWorkers_Url)
  .then(response => {
   if (response.data) {
     setDatas(response.data);  
   }
  })
  .catch((err) => console.log("error:",err))
},[0])


  //accessControl
  let accessControl_Url =
  "https://thingproxy.freeboard.io/fetch/" +
  "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E7%BE%BF%E4%BA%91%E9%97%A8%E7%A6%81%E4%BF%A1%E6%81%AF.json"
  const [accessControl, setAccessControl] = useState("")
  useEffect(()=> {
    axios.get(accessControl_Url)
    .then(response => {
     if (response.data) {
      setAccessControl(response.data);  
     }
    })
    .catch((err) => console.log("error:",err))
  },[0])

  let arrayOfName =  Object.keys(accessControl)
  let arrayOfValue = Object.values(accessControl)

  return (
    <div className="container_info_leftTop_pannel">
      <div className="container_info_leftTop_pannel_one">
        <div className="container_info_leftTop_pannel_one_top">
          <img style={{ height: "32px", width: "32px", marginRight: "16px" }} src={iconWorker} alt="" />
          <span style={{textAlign: "start", fontSize: 16}}>工人数量</span>
          <span style={{ color: "#82cdbf", fontSize: "24px", flexGrow: 1,  }}>
           {datas && datas.工人数}
            </span>
        </div>
        <div className="container_info_leftTop_pannel_one_chart">
          <PieChart datas={datas} />
        </div>
        <div className="container_info_leftTop_pannel_one_ratio">
          <span>
            男性:  { datas && datas.性别.男} %
          </span>
          <span>
            女性: { datas && datas.性别.女} %
  
          </span>
        </div>
      </div>


      
      <div className="container_info_leftTop_pannel_two">
        <div className="container_info_leftTop_pannel_two_top">
          <span>{chinaDate}</span>
        </div>
        <div className="container_info_leftTop_pannel_two_chart">
        
      
        <Table
        color="red"
          size="small"
          onRow={null}
          bordered={false}
          style={{ backgroundColor: "white", color: "blue" }}
          pagination={false}
         
         
          dataSource={[

             { number: accessControl && arrayOfValue[0], name: arrayOfName[0] },
             { number:  accessControl && arrayOfValue[1], name: arrayOfName[1] },
             { number: accessControl && arrayOfValue[2], name: arrayOfName[2] },
             { number: accessControl && arrayOfValue[3], name: arrayOfName[3]},
            
          ]}
        >
          <Table.Column  title="" dataIndex="name" align="center" />
         
          <Table.Column title="" dataIndex="number" align="center" />
        </Table>
     

        
        </div>
      </div>
    </div>
  );
}
