import React, { useEffect, useState } from "react";
import axios from "axios";

//style
import "./index.css";

//components
import Loading from "../../components/Loading";
import GridView from "../../components/GridView";
import ListofSites from "./components/ListOfSites";
import SiteLocation from "./components/SiteLocation";
import ComponentTopLeft from "./components/ComponentTopLeft";
import ComponentTopRight from "./components/ComponentTopRight";

export default function Home() {
  const [data, setData] = useState(null);

  const numberOfWorkersUrl =
    "http://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%B7%A5%E4%BA%BA%E6%95%B0%E9%87%8F.json";

  const accessControlUrl =
    "http://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E7%BE%BF%E4%BA%91%E9%97%A8%E7%A6%81%E4%BF%A1%E6%81%AF.json";

  useEffect(() => {
    async function fetchData() {
      const { data: numberOfWorkersData } = await axios.get(numberOfWorkersUrl);
      const { data: accessControlData } = await axios.get(accessControlUrl);

      setData({
        numberOfWorkersData,
        accessControlData,
      });
    }
    fetchData();
  }, [0]);

  return (
    <GridView>
      <GridView.Cell
        noBodyStyle={true}
        title="复旦大学邯郸校区中华经济文化研究中心项目"
        left="0"
        top="0"
        width="calc(66% - 8px)"
        height="calc(50% - 8px)"
      >
        {!!data ? (
          <ComponentTopLeft
            numberOfWorkersData={data.numberOfWorkersData}
            accessControlData={data.accessControlData}
          />
        ) : (
          <Loading />
        )}
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
        width="calc(34% - 8px)"
        height="calc(50% - 8px)"
      >
        {!!data ? <ComponentTopRight numberOfWorkersData={data.numberOfWorkersData} /> : <Loading />}
      </GridView.Cell>

      <GridView.Cell
        noBodyStyle={true}
        left="0"
        bottom="0"
        width="calc(66% - 8px)"
        height="calc(50% - 8px)"
      >
        {!!data ? <ListofSites /> : <Loading />}
      </GridView.Cell>

      <GridView.Cell
        noBodyStyle={true}
        title="工地位置"
        right="0"
        bottom="0"
        width="calc(34% - 8px)"
        height="calc(50% - 8px)"
      >
        {!!data ? <SiteLocation /> : <Loading />}
      </GridView.Cell>
    </GridView>
  );
}
