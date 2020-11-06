import React from "react";
import { Table, Divider, Button } from "antd";
import GridView from "../../components/GridView";
import "./index.css";
import ReactEcharts from "echarts-for-react";

function Inspection() {
  return (
    <GridView>
      <GridView.Cell
        title="安标网用工信息"
        left="0"
        top="0"
        width="calc(40% - 4px)"
        height="calc(43% - 4px)"
      >
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
              {
                name: "用工人数",
                type: "bar",
                barGap: 0.2,
                barMaxWidth: 10,
                label: "one",
                data: [250, 125, 60, 125, 60, 125,80],
              },
              {
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
            { device_id: "2", date: "上海天怡建筑装潢有限公司", time: "建筑起重机械司机" },
            { device_id: "16", date: "上海翊荣建筑装潢有限公司", time: "建筑、装饰工程普工" },
            { device_id: "2", date: "上海翊荣建筑装潢有限公司", time: "建筑焊工" },
            { device_id: "31", date: "上海翊荣建筑装潢有限公司", time: "钢筋工" },
          ]}
        >
          <Table.Column title="分包企业" dataIndex="date" align="center" />
          <Table.Column title="工种" dataIndex="time" align="center" />
          <Table.Column title="人数" dataIndex="device_id" align="center" />
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
          style={{ backgroundColor: "black" }}
          pagination={false}
          dataSource={[
            { device_id: "xxx", date: "xxx", time: "xxx" },
            { device_id: "xxx", date: "xxx", time: "xxx" },
          ]}
        >
          <Table.Column title="ID" dataIndex="date" align="center" />
          <Table.Column title="姓名" dataIndex="time" align="center" />
          <Table.Column title="身份证" dataIndex="device_id" align="center" />
          <Table.Column title="性别" dataIndex="date" align="center" />
          <Table.Column title="工种" dataIndex="time" align="center" />
          <Table.Column title="用工日期" dataIndex="device_id" align="center" />
        </Table>
      </GridView.Cell>
    </GridView>
  );
}

export default Inspection;
