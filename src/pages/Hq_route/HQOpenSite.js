import React from 'react'
import {  Button} from "antd";
import GridView from "../../components/GridView";
import search from "./localisation.png"

export default function HQOpenSite({HQTenants,index, pplNbr, inspectionTimes, guardNbr, abnormalPpl, goToSite}) {

  let title = HQTenants[index].name
  let address =  HQTenants[index].address
  let short_name =  HQTenants[index].short_name


    return (
        <GridView.Body
        className="container_top_left_column_1_row_1"
        title=""
       style={{border:"1px solid #82cdbf", padding:"10px 15px 5px 5px", margin:"0 0px 10px 0px"}}>
       <div style={{display:"flex", flexDirection:"column",width:"100%",   marginLeft:"10px"}}>
       <div  style={{display:"flex", flexDirection:"row",  justifyContent:"space-between"}}>
         <p className="HQOpenSiteText">{title}</p>

         <Button onClick={() => {goToSite()}}
          className="sites_button"
          type="primary"
          ghost={true} >        
           点击进入
         </Button>
       </div>

       <div style={{display:"flex",justifyContent:"flex-start", alignItems:"center", flexDirection:"row"}}>
         <img alt="" src={search} style={{height:"3vh", margin:"5px 5px 5px 0"}}/>
         <p className="HQOpenSiteText" style={{color:"gray", fontSize:"14px",}}>{address ? address : short_name}</p>
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
             <div style={{ flex: 1, display:"flex", justifyContent:"space-between", marginRight:"30px" }}>
             <span className="HQOpenSiteText">安标网注册用工人数</span>
             <span className="greenFigures">{pplNbr}</span>
           </div>
           <div style={{ flex: 1, display:"flex", justifyContent:"space-between", margin:"0 30px 0 30px"   }}> 
           <span className="HQOpenSiteText">今日巡检次数</span>
           <span className="greenFigures">{inspectionTimes}</span></div>
           </div>

           <div className="hqInformation">
             <div style={{ flex: 1, display:"flex", justifyContent:"space-between", marginRight:"30px"   }}>
               <span className="HQOpenSiteText">门禁人脸数量</span>
           <span className="greenFigures">{guardNbr}</span></div>
          

           <div style={{ flex: 1, display:"flex", justifyContent:"space-between", margin:"0 30px 0 30px"   }}>
             <span className="HQOpenSiteText">今日巡检异常人员</span>
           <span className="greenFigures">{abnormalPpl}</span></div>
           </div>
         </div>


       </div>
     </GridView.Body>
    )
}
