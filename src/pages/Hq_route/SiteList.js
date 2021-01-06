import React from 'react'
import GridView from "../../components/GridView";
import HQOpenSite from "./HQOpenSite"
export default function SiteList({item, activeIndex, index, HQTenants, openSiteDetails, goToSite}) {


    return (
        <div>

 { index === activeIndex ? 
 <HQOpenSite goToSite={goToSite} index={index}  HQTenants={HQTenants}
 
            pplNbr="200" inspectionTimes="3" guardNbr="359" abnormalPpl="12" />  :  
         <div  onClick={()=>openSiteDetails(index)}>
           <GridView.Body
              className="container_top_left_column_1_row_1"
              title={HQTenants && HQTenants[index].name}
              style={{padding:"2px 5px 2px 5px"}}>
            </GridView.Body>  
            </div>
          } 
            
        </div>
    )
}
