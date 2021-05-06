import React from "react";
import { Layout } from "antd";
import ArticleListComponent from "../article-container/ArticleListComponent";
const { Header, Sider, Content } = Layout;

function Container() {
  var x = document.getElementById("demo");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  }

  return (
    <Layout className="homeComponent">
      <Header className="headerComponent">Header</Header>
      <Layout className="articleContent">
        <Content className="articleListComponent">
          <ArticleListComponent />
        </Content>
        <Sider className="weatherComponent">Sider</Sider>
      </Layout>
    </Layout>
  );
}

export default Container;
