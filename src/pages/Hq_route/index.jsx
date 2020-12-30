import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { Table, message, Button, Modal, Form, Input, Upload } from "antd";
import { ListSitesContext } from "../../contexts/ListSitesContext";
import lockr from "lockr";
import moment from "moment";
import { useLocation  } from "@reach/router";

//style
import search from "./localisation.png"
import "./index.css";


//components
import GridView from "../../components/GridView";
import SiteLocation from "./components/SiteLocation";


export default function HQRoutes() {

  const route = useLocation()

console.log(route )


  return (
    <GridView>
    <GridView.Cell
      noBodyStyle={true}
      title={
        <div
          style={{
            display: "flex",
            flexDirection:"column",
            flexGrow: 1,
          }}
        >
          <div style={{ flex: 1 }}>
            {/* {currentProjectName} */}
            上海建工二建集团第六工程公司
            </div>
          <div style={{ display:"flex", flexDirection:"row",
            justifyContent:"space-between",alignItems:"center", border:"grey 2px solid", borderRadius:"12px", padding: "8px", margin: "5px" }}>
            {/* {currentProjectName} */}
            <input placeholder="请输入工地名称/编号。。。" style={{backgroundColor:"transparent", color:"grey", border: "transparent 1px solid", flexGrow:1, fontSize:"15px"}}/>
            <img alt="" height="25vh" src={search}/>
            </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            {/* {selectedSite?.location} */}
          </div>
        </div>
      }
      left="0"
      top="0"
      width="calc(65% - 8px)"
      height="calc(100% - 0px)"
    >
    
        <div className="container_top_left">
          <div className="container_top_left_column_1">
            <GridView.Body
               className="container_top_left_column_1_row_1"
              // title="复旦大学邯郸校区中华经济文化研究中心项目"
              style={{border:"1px solid #82cdbf", padding:"5px", margin:"0 0px 10px 0px"}}
            >
              <div style={{display:"flex", flexDirection:"column",width:"100%",   marginLeft:"10px"}}>
              <div  style={{display:"flex", flexDirection:"row",  justifyContent:"space-between"}}>
                <p style={{flexGrow:1}}>复旦大学邯郸校区中华经济文化研究中心项目</p>
                <button style={{backgroundColor:"transparent", fontWeight:"bolder", color:"#82cdbf", border: "#82cdbf 1px solid", width:"20vh", borderRadius:"8px"}}>点击进入</button>
              </div>

              <div style={{display:"flex",justifyContent:"flex-start", alignItems:"center", flexDirection:"row"}}>
                <img alt="" src={search} style={{height:"3vh", margin:"5px 5px 5px 0"}}/>
                <p style={{margin:"5px 0px 5px 5px" }}>上海市杨浦区国权路525号</p>
              </div>
       

              <div
                  style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    padding: 0,
                    margin:0
                  }}
                >
                  <div className="hqInformation">
                    <div style={{ flex: 1, fontSize: 13,display:"flex", justifyContent:"space-evenly" }}>
                    <span>安标网注册用工人数</span>
                    <span style={{fontWeight:"bolder", color:"#82cdbf"}}>200</span>
                  </div>
                  <div style={{ flex: 1, fontSize: 13,display:"flex", justifyContent:"space-evenly"  }}> <span>今日巡检次数</span>
                  <span style={{fontWeight:"bolder", color:"#82cdbf"}}>3</span></div>
                  </div>

                  <div className="hqInformation">
                    <div style={{ flex: 1, fontSize: 13,display:"flex", justifyContent:"space-evenly"  }}>
                      <span>门禁人脸数量</span>
                  <span style={{fontWeight:"bolder", color:"#82cdbf"}}>359</span></div>
                 

                  <div style={{ flex: 1, fontSize: 13,display:"flex", justifyContent:"space-evenly"  }}>
                    <span>今日巡检异常人员</span>
                  <span style={{fontWeight:"bolder", color:"#82cdbf"}}>12</span></div>
                  </div>
                  {/* TODO date filter */}
                </div>


              </div>
            </GridView.Body>
            <GridView.Body
              className="container_top_left_column_1_row_1"
              title="香港名都住宅楼项目"
            >
            </GridView.Body>
            <GridView.Body
              className="container_top_left_column_1_row_1"
              title="三林镇项目"
            >
            </GridView.Body>
            <GridView.Body
              className="container_top_left_column_1_row_1"
              title="华域汽车技术研发中心建筑工程项目"
            >
            </GridView.Body>
            <GridView.Body
              className="container_top_left_column_1_row_1"
              title="徐汇乔高综合体开发项目"
            >
            </GridView.Body>
            <GridView.Body
              className="container_top_left_column_1_row_1"
              title="临港新片区105社区金融西九项目"
            >
            </GridView.Body>
           
          </div>
        </div>
     
      
    </GridView.Cell>

    <GridView.Cell
      noBodyStyle={true}
      title={moment().format(" YYYY年MM月DD日 h:m:s")}
    
      right="0"
      top="0"
      width="calc(35% - 8px)"
      height="calc(55% - 8px)">
     
     <GridView.Body style={{margin:"6px", padding:"2px"}}   className="container_top_left_column_1_row_1">
                  <div className="HQ_Info_Display">
                    <span>工地数量</span>
                    <span>2</span>
                    </div>

            </GridView.Body> 
            <GridView.Body style={{margin:"6px", padding:"2px"}} className="container_top_left_column_1_row_1" >
            <div className="HQ_Info_Display"><span>合格劳务工人总数</span>
                    <span>150</span></div>
            </GridView.Body> 
            <GridView.Body style={{margin:"6px", padding:"2px"}} className="container_top_left_column_1_row_1"  >
            <div className="HQ_Info_Display"><span>巡检异常人员总数</span>
                    <span>20</span></div>
            </GridView.Body>
            <GridView.Body style={{margin:"6px", padding:"2px"}} className="container_top_left_column_1_row_1" >
            <div className="HQ_Info_Display" style={{flexDirection:"column", textAlign:"center"}} >
              <p style={{margin:"0 0 5px", padding:"2px"}}>劳务信息下载</p>
              <p className="HQ_Info_Display" style={{display:"flex", flexDirection:"row"}}><span>工程公司台账汇总</span>
              <button style={{backgroundColor:"transparent", fontWeight:"bolder", color:"#82cdbf", border: "#82cdbf 1px solid", width:"15vh", borderRadius:"8px"}}>下载</button></p> </div>
            </GridView.Body>

    </GridView.Cell>
  

    <GridView.Cell
      noBodyStyle={true}
      title="工地位置"
      right="0"
      bottom="0"
      width="calc(35% - 8px)"
      height="calc(45% - 8px)"
    >
     <SiteLocation />
    </GridView.Cell>

    
  </GridView>
  );
}
