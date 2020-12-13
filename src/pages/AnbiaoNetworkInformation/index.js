import React, { useEffect, useState } from "react";
import { message, Table } from "antd";
import GridView from "../../components/GridView";
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import downloadExcelFile, {
  convertDateFilename,
} from "../../utils/downloadExcelFile";

import moment from "moment";

const employmentInfoUrl =
  "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%AE%89%E6%A0%87%E7%BD%91%E7%94%A8%E5%B7%A5%E4%BF%A1%E6%81%AF.json";
const employmentRetirementRecordsUrl =
  "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E7%94%A8%E5%B7%A5%E9%80%80%E5%B7%A5%E8%AE%B0%E5%BD%95.json";
const jobDistributionUrl =
  "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%B7%A5%E7%A7%8D%E5%88%86%E5%B8%83.json";
const safetyStandardUrlXlsx =
  "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%AE%89%E6%A0%87%E7%BD%91%E6%95%B0%E6%8D%AE%E5%BA%93.xlsx";
const safetyStandardUrl =
  "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%AE%89%E6%A0%87%E7%BD%91%E6%95%B0%E6%8D%AE%E5%BA%93.json";

function Inspection() {
  const [data, setData] = useState({
    loading: true,
    employmentInfo: [],
    employmentRetirementRecords: [],
    jobDistributionData: [],
    safetyStandard: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const [
          { data: employmentInfo },
          { data: employmentRetirementRecords },
          { data: jobDistributionData },
          { data: safetyStandard },
        ] = await Promise.all([
          axios.get(employmentInfoUrl),
          axios.get(employmentRetirementRecordsUrl),
          axios.get(jobDistributionUrl),
          axios.get(safetyStandardUrl),
        ]);
        setData({
          employmentInfo,
          employmentRetirementRecords,
          jobDistributionData,
          safetyStandard,
        });
      } catch (error) {
        message.error("加载失败", 10);
      }
    }
    fetchData();
  }, [0]);

  const employmentInfo = Object.entries(data.employmentInfo).map(
    ([key, value]) => {
      return {
        number: value,
        type: key,
      };
    }
  );

  const employmentRecords = data.employmentRetirementRecords.map((item) => {
    return item.用工日期;
  });
  const retirementRecords = data.employmentRetirementRecords.map((item) => {
    return item.退工日期;
  });
  const employeeRecordsDate = data.employmentRetirementRecords.map((item, i) => {
    return moment().subtract(data.employmentRetirementRecords.length - 1, "month").add(i, "month").format("YYYY.MM")
  })

  const jobDistributionData = data.jobDistributionData.map((item) => {
    return {
      name: item["分包企业"],
      team: item["工种"],
      nbrWorkers: item["人数"],
    };
  });

  const safetyStandard = data.safetyStandard.map((item) => {
    return {
      id: item["序号"],
      name: item["姓名"],
      idCard: item["身份证"],
      gender: item["性别"],
      workType: item["工种"],
      employmentDate: moment(item["用工日期"]).format("YYYY年MM月DD日"),
    };
  });

  return (
    <GridView>
      <GridView.Cell
        title="安标网用工信息"
        titleAlignCenter={true}
        left="0"
        top="0"
        width="calc(40% - 8px)"
        height="calc(40% - 8px)"
      >
        <Table
          size="small"
          onRow={null}
          bordered={false}
          loading={data.loading}
          style={{ marginLeft: 24 }}
          pagination={false}
          dataSource={employmentInfo}
          showHeader={false}
          rowKey="type"
          scroll={{ y: "calc(54vh - 256px)" }}
        >
          <Table.Column
            title=""
            dataIndex="type"
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
        title="用工/退工历史记录"
        titleAlignCenter={true}
        right="0"
        top="0"
        width="calc(60% - 8px)"
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
              data: ["用工人数", "退工人数"],
              itemGap: 20,
              bottom: 0,
              itemWidth: 12,
              itemHeight: 9,
              textStyle: {
                color: "white",
                width: 300,
                fontSize: 13,
              },
            },
            xAxis: {
              type: "category",
              data: employeeRecordsDate,
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
              max: "150",
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
                name: "用工人数",
                type: "bar",
                barGap: 0.2,
                barMaxWidth: 10,
                label: "one",
                data: employmentRecords,
              },
              {
                name: "退工人数",
                type: "bar",
                label: "two",
                barMaxWidth: 10,
                data: retirementRecords,
              },
            ],
          }}
        />
      </GridView.Cell>

      <GridView.Cell
        title="工种分布"
        titleAlignCenter={true}
        left="0"
        bottom="0"
        width="calc(40% - 8px)"
        height="calc(60% - 8px)"
      >
        <Table
          loading={data.loading}
          size="small"
          onRow={null}
          bordered={false}
          pagination={false}
          scroll={{ y: "calc(62vh - 256px)" }}
          dataSource={jobDistributionData}
          rowKey={(record) => record.team + record.name}
        >
          <Table.Column title="分包企业" dataIndex="name" align="center" />
          <Table.Column title="工种" dataIndex="team" align="center" />
          <Table.Column title="人数" dataIndex="nbrWorkers" align="center" />
        </Table>
      </GridView.Cell>

      <GridView.Cell
        title="安标网数据库"
        titleAlignCenter={true}
        // action={{  }}
        right="0"
        bottom="0"
        width="calc(60% - 8px)"
        height="calc(50% - 8px)"
      >
        <Table
          size="small"
          loading={data.loading}
          pagination={false}
          scroll={{ y: "calc(54vh - 256px)" }}
          dataSource={safetyStandard}
          rowKey="id"
        >
          <Table.Column title="ID" dataIndex="id" align="center" />
          <Table.Column title="姓名" dataIndex="name" align="center" />
          <Table.Column title="身份证" dataIndex="idCard" align="center" />
          <Table.Column title="性别" dataIndex="gender" align="center" />
          <Table.Column title="工种" dataIndex="workType" align="center" />
          <Table.Column
            title="用工日期"
            dataIndex="employmentDate"
            align="center"
            width={160}
          />
        </Table>
      </GridView.Cell>
    </GridView>
  );
}

export default Inspection;
