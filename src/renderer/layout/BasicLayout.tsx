import React, { useState } from "react";
import { Layout, Button } from "antd";

import "./BasicLayout.less";
import MusicHeader from "./components/Header";
import RenderView from "./components/RenderView";
import SiderMenu from "./components/SiderMenu";
import { getApi } from "../api/test";

const { Header, Footer, Sider, Content } = Layout;
function BasicLayout() {
  const [isMove] = useState(false);
  async function test() {
    const res = await getApi();
  }
  return (
    <div>
      <Layout className="basic-layout">
        <Header className="basic-layout-header">
          <MusicHeader />
          {`isMove =${isMove}`}
        </Header>
        <Layout>
          <Sider className="basic-layout-sider">
            <SiderMenu />
          </Sider>
          <Content className="basic-layout-content">
            <RenderView />
          </Content>
        </Layout>
        <Footer className="basic-layout-footer">
          <Button onClick={test}>按钮</Button>
        </Footer>
      </Layout>
    </div>
  );
}
export default BasicLayout;
