import React, { Component } from "react";

import ReactEcharts from "echarts-for-react";

export default function BarChart() {
  return (
    <ReactEcharts
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
          left: 120,
          bottom: 75,

          textStyle: {
            color: "white",
            padding: 10,
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
            },
          },
          axisTick: { show: false },
          splitLine: {
            show: false,
          },
        },
        grid: {
          top: 10,
          bottom: 140,
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
  );
}
