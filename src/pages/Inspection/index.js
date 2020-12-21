import React, { useState, useEffect, useContext } from "react";
import { Table, Divider, Button, message } from "antd";
import axios from "axios";
import ReactEcharts from "echarts-for-react";
import moment from "moment";
import lockr from "lockr";
import downloadExcelFile, {
  convertDateFilename,
} from "../../utils/downloadExcelFile";
import "./Inspection.css";

//components
import GridView from "../../components/GridView";

//context
import { TimeContext } from "../../contexts/TimeContext";

const generate30DaysArray = () => {
  return [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
};

function Inspection() {
  const { chinaDate } = useContext(TimeContext);
  const [data, setData] = useState({
    loading: true,
    comparisonResults: [],
    inspectionData: [],
  });
  const [inspectionStats, setInspectionStats] = useState({
    管理员: [],
    无法识别: [],
    请核查安标网: [],
    请核查门禁: [],
    合格: [],
  });
  const [patrolData, setPatrolData] = useState({
    loading: false,
    items: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const { id: siteId } = lockr.get("current_tenant");
        const comparisonResultsUrl = `https://api.consim.cn/site/${siteId}/data/comparison-results.json`;
        const inspectionRecordUrl = `https://api.consim.cn/site/${siteId}/data/daily-inspections.json`;
        const [
          { data: comparisonResults },
          { data: inspectionData },
        ] = await Promise.all([
          axios.get(comparisonResultsUrl),
          axios.get(inspectionRecordUrl),
        ]);

        setData({
          comparisonResults,
          inspectionData: inspectionData.map((x, i) => {
            return {
              ...x,
              index: i,
            };
          }),
          loading: false,
        });
      } catch (error) {
        message.error("加载失败", 10);
      }
    }

    const fetchInspectionStats = async () => {
      try {
        const { id: siteId } = lockr.get("current_tenant");
        const inspectionStatsUrl = `https://api.consim.cn/site/${siteId}/inspection-logs?start=${moment()
          .add(-30, "days")
          .format("YYYY-MM-DD HH:mm")}`;
        const [{ data: inspectionStatsRaw }] = await Promise.all([
          axios.get(inspectionStatsUrl),
        ]);

        const inspectionStats = {
          管理员: generate30DaysArray(),
          请核查门禁: generate30DaysArray(),
          合格: generate30DaysArray(),
          无法识别: generate30DaysArray(),
          请核查安标网: generate30DaysArray(),
        };

        inspectionStatsRaw.forEach((record) => {
          if (Object.keys(inspectionStats).includes(record.comment)) {
            const daysFromToday = moment().diff(
              moment(record.datetime),
              "days"
            );
            // console.warn('daysFromToday', daysFromToday, record.datetime)
            if (daysFromToday >= inspectionStats[record.comment].length) {
              return;
            }
            if (daysFromToday < 0) {
              return;
            }
            try {
              inspectionStats[record.comment][daysFromToday]++;
            } catch (error) {
              console.warn("error", error);
            }
          }
        });
        setInspectionStats(inspectionStats);
      } catch (error) {}
    };

    fetchData();
    fetchInspectionStats();
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

  const inspectionData = data.inspectionData.map((item) => {
    return {
      ...item,
      time:
        moment(item.min).format("HH:mm") +
        " - " +
        moment(item.max).format("HH:mm"),
      date: moment(item.min).format("YYYY-MM-DD"),
    };
  });

  const fetchPatrolData = async (inspection) => {
    setPatrolData({
      items: [],
      loading: true,
      selectedIndex: inspection.index,
    });

    try {
      const { id: siteId } = lockr.get("current_tenant");
      const { device_id, max: end, min: start } = inspection;
      const { data } = await axios.get(
        `https://api.consim.cn/site/${siteId}/inspection-logs?start=${start}&end=${end}&short_device_id=${device_id}`
      );
      setPatrolData({
        items: data,
        loading: false,
        selectedIndex: inspection.index,
      });
    } catch (error) {
      message.error("加载失败");
      setPatrolData({
        items: [],
        loading: false,
        selectedIndex: null,
      });
    }
  };

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
        width="calc(50% - 8px)"
        height="calc(52% - 8px)"
      >
        <Table
          size="small"
          onRow={null}
          bordered={false}
          pagination={false}
          scroll={{ y: "calc(52vh - 256px)" }}
          dataSource={comparisonResults}
          loading={data.loading}
          rowKey={(record) =>
            record.recog_tag + record.gate_status + record.gov_site_status
          }
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
        </Table>
      </GridView.Cell>

      <GridView.Cell
        titleAlignCenter={true}
        title="近30日人员变化趋势"
        right="0"
        top="0"
        width="calc(50% - 8px)"
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
                "请核查门禁",
                "请核查安标网",
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
              data: [
                "-30天",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "-20天",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "-10天",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "0天",
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
              // max: "200",
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
                data: [].concat(inspectionStats.合格).reverse(),
              },
              {
                name: "请核查门禁",
                type: "line",
                label: "two",
                smooth: true,
                data: [].concat(inspectionStats.请核查门禁).reverse(),
              },
              {
                name: "请核查安标网",
                type: "line",
                label: "three",
                smooth: true,
                data: [].concat(inspectionStats.请核查安标网).reverse(),
              },
              {
                name: "无法识别",
                type: "line",
                label: "four",
                smooth: true,
                data: [].concat(inspectionStats.无法识别).reverse(),
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
          rowKey={(record) => record.date + record.time + record.device_id}
          dataSource={inspectionData}
          scroll={{ y: "calc(53vh - 256px)" }}
          loading={data.loading}
          rowClassName={(record) =>
            patrolData.selectedIndex === record.index
              ? "inspection-logs-row inspection-logs-row-selected"
              : "inspection-logs-row"
          }
          onRow={(row) => {
            return {
              onClick: () => {
                // console.warn("row", row);
                fetchPatrolData(row);
              },
            };
          }}
        >
          <Table.Column title="日期" dataIndex="date" align="center" />
          <Table.Column title="时间" dataIndex="time" align="center" />
          <Table.Column title="设备" dataIndex="device_id" align="center" />
        </Table>
      </GridView.Cell>

      <GridView.Cell
        title="巡检日志"
        titleAlignCenter={true}
        right="0"
        bottom="0"
        width="calc(64% - 8px)"
        height="calc(48% - 8px)"
      >
        <Table
          size="small"
          dataSource={patrolData.items}
          scroll={{ y: "calc(53vh - 256px)" }}
          loading={patrolData.loading}
          pagination={false}
        >
          <Table.Column title="设备" dataIndex="device_id" align="center" />
          <Table.Column title="姓名" dataIndex="name" align="center" />
          <Table.Column
            title="身份证"
            dataIndex="id_card_number"
            align="center"
            render={(val) => {
              if (!val | (val === "")) {
                return "";
              }
              return val.slice(0, 3) + "******" + val.slice(val.length - 4);
            }}
          />
          <Table.Column
            title="识别时间"
            dataIndex="datetime"
            render={(val) => {
              return moment(val).format("YYYY年MM月DD日HH:mm");
            }}
            align="center"
          />
          <Table.Column
            title="类型"
            dataIndex="comment"
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
          <Table.Column title="注释" dataIndex="sub_comment" align="center" />
        </Table>
      </GridView.Cell>
    </GridView>
  );
}

export default Inspection;
