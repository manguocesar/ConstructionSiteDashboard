import React from 'react'

import GridView from "../../components/GridView";

import ReactEcharts from "echarts-for-react";

export default function Hq_Dashboard() {


    return (
    <GridView>       
        <GridView.Cell
        noBodyStyle={true}
        title=""
        right="0"
        top="0"
        width="calc(50% - 8px)"
        height="calc(50% - 8px)">
        <h2 style={{color:"white", textAlign:"center"}}>Data One</h2>
            {/* <GridView.Body style={{margin:"6px", padding:"2px", borderRadius:"12px"}} 
                className="container_top_left_column_1_row_1">
                    <div className="HQ_Info_Display">
                    <span>Chart one</span> */}

                    <ReactEcharts
                        style={{   height: "100%"  }}
                        option={{
                            xAxis: {
                                type: 'category',
                                boundaryGap: false,
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line',
                                areaStyle: {}
                            }]
                        }}
                        />


                    {/* </div>
            </GridView.Body>  */}
        </GridView.Cell>


        <GridView.Cell
        noBodyStyle={true}
        title=""
        left="0"
        top="0"
        width="calc(50% - 8px)"
        height="calc(50% - 8px)">
        <h2 style={{color:"white", textAlign:"center"}}>Data Two</h2>
            {/* <GridView.Body style={{margin:"6px", padding:"2px", borderRadius:"12px"}} 
                className="container_top_left_column_1_row_1">
                    <div className="HQ_Info_Display">
                    <span>Chart two</span> */}


<ReactEcharts
          style={{
            height: "100%",
          }}
          option={{
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                }
            }]
          }}
        />


                    {/* </div>
            </GridView.Body>  */}
        </GridView.Cell>


        <GridView.Cell
        noBodyStyle={true}
        title=""
        left="0"
        bottom="0"
        width="calc(50% - 8px)"
        height="calc(50% - 8px)">
        <h2 style={{color:"white", textAlign:"center"}}>Data Three</h2>
              {/* <GridView.Body style={{margin:"6px", padding:"2px", borderRadius:"12px"}} 
                className="container_top_left_column_1_row_1">
                    <div className="HQ_Info_Display">
                    <span>Chart two</span> */}


<ReactEcharts
          style={{
            height: "100%",
          }}
          option={{
            backgroundColor: '#2c343c',

            title: {
                text: 'Customized Pie',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },
        
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
        
            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 274, name: '联盟广告'},
                        {value: 235, name: '视频广告'},
                        {value: 400, name: '搜索引擎'}
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    labelLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    },
                    itemStyle: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
        
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
          }}
        />


                    {/* </div>
            </GridView.Body>  */}
        </GridView.Cell>

        <GridView.Cell
        noBodyStyle={true}
        title=""
        right="0"
        bottom="0"
        width="calc(50% - 8px)"
        height="calc(50% - 8px)">
        <h2 style={{color:"white", textAlign:"center"}}>Data Four</h2>
              {/* <GridView.Body style={{margin:"6px", padding:"2px", borderRadius:"12px"}} 
                className="container_top_left_column_1_row_1">
                    <div className="HQ_Info_Display">
                    <span>Chart two</span> */}


<ReactEcharts
          style={{
            height: "100%",
          }}
          option={{
            title: {
                text: '漏斗图',
                subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            legend: {
                data: ['展现','点击','访问','咨询','订单']
            },
        
            series: [
                {
                    name:'漏斗图',
                    type:'funnel',
                    left: '10%',
                    top: 60,
                    //x2: 80,
                    bottom: 60,
                    width: '80%',
                    // height: {totalHeight} - y - y2,
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'descending',
                    gap: 2,
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    labelLine: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    },
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 1
                    },
                    emphasis: {
                        label: {
                            fontSize: 20
                        }
                    },
                    data: [
                        {value: 60, name: '访问'},
                        {value: 40, name: '咨询'},
                        {value: 20, name: '订单'},
                        {value: 80, name: '点击'},
                        {value: 100, name: '展现'}
                    ]
                }
            ]
          }}
        />


                    {/* </div>
            </GridView.Body>  */}
        </GridView.Cell>

    </GridView>
    )
}
