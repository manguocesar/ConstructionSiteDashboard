import React, { useState, useEffect, useContext } from "react";
import { Table } from "antd";
import GridView from "../../components/GridView";
import axios from "axios";

//context
import { TimeContext } from "../../contexts/TimeContext";
import Loading from "../../components/Loading";

import ReactEcharts from "echarts-for-react";

function Inspection() {
  const [data, setData] = useState({
    loading: true,
    accessControl: {},
    twoWeeksRecognition: [],
    teamDistribution: [],
    accessControlRecord: [],
  });
  const { chinaDate } = useContext(TimeContext);

  let accessControl_Url =
    "https://thingproxy.freeboard.io/fetch/" +
    "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E7%BE%BF%E4%BA%91%E9%97%A8%E7%A6%81%E4%BF%A1%E6%81%AF.json";

  let twoWeeksRecognition_Url =
    "https://thingproxy.freeboard.io/fetch/" +
    "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E8%BF%91%E4%B8%A4%E5%91%A8%E4%BA%BA%E8%84%B8%E5%BD%95%E5%85%A5%E8%AE%B0%E5%BD%95.json";

  let teamDistribution_Url =
    "https://thingproxy.freeboard.io/fetch/" +
    "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%B7%A5%E7%A7%8D%E5%88%86%E5%B8%83.json";

  let accessControlRecord_UrlXlsx =
    "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E9%97%A8%E7%A6%81%E5%87%BA%E5%85%A5%E8%AE%B0%E5%BD%95.xlsx";
  let accessControlRecord_Url =
    "https://thingproxy.freeboard.io/fetch/" +
    "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E9%97%A8%E7%A6%81%E5%87%BA%E5%85%A5%E8%AE%B0%E5%BD%95.json";

  useEffect(() => {
    async function fetchData() {
      const { data: accessControl } = await axios.get(accessControl_Url);
      const { data: twoWeeksRecognition } = await axios.get(
        twoWeeksRecognition_Url
      );
      const { data: teamDistribution } = await axios.get(teamDistribution_Url);
      const { data: accessControlRecord } = await axios.get(
        accessControlRecord_Url
      );
      setData({
        accessControl,
        twoWeeksRecognition,
        teamDistribution,
        accessControlRecord,
      });
    }
    fetchData();
  }, [0]);

  const accessControl = Object.entries(data.accessControl).map(
    ([key, value]) => {
      return {
        name: key,
        number: value,
      };
    }
  );

  const daysTime = data.twoWeeksRecognition.map((item) => {
    return item.时间;
  });
  const nbrEnteredPpl = data.twoWeeksRecognition.map((item) => {
    return item.录入人数;
  });

  const teamDistribution = data.teamDistribution.map((item) => {
    return {
      name: item["分包企业"],
      team: item["工种"],
      nbrWorkers: item["人数"],
    };
  });

  const timeHours = data.accessControlRecord.map((item) => {
    return item.时间.split("2020-00-11");
  });

  const entryRecords = data.accessControlRecord.map((item) => {
    return item.进入人数;
  });
  const exitRecords = data.accessControlRecord.map((item) => {
    return item.离开人数;
  });
  const totalRecords = data.accessControlRecord.map((item) => {
    return item.进入人数 + item.离开人数;
  });

  return (
    <GridView>
      <GridView.Cell
        title="羿云门禁信息"
        left="0"
        top="0"
        width="calc(35% - 4px)"
        height="calc(47% - 4px)"
      >
        <Table
          size="small"
          loading={data.loading}
          style={{ backgroundColor: "black" }}
          pagination={false}
          dataSource={accessControl}
        >
          <Table.Column title="" dataIndex="name"  />
          <Table.Column title="" dataIndex="number" align="center" />
        </Table>
      </GridView.Cell>

      <GridView.Cell
        title="近两周人脸录入记录"
        right="0"
        top="0"
        width="calc(65% - 4px)"
        height="calc(50% - 4px)"
      >
        <ReactEcharts
          style={{
            height: "100%",
          }}
          option={{
            backgroundColor: "transparent",
            color: ["#65AE9D", "#D2E9E5"],
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow",
              },
            },
            legend: {
              data: ["录入人数"],
              itemGap: 20,
              bottom: 0,
              itemWidth: 12,
              itemHeight: 9,
              textStyle: {
                color: "white",
                width: 300,
                fontSize: 13,
                // fontFamily: ,
                // fontWeight: "italic" ,
                lineHeight: "",
              },
            },
            xAxis: {
              type: "category",
              data: daysTime,
              axisLabel: {
                show: true,
                textStyle: {
                  color: "grey",
                  fontSize: 12,
                },
              },
              axisTick: { show: false },
              splitLine: {
                show: false,
              },
            },
            yAxis: {
              type: "value",
              max: nbrEnteredPpl * 2,
              axisLabel: {
                show: true,
                textStyle: {
                  color: "grey",
                  fontSize: 12,
                },
              },
              axisTick: { show: true },
              splitLine: {
                show: true,
              },
            },
            grid: {
              top: 10,
            },
            series: [
              {
                name: "录入人数",
                type: "bar",
                barGap: 0,
                barMaxWidth: 22,
                label: "one",
                data: nbrEnteredPpl,
              },
            ],
          }}
        />
      </GridView.Cell>

      <GridView.Cell
        title="班组分布"
        left="0"
        bottom="0"
        width="calc(35% - 4px)"
        height="calc(53% - 4px)"
      >
        <Table
          size="small"
          onRow={null}
          bordered={false}
          pagination={false}
          loading={data.loading}
          scroll={{ y: "20vh" }}
          dataSource={teamDistribution}
        >
          <Table.Column title="分包企业" dataIndex="name" align="center" />
          <Table.Column title="工种" dataIndex="team" align="center" />
          <Table.Column title="人数" dataIndex="nbrWorkers" align="center" />
        </Table>
      </GridView.Cell>

      <GridView.Cell
        title="门禁出入记录"
        action={{
          label: "下载",
          onClick: () => window.open(accessControlRecord_UrlXlsx, "_blank"),
          disabled: false,
        }}
        right="0"
        bottom="0"
        width="calc(65% - 4px)"
        height="calc(50% - 4px)"
      >
        <span
          style={{
            fontSize: 16,
          }}
        >
          {chinaDate}
        </span>
        <ReactEcharts
          style={{
            height: "90%",
          }}
          option={{
            backgroundColor: "transparent",
            color: ["#65AE9D", "#D2E9E5"],
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow",
              },
            },
            legend: {
              data: ["进入人数", "离开人数", "工地人数"],
              itemGap: 20,
              bottom: 0,
              itemWidth: 12,
              itemHeight: 9,
              textStyle: {
                color: "white",
                width: 300,
                fontSize: 13,
                lineHeight: "",
              },
            },
            xAxis: {
              type: "category",
              data: timeHours,
              axisLabel: {
                show: true,
                textStyle: {
                  color: "grey",
                  fontSize: 12,
                },
              },
              axisTick: { show: false },
              splitLine: {
                show: false,
              },
            },
            yAxis: {
              type: "value",
              max: 50,
              axisLabel: {
                show: true,
                textStyle: {
                  color: "grey",
                  fontSize: 12,
                },
              },
              axisTick: { show: false },
              splitLine: {
                show: false,
              },
            },
            grid: {
              top: 10,
            },
            series: [
              {
                name: "进入人数",
                type: "bar",
                barGap: 0,
                barMaxWidth: 25,
                label: "one",
                data: entryRecords,
              },
              {
                name: "离开人数",
                type: "bar",
                label: "two",
                barMaxWidth: 25,
                data: exitRecords,
              },
              {
                name: "工地人数",
                type: "line",
                label: "three",
                smooth: true,
                data: totalRecords,
              },
            ],
          }}
        />
      </GridView.Cell>
    </GridView>
  );
}

export default Inspection;
