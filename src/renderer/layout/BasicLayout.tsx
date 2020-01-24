import React, { useState } from "react";
import { Layout } from "antd";
import "./BasicLayout.less";

const { Header, Footer, Sider, Content } = Layout;
function BasicLayout() {
  const [isMove, SetIsMove] = useState(false);
  const mouseDown = () => {
    SetIsMove(!isMove);
    console.log("mousedown");
    console.log(`isMove =${isMove}`);
  };
  return (
    <div>
      <Layout className="basic-layout">
        <Sider>Sider</Sider>
        <Layout>
          <Header onMouseDown={mouseDown} className="basic-layout-header">
            头部
            {`isMove =${isMove}`}
          </Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}
export default BasicLayout;
