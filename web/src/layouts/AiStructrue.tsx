import { Layout } from "antd";
import React, { CSSProperties } from "react";
import "./AiStructrue.scss";
const { Header, Content, Footer, Sider } = Layout;
const AiStructrue: React.FunctionComponent<Props> = (props: any) => {
  return (
    <Layout className={"layout"}>
      <Header className={"header"}>
        <h1 className={"headerTitle"}>AI speak system</h1>
      </Header>
      <Content className="content expand" style={{}}>
        {props.children}
      </Content>
      <Footer className="Footer">
        <h3 className={"headerContent"}>copyright by:DY ZBY</h3>
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
