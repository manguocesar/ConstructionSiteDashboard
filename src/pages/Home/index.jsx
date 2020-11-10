import React from "react";

//style
import "./index.css";

//components
import GridView from "../../components/GridView";
import ListofSites from "./components/ListOfSites";
import SiteLocation from "./components/SiteLocation";
import ComponentTopLeft from "./components/ComponentTopLeft";
import ComponentTopRight from "./components/ComponentTopRight";

export default function Home() {
  return (
    <GridView>
      <GridView.Cell
        noBodyStyle={true}
        title="复旦大学邯郸校区中华经济文化研究中心项目"
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
        title="工地位置"
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
