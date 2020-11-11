import React, {useEffect, useState} from "react";
import { Table, Divider, Button } from "antd";
import GridView from "../../components/GridView";
import ReactEcharts from "echarts-for-react";
import axios from "axios"

import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

function Inspection() {

  let today = moment().format("M.D")
  let yesterday = moment().subtract(1, 'days').format("DD-MM")
  let twoDaysAgo = moment().subtract(2, 'days').format("DD-MM")
  let threeDaysAgo = moment().subtract(3, 'days').format("DD-MM")
  let fourDaysAgo = moment().subtract(4, 'days').format("DD-MM")
  let fiveDaysAgo = moment().subtract(5, 'days').format("DD-MM")
  let sixDaysAgo = moment().subtract(6, 'days').format("DD-MM")

 const [data,setData] = useState("")

  let employmentInfo_Url =
  "https://thingproxy.freeboard.io/fetch/" +
  "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%AE%89%E6%A0%87%E7%BD%91%E7%94%A8%E5%B7%A5%E4%BF%A1%E6%81%AF.json"
    
  let employmentRetirementRecords_Url =
  "https://thingproxy.freeboard.io/fetch/" +
  "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E7%94%A8%E5%B7%A5%E9%80%80%E5%B7%A5%E8%AE%B0%E5%BD%95.json"

  let jobDistribution_Url =
  "https://thingproxy.freeboard.io/fetch/" +
  "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%B7%A5%E7%A7%8D%E5%88%86%E5%B8%83.json"

  let safetyStandard_UrlXlsx ="https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%AE%89%E6%A0%87%E7%BD%91%E6%95%B0%E6%8D%AE%E5%BA%93.xlsx"
  let safetyStandard_Url =
  "https://thingproxy.freeboard.io/fetch/" +
  "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%AE%89%E6%A0%87%E7%BD%91%E6%95%B0%E6%8D%AE%E5%BA%93.json"

  useEffect(() => {
    async function fetchData() {
      const { data: employmentInfo } = await axios.get(employmentInfo_Url);
      const { data: employmentRetirementRecords } = await axios.get(employmentRetirementRecords_Url);
      const { data: jobDistributionData } = await axios.get(jobDistribution_Url);
      const { data: safetyStandard } = await axios.get(safetyStandard_Url);
  
      setData({
        employmentInfo,
        employmentRetirementRecords,
        jobDistributionData,
        safetyStandard,
      });
    }
    fetchData();
  }, [0]);
  

let arrayOfName = data && Object.keys(data.employmentInfo)
let arrayOfValue = data && Object.values(data.employmentInfo)

  const employmentRecords = data.employmentRetirementRecords && data.employmentRetirementRecords.map((item) => {
    return  item.用工日期
   })
  const retirementRecords = data.employmentRetirementRecords && data.employmentRetirementRecords.map((item) => {
    return  item.退工日期
   })


   const jobDistributionData = data && data.jobDistributionData.map((item) => {
    return {
      name: item['分包企业'],   team: item['工种'],  nbrWorkers: item['人数']
    };});

    const safetyStandard = data && data.safetyStandard.map((item) => {
      return {
        id: item['序号'],   name: item['姓名'],  idCard: item['身份证'],
        gender: item['性别'],   workType: item['工种'],  employmentDate: item['用工日期']
      };});

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <GridView >
      <GridView.Cell
        title="安标网用工信息"
        left="0"
        top="0"
        width="calc(40% - 4px)"
        height="calc(43% - 4px)"
      >
         <div></div>
        <Table
          size="small"
          onRow={null}
          bordered={false}
          style={{ backgroundColor: "black" }}
          pagination={false}
          dataSource={[
            { number: data && arrayOfValue[0], type: arrayOfName[0] },
            { number:  data && arrayOfValue[1], type: arrayOfName[1] },
            { number: data && arrayOfValue[2], type: arrayOfName[2] }, 
          ]}
        >
          <Table.Column title="" dataIndex="type" align="center" />
         
          <Table.Column title="" dataIndex="number" align="center" />
        </Table>
      </GridView.Cell>

      <GridView.Cell
        title="用工/退工历史记录"
        right="0"
        top="0"
        width="calc(60% - 4px)"
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
              data: ["用工人数", "退工人数"],
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
              data: [
                sixDaysAgo,
                fiveDaysAgo,
               fourDaysAgo,
                threeDaysAgo,
                twoDaysAgo,
                yesterday,
                today,
              ],
              axisLabel: {
                show: true,
                textStyle: {
                  color: "grey",
                  fontSize: 8,
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
        left="0"
        bottom="0"
        width="calc(40% - 4px)"
        height="calc(57% - 4px)"
      >
        <Table
          size="small"
          onRow={null}
          bordered={false}
          style={{ color: "black" }}
          pagination={false}
          scroll={{ y: "22vh" }}
          dataSource={  jobDistributionData }
        >
          <Table.Column title="分包企业" dataIndex="name" align="center" />
          <Table.Column title="工种" dataIndex="team" align="center" />
          <Table.Column title="人数" dataIndex="nbrWorkers" align="center" />
        </Table>
      </GridView.Cell>
     
      <GridView.Cell
      
        title="安标网数据库"
        action={{
          label: "下载",
            onClick: () => window.open(safetyStandard_UrlXlsx, "_blank"),
            disabled: false,
        }}
        right="0"
        bottom="0"
        width="calc(60% - 4px)"
        height="calc(50% - 4px)"
      >
      
        <Table
          size="small"
          onRow={null}
          bordered={false}
          style={{ backgroundColor: "white" }}
          pagination={false}
          scroll={{ y: "20vh" }}
          dataSource={safetyStandard}
        >
          <Table.Column title="ID" dataIndex="id" align="center" />
          <Table.Column title="姓名" dataIndex="name" align="center" />
          <Table.Column title="身份证" dataIndex="idCard" align="center" />
          <Table.Column title="性别" dataIndex="gender" align="center" />
          <Table.Column title="工种" dataIndex="workType" align="center" />
          <Table.Column title="用工日期" dataIndex="employmentDate" align="center" />
        </Table>
      </GridView.Cell>
    </GridView>
  );
}

export default Inspection;
