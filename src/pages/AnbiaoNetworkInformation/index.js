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

 

  //Employment information of safety standard network
  let employmentInfo_Url =
  "https://thingproxy.freeboard.io/fetch/" +
  "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%B7%A5%E5%9C%B0%E7%94%A8%E5%B7%A5%E6%95%B0%E6%8D%AE%E5%BA%93%E6%AF%94%E5%AF%B9%E7%BB%93%E6%9E%9C.json"
  const [employmentInfo, setEmploymentInfo] = useState()
  useEffect(()=> {
    axios.get(employmentInfo_Url)
    .then(response => {
      if (response.data) {
        const employInfo = response.data.map((data) => {
          return {
            type: data['分包企业'],
            number: data['工种'],
          }
        })
        setEmploymentInfo(employInfo)
    }})
    .catch((err) => console.log("Wrong URL", err))
  }, [0])



    //employmentRetirementRecords
  let employmentRetirementRecords_Url =
  "https://thingproxy.freeboard.io/fetch/" +
  "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E7%94%A8%E5%B7%A5%E9%80%80%E5%B7%A5%E8%AE%B0%E5%BD%95.json"
  const [employmentRetirementRecords, setEmploymentRetirementRecords] = useState()
  useEffect(()=> {
    axios.get(employmentRetirementRecords_Url)
    .then(response => {
      setEmploymentRetirementRecords(response.data)
    })
    .catch(console.log("error"))
  }, [employmentRetirementRecords_Url])
  
//jobDistributionData
  let jobDistribution_Url =
  "https://thingproxy.freeboard.io/fetch/" +
  "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%B7%A5%E7%A7%8D%E5%88%86%E5%B8%83.json"
  const [jobDistributionData, setJobDistributionData] = useState()
  useEffect(()=> {
    axios.get(jobDistribution_Url)
    .then(response => {
      if (response.data) {
        const teamD = response.data.map((data) => {
          return {
            name: data['分包企业'],
            team: data['工种'],
            nbrWorkers: data['人数'],
          }
        })
      setJobDistributionData(teamD)
    }})
    .catch((err) => console.log("error: ", err))
  }, [jobDistribution_Url])

  //safetyStandard
  let safetyStandard_UrlXlsx ="https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%AE%89%E6%A0%87%E7%BD%91%E6%95%B0%E6%8D%AE%E5%BA%93.xlsx"
  let safetyStandard_Url =
  "https://thingproxy.freeboard.io/fetch/" +
  "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%AE%89%E6%A0%87%E7%BD%91%E6%95%B0%E6%8D%AE%E5%BA%93.json"
  const [safetyStandard, setSafetyStandard] = useState()
  useEffect(()=> {
    axios.get(safetyStandard_Url)
    .then(response => {
      if (response.data) {
        const newArray = response.data.map((data) => {
          return {
            id: data['序号'],
            name: data['姓名'],
            idCard: data['身份证'],
            gender: data['性别'],
            workType: data['工种'],
            employmentDate: data['用工日期'],
          }
        })
        setSafetyStandard(newArray)
    }})
    .catch((err) => console.log("error: ", err))
  }, [0])
 

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
            { number: "xxx", type: "xxx" },
            employmentInfo
            
            
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


// employmentRetirementRecords 

              {
                // {if (employmentRetirementRecords){ 
//   employmentRetirementRecords.map((item, index) => {
//       return ({
//         Enter: item.Enter,
// });
// })
//   } }
 
                name: "用工人数",
                type: "bar",
                barGap: 0.2,
                barMaxWidth: 10,
                label: "one",
                data: [150, 125, 60, 125, 60, 125,80],
              },
              {
                // {if (employmentRetirementRecords){ 
//   employmentRetirementRecords.map((item, index) => {
//       return ({
//         Exit: item.Exit,
// });
// })
//   } }
                name: "退工人数",
                type: "bar",
                label: "two",
                barMaxWidth: 10,
                data: [80, 40, 20,40, 20,30,50],
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
          scroll={{ y: "22vh" }}
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
