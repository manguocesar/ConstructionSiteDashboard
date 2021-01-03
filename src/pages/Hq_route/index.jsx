import React, { useState, useContext, useEffect } from "react";
import { Input } from "antd";
import lockr from "lockr";
import { navigate  } from "@reach/router";
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
  const [activeIndex, setActiveIndex] = useState(0)
  const [latLong, setLatLong] = useState()
  const [HQTenants, setHQTenants] = useState()


    useEffect(() => {
      let tenants = lockr.get("all_tenant").tenants 
      setHQTenants(tenants)
      setLatLong(tenants[activeIndex].sites[0]) 
    }, [])

   

const handleClick = number => 
{setActiveIndex(number);
  setLatLong(HQTenants[activeIndex].sites[0])
}

  const goToSite = () => {
    const { credentials, sites, projectName, id } = HQTenants[activeIndex];
  
    //  when button clicked, we want the HQ user to have access to the right site through Lockr
  
     lockr.set("current_tenant", 
     { credentials, sites, projectName, id }  );
     
    lockr.set("HQ_level", true);
    const info = lockr.get("HQ_level")

          navigate("/")
  }

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
            <Input placeholder="请输入工地名称/编号。。。" 
            style={{backgroundColor:"transparent", color:"grey", border: "transparent 1px solid", flexGrow:1, fontSize:"15px"}}
            />
            <img alt="" height="20px" src={search}/>
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
         
         {activeIndex === 0 ? <HQOpenSite goToSite={goToSite}   title={HQTenants && HQTenants[activeIndex].projectName}
          address={HQTenants && HQTenants[activeIndex].sites[0].location}  pplNbr="200" inspectionTimes="3" guardNbr="359" abnormalPpl="12" />  : 
         <div  onClick={()=>handleClick(0)}>
           <GridView.Body
              className="container_top_left_column_1_row_1"
              title={HQTenants && HQTenants[0].projectName}
              style={{padding:"2px 5px 2px 5px"}}>
            </GridView.Body> </div>
         }
          
          {activeIndex === 1 ? <HQOpenSite goToSite={goToSite}  title={HQTenants && HQTenants[activeIndex].projectName}
           address={HQTenants[activeIndex].sites[0].location} pplNbr="110" inspectionTimes="2" guardNbr="352" abnormalPpl="10"/> :
            <div  onClick={()=>handleClick(1)}>
              <GridView.Body
              className="container_top_left_column_1_row_1"
              title={HQTenants && HQTenants[1].projectName}
              style={{padding:"2px 5px 2px 5px"}}
            /></div>
          }
           {activeIndex === 2 ? <HQOpenSite goToSite={goToSite}  title={HQTenants && HQTenants[activeIndex].projectName} address={HQTenants[activeIndex].sites[0].location} pplNbr="50" inspectionTimes="2" guardNbr="219" abnormalPpl="9"/> :
            <div  onClick={()=>handleClick(2)}>
              <GridView.Body
              className="container_top_left_column_1_row_1"
              title={HQTenants && HQTenants[2].projectName}
              style={{padding:"2px 5px 2px 5px"}}
            > </GridView.Body></div>}

            {activeIndex === 3 ? <HQOpenSite goToSite={goToSite}  title={HQTenants && HQTenants[activeIndex].projectName} address={HQTenants[activeIndex].sites[0].location} pplNbr="180" inspectionTimes="4" guardNbr="129" abnormalPpl="19"/> :
            <div  onClick={()=>handleClick(3)}><GridView.Body
              className="container_top_left_column_1_row_1"
              title={HQTenants && HQTenants[3].projectName}
              style={{padding:"2px 5px 2px 5px"}}
            >   </GridView.Body></div>}

            {activeIndex === 4 ? <HQOpenSite goToSite={goToSite}  title={HQTenants && HQTenants[activeIndex].projectName} address={HQTenants[activeIndex].sites[0].location} pplNbr="220" inspectionTimes="5" guardNbr="159" abnormalPpl="5"/> :
             <div  onClick={()=>handleClick(4)}> 
             <GridView.Body
              className="container_top_left_column_1_row_1"
              title={HQTenants && HQTenants[4].projectName}
              style={{padding:"2px 5px 2px 5px"}} />
             </div>}

            {activeIndex === 5 ? <HQOpenSite goToSite={goToSite}  title={HQTenants && HQTenants[activeIndex].projectName} address={HQTenants[activeIndex].sites[0].location} pplNbr="100" inspectionTimes="1" guardNbr="259" abnormalPpl="2"/> :
              <div  onClick={()=>handleClick(5)}>  
                <GridView.Body
                className="container_top_left_column_1_row_1"
                title={HQTenants && HQTenants[5].projectName}
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
                    <span>{HQTenants && HQTenants.length}</span>
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
              onClick={() => { alert("dowload file: Engineering account company summary")}}
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
    ><p>  {latLong && latLong.latitude}</p>
    {/* cannot pass down the info */}
     <SiteLocation key={activeIndex} latLong={latLong}  />
     
     <p>  {latLong && latLong.longitude}</p>
    </GridView.Cell>

    
  </GridView>
  );
}
