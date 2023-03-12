import { Button, Popconfirm } from "antd";
import Input from "antd/es/input/Input";
import { ColumnsType } from "antd/es/table";
import { Tables } from "components/table/Tables";
import { Data } from "interface/data";
import { getDataProxy } from "proxy/data";
import React, { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

const Main: React.FC = () => {
  const [dataTable, setDataTable] = useState([]);
  const [search, setSearch] = useState("");

  const getDataTable = async () => {
    const res = await getDataProxy();
    setDataTable(res.data.data);
  };

  useEffect(() => {
    getDataTable();
  }, []);

  const handleSearch = () => {
    return dataTable.filter((data: Data) => {
      return (
        data.name.toLowerCase().includes(search) || data.tel.includes(search)
      );
    });
  };

  const columns: ColumnsType<any> = [
    {
      title: "Name",
      dataIndex: "name",
      align: "center",
      render: (text: string, record: Data) => <span>{record.name}</span>,
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      align: "center",
      render: (text: string, record: Data) => <span>{record.birthday}</span>,
    },
    {
      title: "Tel",
      dataIndex: "tel",
      align: "center",
      render: (text: string, record: Data) => <span>{record.tel}</span>,
    },
    {
      title: "Created Date",
      dataIndex: "created_date",
      align: "center",
      render: (text: string, record: Data) => (
        <span>{record.created_date}</span>
      ),
    },
    {
      title: "Report",
      dataIndex: "report",
      align: "center",
      render: (text: string, record: Data) => {
        return <Button type="default">Report</Button>;
      },
    },
    {
      title: "Delete",
      dataIndex: "delete",
      align: "center",
      render: (text: string, record: Data) => {
        return (
          <Popconfirm
            placement="top"
            title="Do you want to delete this record"
            okText="Yes"
            cancelText="No"
          >
            <Button type="default" danger>
              Delete
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

  return (
    <div className="home-page-body">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="home-page-input"
        placeholder="Please enter name to search..."
        suffix={<SearchOutlined />}
        style={{ marginBottom: "20px" }}
      />
      <Tables
        rowKey="created_date"
        columns={columns}
        tableData={handleSearch()}
      />
    </div>
  );
};

export default Main;
