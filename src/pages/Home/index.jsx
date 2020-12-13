import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Table, message, Button, Modal } from "antd";
import { ListSitesContext } from "../../contexts/ListSitesContext";
import lockr from "lockr";
import moment from 'moment';

//style
import "./index.css";

//components
import Loading from "../../components/Loading";
import GridView from "../../components/GridView";
import SiteLocation from "./components/SiteLocation";
import ComponentTopRight from "./components/ComponentTopRight";

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
  const [selectedRows, setSelectedRows] = useState([]);
  const [unauthorizedWorkers, setUnauthorizedWorkers] = useState([]);

  const { currentProjectName, selectedSite } = useContext(ListSitesContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const { id: siteId } = lockr.get("current_tenant");
        const homepageDataUrl = `https://api.consim.cn/site/${siteId}/data/frontpage-stats.json`;

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

  const handleDownload = () => {
    console.log("dowload file");
    // downloadExcelFile(convertDateFilename())
  };

  return (
    <GridView>
      <GridView.Cell
        noBodyStyle={true}
        title={<div style={{
          display: 'flex',
          flexGrow: 1,
        }}>
          <div style={{flex: 1}}>{currentProjectName}</div>
          <div style={{
            fontSize: 18,
            fontWeight: 500
          }}>{selectedSite?.location}</div>
        </div>}
        left="0"
        top="0"
        width="calc(100% - 8px)"
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
                  rowKey="name"
                  pagination={false}
                  dataSource={[
                    {
                      name: "安标网用工数量",
                      value: data.homepageData?.合信息?.安标网用工数量,
                    },
                    {
                      name: "羿云门禁人脸数量",
                      value: data.homepageData?.合信息?.羿云门禁人脸数量,
                    },
                    {
                      name: "今日巡检次数",
                      value: data.homepageData?.合信息?.今日巡检次数,
                    },
                    {
                      name: "今日巡检异常事件数量",
                      value: data.homepageData?.合信息?.今日巡检异常事件数量,
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
                className="container_top_left_column_3_row_3"
                title="地域分析"
              >
                <Table
                  size="small"
                  pagination={false}
                  rowKey="name"
                  dataSource={[
                    {
                      name: "湖北竹山县用工报警",
                      value: data.homepageData?.低于分析?.湖北竹山县用工报警,
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
                  rowKey={(row) => row.cat1 + row.cat2}
                  size="small"
                  pagination={false}
                  dataSource={[
                    {
                      cat1: "男性普通工种:",
                      cat2: "55周岁以下用工人数",
                      value:
                        data.homepageData?.年龄分析?.男性普工[
                          "55周岁以下用工人数"
                        ],
                    },
                    {
                      cat1: "",
                      cat2: "55-60周岁用工人数",
                      value:
                        data.homepageData?.年龄分析?.男性普工[
                          "55-60周岁用工人数"
                        ],
                    },
                    {
                      cat1: "",
                      cat2: "60周岁以上超龄用工人数",
                      value:
                        data.homepageData?.年龄分析?.男性普工[
                          "60周岁以上超龄用工人数"
                        ],
                    },
                    {
                      cat1: "男性特殊工种:",
                      cat2: "55周岁以上超龄用工人数",
                      value:
                        data.homepageData?.年龄分析?.男性特殊工种[
                          "55周岁以上超龄用工人数"
                        ],
                    },
                    {
                      cat1: "女性普通工种:",
                      cat2: "45周岁以下用工人数",
                      value:
                        data.homepageData?.年龄分析?.女性普工[
                          "45周岁以下用工人数"
                        ],
                    },
                    {
                      cat1: "",
                      cat2: "45-50周岁用工人数",
                      value:
                        data.homepageData?.年龄分析?.女性普工[
                          "45-50周岁用工人数"
                        ],
                    },
                    {
                      cat1: "",
                      cat2: "50周岁以上超龄用工人数",
                      value:
                        data.homepageData?.年龄分析?.女性普工[
                          "50周岁以上超龄用工人数"
                        ],
                    },
                    {
                      cat1: "女性特殊工种:",
                      cat2: "45周岁以上超龄用工人数",
                      value:
                        data.homepageData?.年龄分析?.女性特殊工种[
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
                    align="center"
                    rowClassName={() => {
                      return "table-column-color-primary";
                    }}
                  />
                  <Table.Column
                    title="分类"
                    dataIndex="cat2"
                    className="table-cell-very-small"
                    width={160}
                  />
                  <Table.Column
                    title="安标网"
                    className="table-column-color-primary table-cell-very-small"
                    dataIndex="value"
                    align="center"
                    render={(val) => {
                      if (!val) {
                        return null;
                      }
                      return val[0];
                    }}
                    width={80}
                  />
                  <Table.Column
                    title="门禁"
                    className="table-column-color-primary table-cell-very-small"
                    dataIndex="value"
                    render={(val) => {
                      if (!val) {
                        return null;
                      }
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
        left="0"
        bottom="0"
        width="calc(66% - 8px)"
        height="calc(45% - 8px)"
      >
        {/* {!!data ? <ListofSites /> : <Loading />} */}

        {!data.loading ? (
          <div className="container_top_left">
            <div className="container_top_left_column_1">
              <GridView.Body
                className="container_top_left_column_1_row_2"
                title="更新管理员白名单"
              >
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Button
                    type="primary"
                    ghost={true}
                    disabled={true}
                    onClick={() => console.log("Template download")}
                  >
                    模版下载
                  </Button>
                  <Button
                    type="primary"
                    ghost={true}
                    disabled={true}
                    onClick={() => console.log("White list import")}
                  >
                    白名单导入
                  </Button>
                </div>
              </GridView.Body>
              <GridView.Body
                className="container_top_left_column_3_row_3"
                title="门禁退工人员删除"
              >
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    type="primary"
                    ghost={true}
                    onClick={async () => {
                      const hide = message.loading("加载中");
                      try {
                        const { id: siteId } = lockr.get("current_tenant");
                        const unauthorizedWorkersUrl = `https://api.consim.cn/site/${siteId}/data/workers-delete-list.json`;
                        const { data } = await axios.get(
                          unauthorizedWorkersUrl
                        );
                        setUnauthorizedWorkers(data);
                        setModalVisible(true);
                      } catch (error) {
                        message.error("加载失败");
                      } finally {
                        hide && hide();
                      }
                    }}
                  >
                    一键删除
                  </Button>
                </div>
              </GridView.Body>
            </div>
            <div className="container_top_left_column_2">
              <GridView.Body
                title="报告下载"
                style={{ display: "flex", flexGrow: 1 }}
              >
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    paddingTop: 16,
                    paddingBottom: 16,
                    paddingRight: 48,
                    paddingLeft: 48,
                  }}
                >
                  <div className="laborInformation">
                    <div style={{ flex: 1, fontSize: 18 }}>劳务信息及台账</div>
                    <Button
                      type="primary"
                      ghost={true}
                      disabled={true}
                      onClick={() => handleDownload()}
                    >
                      下载
                    </Button>
                  </div>
                  <div className="laborInformation">
                    <div style={{ flex: 1, fontSize: 18 }}>安全巡检报告</div>
                    <Button
                      type="primary"
                      ghost={true}
                      disabled={true}
                      onClick={() => handleDownload()}
                    >
                      下载
                    </Button>
                  </div>
                  {/* TODO date filter */}
                </div>
              </GridView.Body>
            </div>
          </div>
        ) : (
          <Loading />
        )}
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

      <Modal
        visible={modalVisible}
        width="70%"
        footer={null}
        onCancel={async () => {
          setModalVisible(false);
        }}
      >
        <div className="employee-moodal-container">
          <h2>羿云门禁应删除工人列表</h2>
          <Table
            size="small"
            rowKey="身份证"
            onRow={null}
            bordered={false}
            pagination={false}
            loading={data.loading}
            scroll={{ y: "calc(60vh - 256px)" }}
            dataSource={unauthorizedWorkers}
            rowSelection={{
              selectedRowKeys: selectedRows,
              onChange: (_selectedRows) => {
                setSelectedRows(_selectedRows);
              },
            }}
          >
            <Table.Column title="姓名" dataIndex="姓名" align="center" />
            <Table.Column
              title="身份证"
              dataIndex="身份证"
              align="center"
              render={(val) => {
                return val.slice(0, 3) + "******" + val.slice(val.length - 4);
              }}
            />
            <Table.Column
              title="外包企业"
              dataIndex="分包企业"
              align="center"
            />
            <Table.Column title="工种" dataIndex="工种" align="center" />
            <Table.Column
              title="安标网退工日期"
              dataIndex="安标网退工日期"
              align="center"
              render={(val) => {
                return moment(val).format("YYYY.MM.DD");
              }}
            />
          </Table>
          <Button
            disabled={selectedRows.length === 0}
            className="employee-button"
            type="primary"
            onClick={() => {
              Modal.confirm({
                title: "确认删除",
                okText: "确认",
                cancelText: "取消",
                onOk: async () => {
                  const { id: siteId } = lockr.get("current_tenant");
                  try {
                    await axios.delete(
                      `https://api.consim.cn/site/${siteId}/workers`,
                      {
                        data: selectedRows,
                      }
                    );
                    message.success(`操作成功`);
                  } catch (error) {
                    message.error(`操作失败`);
                  }
                },
              });
            }}
          >
            一键删除
          </Button>
        </div>
      </Modal>
    </GridView>
  );
}
