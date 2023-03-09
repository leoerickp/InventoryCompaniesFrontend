import { Col, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import { Logo } from "../components/Logo";
import { MainMenu } from "../components/MainMenu";
import { UserMenu } from "../components/UserMenu";

export const HeaderBar = () => {
  return (
    <Header>
      <Row>
        <Col span={6}>
          <Logo />
        </Col>
        <Col span={12}>
          <MainMenu />
        </Col>
        <Col span={6}>
          <UserMenu />
        </Col>
      </Row>
    </Header>
  );
};
