import React, { useState, useContext, useEffect } from "react";
import { Input,message } from "antd";
import lockr from "lockr";
import { navigate  } from "@reach/router";

import axios from "axios";
//style + img
import search from "./localisation.png"
import "./index.css";

import SiteList from './SiteList'

//context
import { TimeContext } from "../../contexts/TimeContext";

//components
import GridView from "../../components/GridView";
import SiteLocation from "./components/SiteLocation";


export default function HQRoutes() {

  const { chinaDate } = useContext(TimeContext);
  const [activeIndex, setActiveIndex] = useState(0)
  const [latLong, setLatLong] = useState()
  const [HQTenants, setHQTenants] = useState()
  const [modal, setModale] = useState(false)


  useEffect(() => {
    async function getData() {
      try {
        const HQData = `https://api.consim.cn/sites.json`;

        const [{ data }] = await Promise.all([  axios.get(HQData)  ]);
        let tenants = lockr.get("all_tenant",{data});
        let filteredTenant = data.filter(item => item.enabled === true )
        setHQTenants(filteredTenant)
        setLatLong(tenants[activeIndex]) 

      } catch (error) {
        message.error("加载失败");
      }
    }
    getData();
  }, []);


  
const openSiteDetails = (number) => 
    {setActiveIndex(number);
      {setLatLong(HQTenants[activeIndex].coordinates)}}

  const goToSite = () => {
    const { name, address, id } = HQTenants[activeIndex];
    console.log(HQTenants[activeIndex] )
    lockr.set("current_tenant", {name, address, id });
    lockr.set("HQ_level", true);
    navigate("/")
  }

  const goToHQDashboard = ()=> {
    lockr.set("HQ_level", true);
    navigate("/Hq_dashboard")
  }

  return (
    <GridView>
    <GridView.Cell
      noBodyStyle={true}
      title= {
        <div style={{ display: "flex", flexDirection:"column", flexGrow: 1 }}>
          <h2 style={{ flex: 1, color: "white" }}>
            {/* {currentProjectName} */}
            上海建工二建集团第六工程公司
            </h2>
          <div style={{ display:"flex", flexDirection:"row",
            justifyContent:"space-between",alignItems:"center", border:"grey 2px solid", borderRadius:"12px", padding: "4px", margin: "5px 10px 5px 0" }}>
            {/* {currentProjectName} */}
            <Input placeholder="请输入工地名称/编号。。。" 
            className="inputSite"
           />
            <img alt="" height="20px" src={search}/>
            </div>
          
        </div>
      }
       left="0"  top="0" width="calc(65% - 8px)" height="calc(100% - 0px)"  >
    
        <div className="container_top_left">
          <div className="container_top_left_column_1">

            
          {HQTenants && HQTenants.map((item, index) => (
            <SiteList activeIndex={activeIndex} HQTenants={HQTenants} goToSite={goToSite}
             item={item} openSiteDetails={openSiteDetails} index={index} />
          ))}
          </div>
        </div>
    </GridView.Cell>


    <GridView.Cell
      noBodyStyle={true}
      title=""
      right="0"
      top="0"
      width="calc(35% - 8px)"
      height="calc(55% - 8px)">
     <h2 style={{color:"white", textAlign:"center", margin:0, padding:0}}>{chinaDate}</h2>
     <GridView.Body style={{margin:"5px 20px 5px 20px", padding:"2px", borderRadius:"12px"}}   className="container_top_left_column_1_row_1">
                  <div className="HQ_Info_Display">
                    <span className="figuresLegend">工地数量</span>
                    <span className="greenFigures">{HQTenants && HQTenants.length}</span>
                    </div>

            </GridView.Body> 
            <GridView.Body style={{margin:"5px 20px 5px 20px", padding:"2px", borderRadius:"12px"}}  className="container_top_left_column_1_row_1" >
            <div className="HQ_Info_Display">
              <span className="figuresLegend">合格劳务工人总数</span>
                    <span className="greenFigures">150</span></div>
            </GridView.Body> 
            <GridView.Body style={{margin:"5px 20px 5px 20px", padding:"2px", borderRadius:"12px"}}  className="container_top_left_column_1_row_1"  >
            <div className="HQ_Info_Display">
              <span className="figuresLegend">巡检异常人员总数</span>
                    <span className="redFigures">20</span></div>
            </GridView.Body>
            <GridView.Body style={{margin:"5px 20px 15px 20px", padding:"2px", borderRadius:"12px"}}  className="container_top_left_column_1_row_1" >
            <div className="HQ_Info_Display" style={{flexDirection:"column", textAlign:"center"}} >
              <p className="figuresLegend">劳务信息下载</p>
              <p className="HQ_Info_Display" style={{display:"flex", flexDirection:"row"}}>
                <span className="figuresLegend">工程公司台账汇总</span>
              <button
              onClick={() => { 
                // goToHQDashboard() 
                alert("dowload file: Engineering account company summary")
              }}
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
    >
     <SiteLocation key={activeIndex} latLong={latLong}  />
    </GridView.Cell>

    
  </GridView>
  );
}
