import React, { useState } from "react";
import { Layout } from "antd";
import "./BasicLayout.less";
import MusicHeader from "./components/Header";
import RenderView from "./components/RenderView";
import SiderMenu from "./components/SiderMenu";

const { Header, Footer, Sider, Content } = Layout;
function BasicLayout() {
  const [isMove] = useState(false);
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
        <Footer className="basic-layout-footer">Footer</Footer>
      </Layout>
    </div>
  );
}
export default BasicLayout;
