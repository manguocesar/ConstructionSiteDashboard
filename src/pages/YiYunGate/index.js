import React, {useState, useEffect} from "react";
import { Table, Divider, Button } from "antd";
import GridView from "../../components/GridView";
import axios from "axios"

import ReactEcharts from "echarts-for-react";

function Inspection() {

//accessControl
let accessControl_Url ="https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E7%BE%BF%E4%BA%91%E9%97%A8%E7%A6%81%E4%BF%A1%E6%81%AF.json"
const [accessControl, setAccessControl] = useState()
useEffect( async ()=> {
  const res = await fetch(accessControl_Url)
  const data = await res.json()
  setAccessControl(data)
},
 [accessControl_Url])

// //TwoWeeksRecognition
// let twoWeeksRecognition_Url ="https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E8%BF%91%E4%B8%A4%E5%91%A8%E4%BA%BA%E8%84%B8%E5%BD%95%E5%85%A5%E8%AE%B0%E5%BD%95.json"
// const [twoWeeksRecognition, setTwoWeeksRecognition] = useState()
// useEffect(()=> {
//   axios.get(twoWeeksRecognition_Url)
//   .then(response => {
//     setTwoWeeksRecognition(response.data)
//   })
//   .catch(console.log("Wrong URL"))
// }, [twoWeeksRecognition_Url])


// //teamDistribution
let teamDistribution_Url ="https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%B7%A5%E7%A7%8D%E5%88%86%E5%B8%83.json"
  
const [teamDistribution, setTeamDistribution] = useState()
useEffect(()=> {
     axios.get(teamDistribution_Url)
     .then(response => {
      if (response.data) {
        const teamD = response.data.map((data) => {
          return {
            name: data['分包企业'],
            team: data['工种'],
            nbrWorkers: data['人数'],
          }
        })
        setTeamDistribution(teamD);
      }
     })
     .catch((err) => console.log("Wrong URL", err))
    


}, [teamDistribution_Url])



// //Access control record
// let accessControlRecord_Url ="https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/门禁出入记录.xlsx"
// const [accessControlRecord, setAccessControlRecord] = useState()
// useEffect(()=> {
//   axios.get(accessControlRecord_Url)
//   .then(response => {
//     setAccessControlRecord(response.data)
//   })
//   .catch(console.log("Wrong URL"))
// }, [accessControlRecord_Url])


  return (
    <GridView>
      {/* done */}
      <GridView.Cell
        title="羿云门禁信息"
        left="0"
        top="0"
        width="calc(35% - 4px)"
        height="calc(47% - 4px)"
      >
        <Table
          size="small"
          onRow={null}
          bordered={false}
          style={{ backgroundColor: "black" }}
          pagination={false}
          dataSource={[



            { number: accessControl && accessControl.录入人脸数量, name: "录入人脸数量" },
            { number:  accessControl && accessControl.管理员数量, name: "管理员数量" },
            { number: accessControl && accessControl.合格人员数量, name: "合格人员数量" },
            { number: accessControl && accessControl.未归类人员, name: "未归类人员" },
            
          ]}
        >
          <Table.Column title="" dataIndex="name" align="center" />
         
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
              data: [

 // twoWeeksRecognition - date

// {if (twoWeeksRecognition){ 
//   twoWeeksRecognition.map((item) => {
//       return ({
//         时间: item.时间,
// });
// })
//   } }

                "2020.10.15",
                "",
                "",
                "",
                "2020.10.20",
                "",
                "",
                "",
                "2020.10.25",
                "",
                "",
                "","",
                "2020.10.30",
              ],
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
                name: "录入人数",
                type: "bar",
                barGap: 0,
                barMaxWidth: 14,
                label: "one",
                data: [
                  

 // twoWeeksRecognition

// {if (twoWeeksRecognition){ 
//   twoWeeksRecognition.map((item) => {
//       return ({
//         录入人数: item.录入人数,
// });
// })
//   } }


                  100, 60, 30, 120, 105, 140, 140, 60, 80, 110, 120,90,40,60

                ],
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
          style={{ color: "black" }}
          pagination={false}
          dataSource={
teamDistribution
 


          }
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
          onClick: () => {},
        }}
        right="0"
        bottom="0"
        width="calc(65% - 4px)"
        height="calc(50% - 4px)"
      >
        <span>2020年10月9日 12:30:57 </span>
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
                // fontFamily: ,
                // fontWeight: "italic" ,
                lineHeight: "",
              },
            },
            xAxis: {
              type: "category",
              data: [
                "08.00",
                "",
                "",
                "",
                "12.00",
                "",
                "",
                "",
                "16.00",
                "",
                "",
                "",
                "20.00",
              ],
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
              max: "400",
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

 // accessControlRecord

// {if (accessControlRecord){ 
//   accessControlRecord.map((item) => {
//       return ({
//         entry: item.entry,
//         exit: item.exit,
//         nbrWorkers: item.nbrWorkers,
// });
// })
//   } }



              {
                name: "进入人数",
                type: "bar",
                barGap: 0,
                barMaxWidth: 25,
                label: "one",
                data: [250, 125, 60],
              },
              {
                name: "离开人数",
                type: "bar",
                label: "two",
                barMaxWidth: 25,
                data: [80, 40, 20],
              },
              {
                name: "工地人数",
                type: "line",
                label: "three",
                smooth: true,
                data: [210, 320, 370, 190, 150, 210],
              },
            ],
          }}
        />
      </GridView.Cell>
    </GridView>
  );
}

export default Inspection;
