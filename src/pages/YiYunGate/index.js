import React, { useState, useEffect, useContext } from "react";
import { message, Table, Modal, Button } from "antd";
import GridView from "../../components/GridView";
import axios from "axios";
import moment from "moment";
import downloadExcelFile, {
  convertDateFilename,
} from "../../utils/downloadExcelFile";

import lockr from "lockr";
//context
import { TimeContext } from "../../contexts/TimeContext";

import ReactEcharts from "echarts-for-react";
import "./index.css";

function Inspection() {
  const [data, setData] = useState({
    loading: true,
    accessControl: {},
    twoWeeksRecognition: [],
    teamDistribution: [],
    accessControlRecord: [],
  });
  const { chinaDate } = useContext(TimeContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const { id: siteId } = lockr.get("current_tenant");
        const accessControl_Url = `https://api.consim.cn/site/${siteId}/data/access-control-info.json`;
        const twoWeeksRecognition_Url = `https://api.consim.cn/site/${siteId}/data/face-entry-records-last-2-weeks.json`;
        const teamDistribution_Url = `https://api.consim.cn/site/${siteId}/data/job-distribution.json`;
        const accessControlRecord_Url = `https://api.consim.cn/site/${siteId}/data/workers-in-out-log.json`;

        const [
          { data: accessControl },
          { data: twoWeeksRecognition },
          { data: teamDistribution },
          { data: accessControlRecord },
        ] = await Promise.all([
          axios.get(accessControl_Url),
          axios.get(twoWeeksRecognition_Url),
          axios.get(teamDistribution_Url),
          axios.get(accessControlRecord_Url),
        ]);
        setData({
          accessControl,
          twoWeeksRecognition,
          teamDistribution,
          accessControlRecord,
          loading: false,
        });
      } catch (error) {
        message.error("加载失败", 10);
      }
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
        titleAlignCenter={true}
        left="0"
        top="0"
        width="calc(35% - 8px)"
        height="calc(44% - 8px)"
      >
        <Table
          size="small"
          showHeader={false}
          loading={data.loading}
          style={{ marginLeft: 24 }}
          pagination={false}
          dataSource={accessControl}
          rowKey="name"
          scroll={{ y: "calc(56vh - 256px)" }}
        >
          <Table.Column
            title=""
            dataIndex="name"
            className="table-column-large table-column-bold"
          />
          <Table.Column
            title=""
            dataIndex="number"
            align="center"
            className="table-column-large table-column-color-primary"
          />
        </Table>
      </GridView.Cell>

      <GridView.Cell
        title="近两周人脸录入记录"
        titleAlignCenter={true}
        right="0"
        top="0"
        width="calc(65% - 8px)"
        height="calc(50% - 8px)"
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
        titleAlignCenter={true}
        left="0"
        bottom="0"
        width="calc(35% - 8px)"
        height="calc(56% - 8px)"
      >
        <Table
          size="small"
          rowKey={(record, index) => {
            return record.name + record.team;
          }}
          onRow={null}
          bordered={false}
          pagination={false}
          loading={data.loading}
          scroll={{ y: "calc(60vh - 256px)" }}
          dataSource={teamDistribution}
        >
          <Table.Column title="分包企业" dataIndex="name" align="center" />
          <Table.Column title="工种" dataIndex="team" align="center" />
          <Table.Column title="人数" dataIndex="nbrWorkers" align="center" />
        </Table>
      </GridView.Cell>

      <GridView.Cell
        title="门禁出入记录"
        titleAlignCenter={true}
        right="0"
        bottom="0"
        width="calc(65% - 8px)"
        height="calc(50% - 8px)"
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
