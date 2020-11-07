import React from "react";
import { Table, Divider, Button } from "antd";
import GridView from "../../components/GridView";

import ReactEcharts from "echarts-for-react";

function Inspection() {
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
            <div>TODO: datetime component</div>
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
                onClick: () => {},
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
                onClick: () => {},
              },
            },
          ]}
        >
          <Table.Column title="安标网" dataIndex="gov_site_status" align="center" />
          <Table.Column title="门禁系统" dataIndex="gate_status" align="center" />
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
            return <Button size="small" disabled={action.disabled} type="primary" ghost={true} onClick={action.onClick}>{action.label}</Button>;
            }}
          />
        </Table>
      </GridView.Cell>

      <GridView.Cell
        title="Chart"
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
        width="calc(34% - 4px)"
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
          <Table.Column title="日期" dataIndex="date" align="center" />
          <Table.Column title="时间" dataIndex="time" align="center" />
          <Table.Column title="设备" dataIndex="device_id" align="center" />
        </Table>
      </GridView.Cell>

      <GridView.Cell
        title="xxx"
        action={{
          label: "下载",
          onClick: () => {},
        }}
        right="0"
        bottom="0"
        width="calc(66% - 4px)"
        height="calc(50% - 4px)"
      >
        Hello there
      </GridView.Cell>
    </GridView>
  );
}

export default Inspection;
