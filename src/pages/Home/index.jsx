import React from "react";

//style
import "./index.css";

//components
import GridView from "../../components/GridView";
import ListofSites from "./components/ListOfSites";
import SiteLocation from "./components/SiteLocation";
import ComponentTopLeft from "./components/ComponentTopLeft";
import ComponentTopRight from "./components/ComponentTopRight";

{/* <div className="container_info_display_home">
<div className="container_info_left">
  
  <ListofSites />
</div>
<div className="container_info_right">
  
  <SiteLocation />
</div>
</div> */}
export default function Home() {
  return (
    <GridView>
      <GridView.Cell
        noBodyStyle={true}
        title="xxx - Title"
        left="0"
        top="0"
        width="calc(66% - 4px)"
        height="calc(50% - 4px)"
      >
        <ComponentTopLeft />
      </GridView.Cell>

      <GridView.Cell
        noBodyStyle={true}
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>总体指标</div>
          </div>
        }
        right="0"
        top="0"
        width="calc(34% - 4px)"
        height="calc(50% - 4px)"
      >
        <ComponentTopRight />
      </GridView.Cell>

      <GridView.Cell
        noBodyStyle={true}
        left="0"
        bottom="0"
        width="calc(66% - 4px)"
        height="calc(50% - 4px)"
      >
        <ListofSites/>
      </GridView.Cell>


      <GridView.Cell
        noBodyStyle={true}
        title="xxx"
        right="0"
        bottom="0"
        width="calc(34% - 4px)"
        height="calc(50% - 4px)"
      >
        <SiteLocation />
      </GridView.Cell>
    </GridView>
  );
}
