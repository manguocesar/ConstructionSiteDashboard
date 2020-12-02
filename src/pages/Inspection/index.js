import React, { useState, useEffect, useContext } from "react";
import { Table, Divider, Button, message } from "antd";
import axios from "axios";
import ReactEcharts from "echarts-for-react";
import moment from "moment";
import downloadExcelFile, {
  convertDateFilename,
} from "../../utils/downloadExcelFile";

//components
import Loading from "../../components/Loading";
import GridView from "../../components/GridView";

//context
import { TimeContext } from "../../contexts/TimeContext";

function Inspection() {
  const { chinaDate } = useContext(TimeContext);
  const [data, setData] = useState({
    loading: true,
    comparisonResults: [],
    employmentRetirementRecords: [],
    inspectionData: [],
    patrolData: [],
  });

  let comparisonResultsUrl =
    "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%B7%A5%E5%9C%B0%E7%94%A8%E5%B7%A5%E6%95%B0%E6%8D%AE%E5%BA%93%E6%AF%94%E5%AF%B9%E7%BB%93%E6%9E%9C.json";

  let employmentRetirementRecordsUrl =
    "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E7%94%A8%E5%B7%A5%E9%80%80%E5%B7%A5%E8%AE%B0%E5%BD%95.json";

  let inspectionRecordUrl =
    "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%B7%A1%E6%A3%80%E8%AE%B0%E5%BD%95.json";

  let patrolLogUrl =
    "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%B7%A1%E6%A3%80%E6%97%A5%E5%BF%97.json";
  let patrolLogUrlXlsx =
    "https://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%B7%A1%E6%A3%80%E6%97%A5%E5%BF%97.xlsx";

  useEffect(() => {
    async function fetchData() {
      try {
        const [
          { data: comparisonResults },
          { data: employmentRetirementRecords },
          { data: inspectionData },
          { data: patrolData },
        ] = await Promise.all([
          axios.get(comparisonResultsUrl),
          axios.get(employmentRetirementRecordsUrl),
          axios.get(inspectionRecordUrl),
          axios.get(patrolLogUrl),
        ]);
        setData({
          comparisonResults,
          employmentRetirementRecords,
          inspectionData,
          patrolData,
          loading: false,
        });
      } catch (error) {
        message.error("加载失败", 10);
      }
    }
    fetchData();
  }, [0]);

  const comparisonResults = data.comparisonResults.map((item, i) => {
    const textColors = [
      "#85F391",
      "#F7000B",
      "#DFA03A",
      "#F7000B",
      "#85F391",
      "#F7000B",
    ];
    let action = {
      label: "下载",
      onClick: () => {},
      disabled: true,
    };
    if (item.人员列表 && item.人员列表.length > 0) {
      action = {
        label: "下载",
        onClick: () => {
          downloadExcelFile(item.人员列表, convertDateFilename(item.人员列表));
        },
        disabled: false,
      };
    }
    return {
      gov_site_status: item.门禁系统,
      gate_status: item.安标网,
      recog_tag: item.识别标签,
      people_count: item.人员数量,
      action,
      color: textColors[i],
    };
  });

  const employmentRecords = data.employmentRetirementRecords.map((item) => {
    return item.用工日期;
  });
  const retirementRecords = data.employmentRetirementRecords.map((item) => {
    return item.退工日期;
  });
  const totalRecords = data.employmentRetirementRecords.map((item) => {
    return item.用工日期 + item.退工日期;
  });
  const totalRecords2 = data.employmentRetirementRecords.map((item) => {
    return item.用工日期 + item.退工日期 + item.退工日期;
  });

  const inspectionData = data.inspectionData.map((item) => {
    return {
      device_id: item.device_id,
      time:
        moment(item.min).format("HH:mm") +
        " - " +
        moment(item.max).format("HH:mm"),
      date: moment(item.min).format("YYYY-MM-DD"),
    };
  });

  return (
    <GridView>
      <GridView.Cell
        titleAlignCenter={true}
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
            <div>
              <span>{chinaDate}</span>
            </div>
          </div>
        }
        left="0"
        top="0"
        width="calc(66% - 8px)"
        height="calc(52% - 8px)"
      >
        <Table
          size="small"
          onRow={null}
          bordered={false}
          pagination={false}
          scroll={{ y: "calc(55vh - 256px)" }}
          dataSource={comparisonResults}
          loading={data.loading}
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
              return (
                <div style={{ color: row.color, fontSize: 20 }}>{val}</div>
              );
            }}
          />
          <Table.Column
            className="table-cell-very-small"
            title="人员列表"
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
        titleAlignCenter={true}
        title="近30日人员变化趋势"
        right="0"
        top="0"
        width="calc(34% - 8px)"
        height="calc(52% - 8px)"
      >
        <ReactEcharts
          style={{
            height: "95%",
          }}
          option={{
            backgroundColor: "transparent",
            color: ["#65AE9D", "#DFA03A", "#D7000B", "#F7000B"],
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow",
              },
            },
            legend: {
              data: [
                "合格",
                "核查门禁",
                "核查安标",
                {
                  name: "无法识别",
                  icon: "circle",
                },
              ],
              itemGap: 20,
              bottom: 0,
              itemWidth: 16,
              itemHeight: 9,
              icon: "line",
              textStyle: {
                color: "white",
                width: 300,
                fontSize: 14,
                lineHeight: "",
              },
            },
            xAxis: {
              type: "category",
              data: ["-30天", "-20天", "-10天"],
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
              max: "200",
              axisLabel: {
                show: true,
                textStyle: {
                  color: "grey",
                  fontSize: 16,
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
                name: "合格",
                type: "line",
                label: "one",
                smooth: true,
                data: employmentRecords,
              },
              {
                name: "核查门禁",
                type: "line",
                label: "two",
                smooth: true,
                data: retirementRecords,
              },
              {
                name: "核查安标",
                type: "line",
                label: "three",
                smooth: true,
                data: totalRecords,
              },
              {
                name: "无法识别",
                type: "line",
                label: "four",
                smooth: true,
                data: totalRecords2,
                lineStyle: {
                  type: "dotted",
                },
              },
            ],
          }}
        />
      </GridView.Cell>

      <GridView.Cell
        title="巡检记录"
        titleAlignCenter={true}
        left="0"
        bottom="0"
        width="calc(36% - 8px)"
        height="calc(48% - 8px)"
      >
        <Table
          size="small"
          pagination={false}
          dataSource={inspectionData}
          scroll={{ y: "calc(53vh - 256px)" }}
          loading={data.loading}
        >
          <Table.Column title="日期" dataIndex="date" align="center" />
          <Table.Column title="时间" dataIndex="time" align="center" />
          <Table.Column title="设备" dataIndex="device_id" align="center" />
        </Table>
      </GridView.Cell>

      <GridView.Cell
        title="巡检日志"
        titleAlignCenter={true}
        action={{
          label: "下载巡检报告",
          onClick: async () => {
            downloadExcelFile(
              patrolLogUrlXlsx,
              convertDateFilename(patrolLogUrlXlsx)
            );
          },
          disabled: false,
        }}
        right="0"
        bottom="0"
        width="calc(64% - 8px)"
        height="calc(48% - 8px)"
      >
        <Table
          size="small"
          dataSource={data.patrolData}
          scroll={{ y: "calc(53vh - 256px)" }}
          loading={data.loading}
          pagination={false}
        >
          <Table.Column title="设备" dataIndex="设备" align="center" />
          <Table.Column title="姓名" dataIndex="姓名" align="center" />
          <Table.Column title="身份证" dataIndex="身份证" align="center" />
          <Table.Column title="识别时间" dataIndex="识别时间" align="center" />
          <Table.Column
            title="类型"
            dataIndex="类型"
            align="center"
            render={(category) => {
              const colors = {
                合格: "#85F391",
                管理员: "#85F391",
                请核查门禁: "#DFA03A",
                "⻔禁遗漏登记": "#F7000B",
                黑名单: "#F7000B",
                请核查安标网: "#F7000B",
                无法识别: "#F7000B",
              };
              return (
                <div
                  style={{
                    color: colors[category],
                  }}
                >
                  {category}
                </div>
              );
            }}
          />
        </Table>
      </GridView.Cell>
    </GridView>
  );
}

export default Inspection;
