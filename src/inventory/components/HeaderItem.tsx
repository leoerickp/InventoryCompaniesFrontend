import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

export const HeaderItem = () => {
  const navigate = useNavigate();
  const { NIT } = useParams();
  const { dataSource } = useSelector((state: any) => state.companies);
  const [company, setCompany] = useState(
    NIT ? dataSource.find((data: any) => data.NIT === NIT) : undefined
  );
  const returnBack = () => {
    navigate(-1);
  };
  return (
    <Space
      direction="horizontal"
      align="center"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Title level={2}>Items of {company.companyName}</Title>
      <Button
        icon={<ArrowLeftOutlined />}
        type="primary"
        shape="circle"
        onClick={returnBack}
      />
    </Space>
  );
};
