import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { Table, message, Button, Modal, Form, Input, Upload } from "antd";
import { ListSitesContext } from "../../contexts/ListSitesContext";
import lockr from "lockr";
import { useLocation  } from "@reach/router";
import HQOpenSite from "./HQOpenSite"
//style
import search from "./localisation.png"
import "./index.css";


//context
import { TimeContext } from "../../contexts/TimeContext";

//components
import GridView from "../../components/GridView";
import SiteLocation from "./components/SiteLocation";


export default function HQRoutes() {

  const { chinaDate } = useContext(TimeContext);


  const [active, setActive] = useState(0)
 

  // const route = useLocation()

 let tenants =  lockr.get("all_tenant").tenants 
 


const [latLong, setLatLong] = useState(tenants[active].sites[0] )


// console.log("latLong",latLong)
console.log("tenantss",tenants)

const handleClick = number => 
{setActive(number);
  setLatLong(tenants[active].sites[0])}

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
            justifyContent:"space-between",alignItems:"center", border:"grey 2px solid", borderRadius:"12px", padding: "4px", margin: "5px 10px 5px 0" }}>
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
         
         {active === 0 ? <HQOpenSite  active={active} tenants={tenants} title="复旦大学邯郸校区中华经济文化研究中心项目" address="上海市杨浦区国权路525号"  pplNbr="200" inspectionTimes="3" guardNbr="359" abnormalPpl="12" />  : 
         <div  onClick={()=>handleClick(0)}>
           <GridView.Body
              className="container_top_left_column_1_row_1"
              title="复旦大学邯郸校区中华经济文化研究中心项目"
              style={{padding:"2px 5px 2px 5px"}}>
            </GridView.Body> </div>
         }
          
          {active === 1 ? <HQOpenSite active={active} tenants={tenants} title="三林镇项目" address=" 上海市浦东新区上南路/东明路交叉口" pplNbr="110" inspectionTimes="2" guardNbr="352" abnormalPpl="10"/> :
            <div  onClick={()=>handleClick(1)}>
              <GridView.Body
              className="container_top_left_column_1_row_1"
              title="三林镇项目"
              style={{padding:"2px 5px 2px 5px"}}
            /></div>
          }
           {active === 2 ? <HQOpenSite active={active} tenants={tenants} title="临港新片区105社区金融西九项目" address="上海市浦东新区环湖北二路/香柏路交叉口" pplNbr="50" inspectionTimes="2" guardNbr="219" abnormalPpl="9"/> :
            <div  onClick={()=>handleClick(2)}>
              <GridView.Body
              className="container_top_left_column_1_row_1"
              title="临港新片区105社区金融西九项目"
              style={{padding:"2px 5px 2px 5px"}}
            > </GridView.Body></div>}

            {active === 3 ? <HQOpenSite active={active} tenants={tenants} title="香港名都住宅楼项目" address="上海市浦东新区科苑路501号" pplNbr="180" inspectionTimes="4" guardNbr="129" abnormalPpl="19"/> :
            <div  onClick={()=>handleClick(3)}><GridView.Body
              className="container_top_left_column_1_row_1"
              title="香港名都住宅楼项目"
              style={{padding:"2px 5px 2px 5px"}}
            >   </GridView.Body></div>}

            {active === 4 ? <HQOpenSite active={active} tenants={tenants} title="华域汽车技术研发中心建筑工程项目" address="上海市徐汇区苍梧路8号" pplNbr="220" inspectionTimes="5" guardNbr="159" abnormalPpl="5"/> :
             <div  onClick={()=>handleClick(4)}> 
             <GridView.Body
              className="container_top_left_column_1_row_1"
              title="华域汽车技术研发中心建筑工程项目"
              style={{padding:"2px 5px 2px 5px"}} />
             </div>}

            {active === 5 ? <HQOpenSite active={active} tenants={tenants} title="徐汇乔高综合体开发项目" address="上海市浦东新区环湖北二路/香柏路交叉口" pplNbr="100" inspectionTimes="1" guardNbr="259" abnormalPpl="2"/> :
              <div  onClick={()=>handleClick(5)}>  
                <GridView.Body
                className="container_top_left_column_1_row_1"
                title="徐汇乔高综合体开发项目"
                style={{padding:"2px 5px 2px 5px"}}/>
            </div>}
           
          </div>
        </div>
     
      
    </GridView.Cell>

    <GridView.Cell
      noBodyStyle={true}
      title={chinaDate}
     
      right="0"
      top="0"
      width="calc(35% - 8px)"
      height="calc(55% - 8px)">
     
     <GridView.Body style={{margin:"6px", padding:"2px", borderRadius:"12px"}}   className="container_top_left_column_1_row_1">
                  <div className="HQ_Info_Display">
                    <span>工地数量</span>
                    <span>{tenants.length}</span>
                    </div>

            </GridView.Body> 
            <GridView.Body style={{margin:"6px", padding:"2px", borderRadius:"12px"}} className="container_top_left_column_1_row_1" >
            <div className="HQ_Info_Display"><span>合格劳务工人总数</span>
                    <span>150</span></div>
            </GridView.Body> 
            <GridView.Body style={{margin:"6px", padding:"2px", borderRadius:"12px"}} className="container_top_left_column_1_row_1"  >
            <div className="HQ_Info_Display"><span>巡检异常人员总数</span>
                    <span>20</span></div>
            </GridView.Body>
            <GridView.Body style={{margin:"6px", padding:"2px", borderRadius:"12px"}} className="container_top_left_column_1_row_1" >
            <div className="HQ_Info_Display" style={{flexDirection:"column", textAlign:"center"}} >
              <p style={{margin:"0 0 5px", padding:"2px"}}>劳务信息下载</p>
              <p className="HQ_Info_Display" style={{display:"flex", flexDirection:"row"}}><span>工程公司台账汇总</span>
              <button
              onClick={() => { console.log("dowload file: Engineering account company summary")}}
              style={{backgroundColor:"transparent", fontWeight:"bolder", color:"#82cdbf", border: "#82cdbf 1px solid", width:"15vh", borderRadius:"8px"}}>下载</button></p> </div>
            </GridView.Body>

    </GridView.Cell>
  

    <GridView.Cell
      noBodyStyle={true}
      title="工地位置"
      right="0"
      bottom="0"
      width="calc(35% - 8px)"
      height="calc(45% - 8px)"
    ><p>  {latLong.latitude}</p>
    {/* cannot pass down the info */}
     <SiteLocation latLong={latLong}  />
     
     <p>  {latLong.longitude}</p>
    </GridView.Cell>

    
  </GridView>
  );
}
