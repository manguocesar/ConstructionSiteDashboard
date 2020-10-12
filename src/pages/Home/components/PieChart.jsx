import React, { Component } from "react";

import ReactEcharts from "echarts-for-react";

export default function BarChart() {
  return (
    <ReactEcharts style={{
      height: '100%'
    }}
      option={{
        color: ["#65AE9D", "#82cdbf", "#B4FDEC", "#D2E9E5"],
        tooltip: {
          trigger: "item",
          formatter: "",
        },
        legend: {
          orient: "vertical",
          color: "white",
         
     itemWidth: 12,
     itemHeight: 8,
        left: '60%',top: 'middle',
          data: ["建筑普工", "建筑焊工", "机械司机", "其他工种"],
          textStyle: {
            color: "white",
            lineHeight: 8,fontSize: 12,

          },
        },

        series: [
          {
            name: "建筑普工",
            type: "pie",
            center: ["25%", "50%"],
            radius: ["35%", "75%"],
            avoidLabelOverlap: false,
            label: {
              

              
              formatter: ( { data,value} ) => {
                return Math.floor(100*value / data.total) + "%"
              },
              show: true,
              position: "inside",
              color: "black",
              // fontWeight: "bold",
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
              { value: 235, name: "建筑普工", total: 235+210+135+35},
              { value: 210, name: "建筑焊工" , total: 235+210+135+35},
              { value: 135, name: "机械司机" , total: 235+210+135+35},
              { value: 35, name: "其他工种", total: 235+210+135+35 },
            ],
          },
        ],
      }}
    />
  );
}
