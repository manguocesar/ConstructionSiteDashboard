import React, { useState } from "react";

import ReactEcharts from "echarts-for-react";

export default function PieChart(datas) {

let arrayOfName = datas.datas.工种 && Object.keys(datas.datas.工种)
let arrayOfValue = datas.datas.工种 && Object.values(datas.datas.工种)
let totalValue

 arrayOfValue && arrayOfValue.forEach((item) =>{ totalValue = arrayOfValue[0] + arrayOfValue[1] + arrayOfValue[2] + arrayOfValue[3] +
  arrayOfValue[4]} )

  return (
 
   
     
    <ReactEcharts
      style={{
       
        height: "100%",
      }}
      option={{
        color: ["#65AE9D", "#82cdbf", "#B4FDEC", "#D2E9E5","#F2E9E5"],
        tooltip: {
          trigger: "item",
          formatter: "",
        },
        legend: {
          orient: "vertical",
          color: "white",
          itemWidth: 12,
          itemHeight: 10,
          right: -15,
          top: "middle",
          data: arrayOfName,
          textStyle: {
            color: "white",
            lineHeight: 8,
            fontSize: 12,
          },
        },

        series: [
          {
            name: "",
            type: "pie",
            center: ["30%", "50%"],
            radius: ["35%", "90%"],
            avoidLabelOverlap: false,
            label: {
              formatter: ({ data, value }) => {
                return Math.floor((100 * value) / data.total) + "%";
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
              { value: arrayOfValue && arrayOfValue[0], name: arrayOfName && arrayOfName[0], total: totalValue },
              { value: arrayOfValue && arrayOfValue[1], name: arrayOfName && arrayOfName[1], total: totalValue },
              { value: arrayOfValue && arrayOfValue[2], name: arrayOfName && arrayOfName[2], total: totalValue },
              { value: arrayOfValue && arrayOfValue[3], name: arrayOfName && arrayOfName[3], total: totalValue },
              { value: arrayOfValue && arrayOfValue[4], name: arrayOfName && arrayOfName[4], total: totalValue },
            ],
          },
        ],
      }}
    />
  );
}
