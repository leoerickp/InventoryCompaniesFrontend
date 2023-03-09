import { Avatar, Space } from "antd";
import fotoLeo from "../../assets/img/Leo_FondoTransp.png";
export const Logo = () => {
  return (
    <Space direction="horizontal" size={0} style={{ display: "flex" }}>
      <Avatar src={fotoLeo} size="large" />
    </Space>
  );
};
