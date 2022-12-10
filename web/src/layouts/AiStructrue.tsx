import { Layout } from "antd";
import React, { CSSProperties } from "react";
const { Header, Content, Footer, Sider } = Layout;
const AiStructrue: React.FunctionComponent<Props> = (props: any) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className={"header"} style={{ backgroundColor: "blanchedalmond" }}>
        <h1 style={{ textAlign: "center", lineHeight: "100% " }}> AI speak system</h1>
      </Header>
      <Content className="content expand" style={{}}>
        {props.children}
      </Content>
      <Footer style={{ backgroundColor: "blanchedalmond", height: "10vh" }}>
        <h3 style={{ textAlign: "center", lineHeight: "100% " }}>copyright by:DY ZBY</h3>
      </Footer>
    </Layout>
  );
};
interface Props {
  style?: CSSProperties;
  className?: string;
  children: React.ReactNode;
}
export default AiStructrue;
