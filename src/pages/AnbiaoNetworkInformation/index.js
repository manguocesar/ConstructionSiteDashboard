import React, {useEffect, useState} from "react";
import { Table, Divider, Button } from "antd";
import GridView from "../../components/GridView";
import ReactEcharts from "echarts-for-react";
import axios from "axios"

function Inspection() {

    //employmentRetirementRecords
  let employmentRetirementRecords_Url ="https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E7%94%A8%E5%B7%A5%E9%80%80%E5%B7%A5%E8%AE%B0%E5%BD%95.json"
  const [employmentRetirementRecords, setEmploymentRetirementRecords] = useState()
  useEffect(()=> {
    axios.get(employmentRetirementRecords_Url)
    .then(response => {
      setEmploymentRetirementRecords(response.data)
    })
    .catch(console.log("Wrong URL"))
  }, [employmentRetirementRecords_Url])
  
//jobDistributionData
  let jobDistribution_Url ="https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%B7%A5%E7%A7%8D%E5%88%86%E5%B8%83.json"
  const [jobDistributionData, setJobDistributionData] = useState()
  useEffect(()=> {
    axios.get(jobDistribution_Url)
    .then(response => {
      setJobDistributionData(response.data)
    })
    .catch(console.log("Wrong URL"))
  }, [jobDistribution_Url])

  

  
  //safetyStandard
  let safetyStandard_Url ="https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%AE%89%E6%A0%87%E7%BD%91%E6%95%B0%E6%8D%AE%E5%BA%93.json"
  const [safetyStandard, setSafetyStandard] = useState({ id: "xx", name: "xxx", idCard: "xxx", gender: "xxx",  workType: "xxx", employmentDate: "xxx"})
  useEffect(()=> {
    axios.get(safetyStandard_Url)
    .then(response => {
      setSafetyStandard(response.data)
    })
    .catch(console.log("Wrong URL"))
  }, [safetyStandard_Url])


 

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
            { device_id: "498", date: "历史记录人数", time: "xxx" },
            { device_id: "371", date: "已退工人数", time: "xxx" },
            
          ]}
        >
          <Table.Column title="合法用工人数" dataIndex="date" align="center" />
         
          <Table.Column title="127" dataIndex="device_id" align="center" />
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




                "2020.04",
               
                "2020.05",
                
                "2020.06",

                "2020.07",
               
                "2020.08",
                
                "2020.09",
                "2020.10",
               
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
          dataSource={[

// jobDistributionData 

// {if (jobDistributionData){ 
//   jobDistributionData.map((item, index) => {
//       return ({
//         分包企业: item.分包企业,
//         工种: item.工种,
//         人数: item.人数,
// });
// })
//   } }


            { 分包企业: "上海天怡建筑装潢有限公司", 工种: "建筑起重机械司机", 人数: "2" },
         
          ]}
        >
          <Table.Column title="分包企业" dataIndex="分包企业" align="center" />
          <Table.Column title="工种" dataIndex="工种" align="center" />
          <Table.Column title="人数" dataIndex="人数" align="center" />
        </Table>
      </GridView.Cell>
     
      <GridView.Cell
      
        title="安标网数据库"
        action={{
          label: "下载",
          onClick: () => {},
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
          dataSource={[

         
{ id: "xx", name: "xxx", idCard: "xxx", gender: "xxx",  workType: "xxx", employmentDate: "xxx"}
    

// {if (safetyStandard){ 
//   safetyStandard.map((item, index) => {
//       return ({
//         id: item.序号,
//         name: item.姓名,
//         idCard: item.身份证,
//         gender: item.性别,
//         workType: item.工种,
//         employmentDate: item.用工日期,  
// });
// })
//   } }
   

          ]}
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
