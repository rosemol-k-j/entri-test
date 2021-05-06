import React from "react";
import { Layout } from "antd";
import ArticleListComponent from "../article-container/ArticleListComponent";
import WeatherComponent from "../weather-container/WeatherComponent";
import HeaderComponent from "../Header/HeaderComponent";
const { Header, Sider, Content } = Layout;

function Container() {
  return (
    <Layout className="homeComponent">
      <Header className="headerComponent">
        <HeaderComponent />
      </Header>
      <Layout className="articleContent">
        <Content className="articleListComponent">
          <ArticleListComponent />
        </Content>
        <Sider className="weatherComponent">
          <WeatherComponent />
        </Sider>
      </Layout>
    </Layout>
  );
}

export default Container;
