import React, {useState, useEffect, useContext} from "react";
import { Table, Divider, Button } from "antd";
import GridView from "../../components/GridView";
import axios from "axios"

import ReactEcharts from "echarts-for-react";
//context
import { TimeContext } from "../../contexts/TimeContext";

function Inspection() {
  const { chinaDate } = useContext(TimeContext)
  const [data, setData] = useState(null);

  let comparisonResultsUrlXlsx =
    "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%90%88%E6%A0%BC.xlsx";

  // use this proxy until this issue is fixed: https://github.com/atlas-ai/scraping-facerecognition-scg-internal/issues/5
  let inspectionRecordUrl =
    "https://thingproxy.freeboard.io/fetch/" +
    "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%B7%A1%E6%A3%80%E8%AE%B0%E5%BD%95.json";
  let patrolLogUrl =
    "https://thingproxy.freeboard.io/fetch/" +
    "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%B7%A1%E6%A3%80%E6%97%A5%E5%BF%97.json";


//Comparison results of site employment database
//first apicall ----

//Second ApiCall ----
const [comparisonResults, setComparisonResults] = useState()
useEffect(()=> {
  axios.get(comparisonResultsUrlXlsx)
  .then(response => {
    setComparisonResults(response.data)
  })
  .catch((err) => console.log("Wrong URL", err))
}, [comparisonResultsUrlXlsx])




useEffect(() => {
  // TODO error handling
  async function fetchData() {
    const { data: inspectionData } = await axios.get(inspectionRecordUrl);
    const { data: patrolData } = await axios.get(patrolLogUrl);
    setData({
      inspectionData,
      patrolData,
    });
  }
  fetchData();
}, [0]);

if (!data) {
  return <div >loading...</div>;
}

const inspectionData = data.inspectionData.map((item) => {
  return {
    device_id: item.device_id,
    min: item.min,
    max: item.max,
    
  };
});




const patrolData = data.patrolData.map((item) => {
  console.log(item) 
});


  return (
    <GridView>
      <GridView.Cell
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>工地用工数据库对结果</div>
            <Divider
              style={{
                backgroundColor: "white",
                width: "2px",
                height: "24px",
                marginLeft: 24,
                marginRight: 24,
              }}
              color="white"
              type="vertical"
            />
            <div><span>{chinaDate}</span></div>
          </div>
        }
        left="0"
        top="0"
        width="calc(66% - 4px)"
        height="calc(50% - 4px)"
      >
        <Table
          size="small"
          onRow={null}
          bordered={false}
          style={{ backgroundColor: "black" }}
          rowClassName="company-outsourcing"
          pagination={false}
          dataSource={[
            {
              gov_site_status: "用工",
              gate_status: "录入",
              recog_tag: "合格",
              people_count: "115",
              alarm: "green",
              action: {
                label: "下载",
                onClick: () => window.open(comparisonResultsUrlXlsx, "_blank"),
                disabled: false,
              },
            },
            {
              gov_site_status: "用工",
              gate_status: "未录入",
              recog_tag: "合格",
              people_count: "10",
              alarm: "orange",
              action: {
                label: "下载",
                onClick: () => { 


                },
              },
            },
          ]}
        >
         <Table.Column
            title="安标网"
            dataIndex="gov_site_status"
            align="center"
          />
          <Table.Column
            title="门禁系统"
            dataIndex="gate_status"
            align="center"
          />
          <Table.Column title="识别标签" dataIndex="recog_tag" align="center" />
          <Table.Column
            title="人员数量"
            dataIndex="people_count"
            align="center" 
            render={(val, row) => {
              return <div style={{ color: row.alarm }}>{val}</div>;
            }}
          />
          <Table.Column
            title="人员数量"
            dataIndex="action"
            align="center" 
            render={(action, row) => {
              return (
                <Button
                  size="small"
                  disabled={action.disabled}
                  type="primary"
                  ghost={true}
                  onClick={action.onClick}
                >
                  {action.label}
                </Button>
              );
            }}
          />
        </Table>
      </GridView.Cell>

      <GridView.Cell
        title="用工/退工历史记录"
        right="0"
        top="0"
        width="calc(34% - 4px)"
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

      <GridView.Cell
        title="巡检记录"
        left="0"
        bottom="0"
        width="calc(36% - 4px)"
        height="calc(50% - 4px)"
      >
        <Table
          size="small"
          onRow={null}
          bordered={false}
          style={{ backgroundColor: "black" }}
          pagination={false}
          dataSource={inspectionData}
          scroll={{ y: "20vh" }}
         
        >
          <Table.Column title="日期" dataIndex="min" align="center" />
          <Table.Column title="时间" dataIndex="max" align="center" />
          <Table.Column title="设备" dataIndex="device_id" align="center" />
        </Table>
      </GridView.Cell>

      <GridView.Cell
      
      title="巡检日志"
      action={{
        label: "下载",
        onClick: () => {},
      }}
      right="0"
      bottom="0"
      width="calc(64% - 4px)"
      height="calc(50% - 4px)"
    >
    
      <Table
        size="small"
        onRow={null}
        bordered={false}
        style={{ backgroundColor: "white" }}
        pagination={false}
        dataSource={[

       
{ 设备: "xx", name: "xxx", idCard: "xxx", gender: "xxx",  workType: "xxx" },
  
patrolData

        ]}
      >
        <Table.Column title="设备" dataIndex="设备" align="center" />
        <Table.Column title="姓名" dataIndex="name" align="center" />
        <Table.Column title="身份证" dataIndex="idCard" align="center" />
        <Table.Column title="识别时间" dataIndex="gender" align="center" />
        <Table.Column title="类型" dataIndex="workType" align="center" />
          </Table>
    </GridView.Cell>

    </GridView>
  );
}

export default Inspection;
