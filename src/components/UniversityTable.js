import React from "react";
import { Table,  } from "antd";
import { Link } from "react-router-dom";

const UniversityTable = ({ universities, currentCountry }) => {
  const columns = [
    {
      title: "University Name",
      dataIndex: "name",
      key: "name",
      render: (name) => (
        <Link to={`/country/${currentCountry}/university/${name}`}>{name}</Link>
      ),
    },
  ];

  const data = universities.map((university, index) => ({
    key: index,
    name: university.name,
  }));
  
  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default UniversityTable;
