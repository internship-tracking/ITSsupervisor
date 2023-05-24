import SupervisorNavbar from "../../components/navbar/SupervisorNavbar";
import { Table} from "antd";
import { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Companies = () => {
   const [dataSource] = useState([
    {
      id: 1,
      name: "Software",
      number: 99,
      type: "Compulsory",
    },
    {
      id: 2,
      name: "Hardware",
      number: 99,
      type: "Compulsory",
    },
    {
      id: 3,
      name: "DevOps",
      number: 99,
      type: "Compulsory",
    },
    {
      id: 4,
      name: "Data Science",
      number: 99,
      type: "Compulsory",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "Company Name",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Sector",
      dataIndex: "sector",
    },
    {
      key: "3",
      title: "Location",
      dataIndex: "location",
    },
    {
      key: "4",
      title: "Contact",
      dataIndex: "contact",
    },
    {
      key: "5",
      title: "View ",
      render: (record) => {
        return (
          <>
            <Link to={`/`}>
              <EyeOutlined style={{ color: "blue", fontSize: 18 }} />
            </Link>
          </>
        );
      },
    },
    
    
  ];
 
  return (
    <>
      <SupervisorNavbar />
      <div className="px-6 py-6">
        <h1 className="text-4xl font-bold text-center mb-4">
          Companies
        </h1>
        <Table
          className="px-20"
          columns={columns}
          dataSource={dataSource}
        ></Table>
       
      </div>
    </>
  );
};

export default Companies;
