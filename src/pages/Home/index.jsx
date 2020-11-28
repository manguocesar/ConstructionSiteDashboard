import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Table, message, Modal } from "antd";
import { ListSitesContext } from "../../contexts/ListSitesContext";
import lockr from "lockr";

//style
import "./index.css";

//components
import Loading from "../../components/Loading";
import GridView from "../../components/GridView";
import ListofSites from "./components/ListOfSites";
import SiteLocation from "./components/SiteLocation";
import ComponentTopLeft from "./components/ComponentTopLeft";
import ComponentTopRight from "./components/ComponentTopRight";
import PinMessage from "./components/PinMessage";

const numberOfWorkersUrl =
  "http://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%B7%A5%E4%BA%BA%E6%95%B0%E9%87%8F.json";

const homepageDataUrl =
  "http://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E4%B8%BB%E9%A1%B5%E6%8A%A5%E8%A1%A8.json";

// const accessControlUrl =
// "http://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E7%BE%BF%E4%BA%91%E9%97%A8%E7%A6%81%E4%BF%A1%E6%81%AF.json";

export default function Home() {
  const [data, setData] = useState({
    // numberOfWorkersData: null,
    homepageData: {
      合信息: {
        安标网用工数量: "",
      },
    },
    loading: true,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const { currentProjectName } = useContext(ListSitesContext);

  useEffect(() => {
    const pinSet = lockr.get("pin_set");
    console.warn('pinSet', pinSet)
    setModalVisible(!pinSet);
  }, [0]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [
          // { data: numberOfWorkersData },
          { data: homepageData },
        ] = await Promise.all([
          // axios.get(numberOfWorkersUrl),
          axios.get(homepageDataUrl),
        ]);
        setData({
          // numberOfWorkersData,
          homepageData,
          loading: false,
        });
      } catch (error) {
        message.error("加载失败");
      }
    }
    fetchData();
  }, [0]);

  return (
    <GridView>
      <GridView.Cell
        noBodyStyle={true}
        title={currentProjectName}
        left="0"
        top="0"
        width="calc(66% - 8px)"
        height="calc(55% - 8px)"
      >
        {!data.loading ? (
          <div className="container_top_left">
            <div className="container_top_left_column_1">
              <GridView.Body
                className="container_top_left_column_1_row_1"
                title="综合信息"
              >
                <Table
                  size="small"
                  pagination={false}
                  dataSource={[
                    {
                      name: "安标网用工数量",
                      value: data.homepageData.合信息.安标网用工数量,
                    },
                    {
                      name: "羿云门禁人脸数量",
                      value: data.homepageData.合信息.羿云门禁人脸数量,
                    },
                    {
                      name: "今日巡检次数",
                      value: data.homepageData.合信息.今日巡检次数,
                    },
                    {
                      name: "今日巡检异常事件数量",
                      value: data.homepageData.合信息.今日巡检异常事件数量,
                    },
                  ]}
                  scroll={{ y: "calc(46vh - 256px)" }}
                  loading={data.loading}
                  showHeader={false}
                >
                  <Table.Column
                    dataIndex="name"
                    align="left"
                    className="table-cell-very-small"
                  />
                  <Table.Column
                    className="table-column-color-primary table-cell-very-small"
                    dataIndex="value"
                    align="right"
                    width={50}
                  />
                </Table>
              </GridView.Body>
              <GridView.Body
                className="container_top_left_column_1_row_2"
                title="地域分析"
              >
                <Table
                  size="small"
                  pagination={false}
                  dataSource={[
                    {
                      name: "湖北竹山县用工报警",
                      value: data.homepageData.低于分析.湖北竹山县用工报警,
                    },
                  ]}
                  loading={data.loading}
                  showHeader={false}
                >
                  <Table.Column dataIndex="name" />
                  <Table.Column
                    className="table-column-color-primary"
                    dataIndex="value"
                    align="center"
                  />
                </Table>
              </GridView.Body>
            </div>
            <div className="container_top_left_column_2">
              <GridView.Body title="年龄分析">
                <Table
                  className="age_table"
                  size="small"
                  pagination={false}
                  dataSource={[
                    {
                      cat1: "男性普通工种:",
                      cat2: "55周岁以下用工人数",
                      value:
                        data.homepageData.年龄分析.男性普工[
                          "55周岁以下用工人数"
                        ],
                    },
                    {
                      cat1: "",
                      cat2: "55-60周岁用工人数",
                      value:
                        data.homepageData.年龄分析.男性普工[
                          "55-60周岁用工人数"
                        ],
                    },
                    {
                      cat1: "",
                      cat2: "60周岁以上超龄用工人数",
                      value:
                        data.homepageData.年龄分析.男性普工[
                          "60周岁以上超龄用工人数"
                        ],
                    },
                    {
                      cat1: "男性特殊工种:",
                      cat2: "55周岁以上超龄用工人数",
                      value:
                        data.homepageData.年龄分析.男性特殊工种[
                          "55周岁以上超龄用工人数"
                        ],
                    },
                    {
                      cat1: "女性普通工种:",
                      cat2: "45周岁以下用工人数",
                      value:
                        data.homepageData.年龄分析.女性普工[
                          "45周岁以下用工人数"
                        ],
                    },
                    {
                      cat1: "",
                      cat2: "45-50周岁用工人数",
                      value:
                        data.homepageData.年龄分析.女性普工[
                          "45-50周岁用工人数"
                        ],
                    },
                    {
                      cat1: "",
                      cat2: "50周岁以上超龄用工人数",
                      value:
                        data.homepageData.年龄分析.女性普工[
                          "50周岁以上超龄用工人数"
                        ],
                    },
                    {
                      cat1: "女性特殊工种:",
                      cat2: "45周岁以上超龄用工人数",
                      value:
                        data.homepageData.年龄分析.女性特殊工种[
                          "45周岁以上超龄用工人数"
                        ],
                    },
                  ]}
                  scroll={{ y: "calc(60vh - 256px)" }}
                  loading={data.loading}
                >
                  <Table.Column
                    title="工种"
                    dataIndex="cat1"
                    className="table-cell-very-small"
                    width={160}
                    rowClassName={() => {
                      return "table-column-color-primary";
                    }}
                  />
                  <Table.Column
                    title="分类"
                    dataIndex="cat2"
                    className="table-cell-very-small"
                  />
                  <Table.Column
                    title="安标网"
                    className="table-column-color-primary table-cell-very-small"
                    dataIndex="value"
                    align="center"
                    render={(val) => {
                      return val[0];
                    }}
                    width={80}
                  />
                  <Table.Column
                    title="门禁"
                    className="table-column-color-primary table-cell-very-small"
                    dataIndex="value"
                    render={(val) => {
                      return val[1];
                    }}
                    align="center"
                    width={60}
                  />
                </Table>
              </GridView.Body>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </GridView.Cell>

      <GridView.Cell
        noBodyStyle={true}
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>总体指标</div>
          </div>
        }
        right="0"
        top="0"
        width="calc(34% - 8px)"
        height="calc(55% - 8px)"
      >
        {!!data ? (
          <ComponentTopRight
            numberOfWorkers={data.homepageData.合信息.安标网用工数量}
          />
        ) : (
          <Loading />
        )}
      </GridView.Cell>

      <GridView.Cell
        noBodyStyle={true}
        left="0"
        bottom="0"
        width="calc(66% - 8px)"
        height="calc(45% - 8px)"
      >
        {!!data ? <ListofSites /> : <Loading />}
      </GridView.Cell>

      <GridView.Cell
        noBodyStyle={true}
        title="工地位置"
        right="0"
        bottom="0"
        width="calc(34% - 8px)"
        height="calc(45% - 8px)"
      >
        {!!data ? <SiteLocation /> : <Loading />}
      </GridView.Cell>

      <Modal visible={modalVisible} footer={null} width="40%">
        <PinMessage
          onClose={() => {
            setModalVisible(false);
          }}
        />
      </Modal>
    </GridView>
  );
}
