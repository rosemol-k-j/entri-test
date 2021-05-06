import React from "react";
import { useDispatch } from "react-redux";
import { Layout } from "antd";
import ArticleListComponent from "../article-container/ArticleListComponent";
import WeatherComponent from "../weather-container/WeatherComponent";
import HeaderComponent from "../Header/HeaderComponent";
import QueryString from "query-string";
const { Header, Sider, Content } = Layout;

function Container() {
  const dispatch = useDispatch();
  //updating the query and language according to the url.
  if (window.location.search) {
    //QueryString will return the url in dic form (eg:{query:"apple",language:"en"} from ?query=covid&language=en)
    var initQuery = QueryString.parse(window.location.search);
    dispatch(
      Object.assign({}, { type: "SET_QUERY" }, { query: initQuery.query })
    );
    dispatch(
      Object.assign(
        {},
        { type: "SET_LANGUAGE" },
        { language: initQuery.language }
      )
    );
  }

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
