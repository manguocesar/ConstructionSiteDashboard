import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";

//style
import "./index.css";

//components
import Loading from "../../components/Loading";
import GridView from "../../components/GridView";
import ListofSites from "./components/ListOfSites";
import SiteLocation from "./components/SiteLocation";
import ComponentTopLeft from "./components/ComponentTopLeft";
import ComponentTopRight from "./components/ComponentTopRight";

export default function Home() {
  const [data, setData] = useState(null);

  const numberOfWorkersUrl =
    "http://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E5%B7%A5%E4%BA%BA%E6%95%B0%E9%87%8F.json";

  const accessControlUrl =
    "http://atlas-sgc-workers.s3.cn-northwest-1.amazonaws.com.cn/export/%E7%BE%BF%E4%BA%91%E9%97%A8%E7%A6%81%E4%BF%A1%E6%81%AF.json";

  useEffect(() => {
    async function fetchData() {
      const { data: numberOfWorkersData } = await axios.get(numberOfWorkersUrl);
      const { data: accessControlData } = await axios.get(accessControlUrl);

      setData({
        numberOfWorkersData,
        accessControlData,
      });
    }
    fetchData();
  }, [0]);

  return (
    <GridView>
      <GridView.Cell
        noBodyStyle={true}
        title="复旦大学邯郸校区中华经济文化研究中心项目"
        left="0"
        top="0"
        width="calc(66% - 8px)"
        height="calc(50% - 8px)"
      >
        {!!data ? (
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
                    { name: "安标网在职工人数量", value: 12 },
                    { name: "羿云门禁人脸数量", value: 124 },
                    { name: "今日巡检次数", value: 124 },
                    { name: "今日巡检异常事件数量", value: 124 },
                  ]}
                  loading={data.loading}
                  showHeader={false}
                >
                  <Table.Column dataIndex="name" align="left" />
                  <Table.Column
                    className="table-column-color-primary"
                    dataIndex="value"
                    align="right"
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
                  dataSource={[{ name: "湖北竹山县用工报警", value: 0 }]}
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
                  size="small"
                  pagination={false}
                  dataSource={[
                    { cat1: "男性普通工种:", cat2: "55周岁以下用工人数", value: 111 },
                    { cat1: "", cat2: "55-60周岁用工人数", value: 111 },
                    { cat1: "", cat2: "60周岁以上超龄用工人数", value: 0 },
                    { cat1: "", cat2: "", value: "" },
                    { cat1: "男性特殊工种:", cat2: "55周岁以上超龄用工人数", value: 111 },
                    { cat1: "", cat2: "", value: "" },
                    { cat1: "女性普通工种:", cat2: "45周岁以下用工人数", value: 2 },
                    { cat1: "", cat2: "45-50周岁用工人数", value: 2 },
                    { cat1: "", cat2: "50周岁以上超龄用工人数", value: 0 },
                    { cat1: "", cat2: "", value: "" },
                    { cat1: "女性特殊工种:", cat2: "45周岁以上超龄用工人数", value: 0 },
                  ]}
                  scroll={{ y: "26vh" }}
                  loading={data.loading}
                  showHeader={false}
                >
                  <Table.Column dataIndex="cat1" align="left" className="table-cell-very-small" width={160} />
                  <Table.Column dataIndex="cat2" align="left" className="table-cell-very-small" />
                  <Table.Column
                    className="table-column-color-primary table-cell-very-small"
                    dataIndex="value"
                    align="right"
                    width={100}
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
        height="calc(50% - 8px)"
      >
        {!!data ? (
          <ComponentTopRight numberOfWorkersData={data.numberOfWorkersData} />
        ) : (
          <Loading />
        )}
      </GridView.Cell>

      <GridView.Cell
        noBodyStyle={true}
        left="0"
        bottom="0"
        width="calc(66% - 8px)"
        height="calc(50% - 8px)"
      >
        {!!data ? <ListofSites /> : <Loading />}
      </GridView.Cell>

      <GridView.Cell
        noBodyStyle={true}
        title="工地位置"
        right="0"
        bottom="0"
        width="calc(34% - 8px)"
        height="calc(50% - 8px)"
      >
        {!!data ? <SiteLocation /> : <Loading />}
      </GridView.Cell>
    </GridView>
  );
}
