import React, { Component } from "react";

import ReactEcharts from "echarts-for-react";

export default function BarChart() {
  return (
    <ReactEcharts
      option={{
        color: ["#65AE9D", "#82cdbf", "#B4FDEC", "#D2E9E5"],
        tooltip: {
          trigger: "item",
          formatter: "",
        },
        legend: {
          orient: "vertical",
          color: "white",
          right: 0,
          top: 30,
          data: ["建筑普工", "建筑焊工", "机械司机", "其他工种"],
          textStyle: {
            color: "white",
            padding: 3,
          },
        },

        series: [
          {
            name: "建筑普工",
            type: "pie",
            center: ["28%", "28%"],
            radius: ["25%", "45%"],
            avoidLabelOverlap: false,
            label: {
              formatter: "{d}%",
              show: true,
              position: "inside",
              color: "black",
              fontWeight: "bold",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 235, name: "建筑普工" },
              { value: 210, name: "建筑焊工" },
              { value: 134, name: "机械司机" },
              { value: 35, name: "其他工种" },
            ],
          },
        ],
      }}
    />
  );
}
