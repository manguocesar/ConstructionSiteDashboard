import React from 'react'

import lockr from "lockr";
import { navigate } from "@reach/router";
import GridView from "../../components/GridView";
import search from "./localisation.png"

export default function HQOpenSite({title, address, pplNbr, inspectionTimes, guardNbr, abnormalPpl, tenants, active}) {
  

const handleClick = () => {


  const { credentials, sites, projectName, id } = tenants[active];

  //  when button clicked, we want the HQ user to have access to the right site through Lockr

   lockr.set("current_tenant", 
   { credentials, sites, projectName, id }  );

        let data =  lockr.get("current_tenant")
        console.log("data",data)
        lockr.set("HQ_level", true);
        navigate("/")

}


    return (
        <GridView.Body
        className="container_top_left_column_1_row_1"
        title=""
       style={{border:"1px solid #82cdbf", padding:"5px", margin:"0 0px 10px 0px"}}>
       <div style={{display:"flex", flexDirection:"column",width:"100%",   marginLeft:"10px"}}>
       <div  style={{display:"flex", flexDirection:"row",  justifyContent:"space-between"}}>
         <p style={{flexGrow:1}}>{title}</p>

         <button onClick={()=>{handleClick()}} style={{backgroundColor:"transparent", fontWeight:"bolder", color:"#82cdbf", border: "#82cdbf 1px solid", width:"20vh", borderRadius:"8px"}}>
           
           点击进入
         </button>
       </div>

       <div style={{display:"flex",justifyContent:"flex-start", alignItems:"center", flexDirection:"row"}}>
         <img alt="" src={search} style={{height:"3vh", margin:"5px 5px 5px 0"}}/>
         <p style={{margin:"5px 0px 5px 5px" }}>{address}</p>
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
             <span style={{fontWeight:"bolder", color:"#82cdbf"}}>{pplNbr}</span>
           </div>
           <div style={{ flex: 1, fontSize: 13,display:"flex", justifyContent:"space-evenly"  }}> <span>今日巡检次数</span>
           <span style={{fontWeight:"bolder", color:"#82cdbf"}}>{inspectionTimes}</span></div>
           </div>

           <div className="hqInformation">
             <div style={{ flex: 1, fontSize: 13,display:"flex", justifyContent:"space-evenly"  }}>
               <span>门禁人脸数量</span>
           <span style={{fontWeight:"bolder", color:"#82cdbf"}}>{guardNbr}</span></div>
          

           <div style={{ flex: 1, fontSize: 13,display:"flex", justifyContent:"space-evenly"  }}>
             <span>今日巡检异常人员</span>
           <span style={{fontWeight:"bolder", color:"#82cdbf"}}>{abnormalPpl}</span></div>
           </div>
           {/* TODO date filter */}
         </div>


       </div>
     </GridView.Body>
    )
}
