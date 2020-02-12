import React, { useState } from "react";
import { Layout, Button } from "antd";

import "./BasicLayout.less";
import { getApi } from "api/test";
import MusicHeader from "./components/Header";
import RenderView from "./components/RenderView";
import SiderMenu from "./components/SiderMenu";
import { render } from "../router";

const { Header, Footer, Sider, Content } = Layout;
function BasicLayout() {
  const [isMove] = useState(false);
  async function test() {
    // s const abc = await getApi(123);
    console.log(render);
  }
  return (
    <div>
      <Layout className="basic-layout">
        <Header className="basic-layout-header">
          <MusicHeader />
          {`isMove =${isMove}`}
        </Header>
        <Layout>
          <Sider className="basic-layout-sider" width={210}>
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
