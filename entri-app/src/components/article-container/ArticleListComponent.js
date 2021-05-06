import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { articleListData } from "../../actions/generalActions";
import InfiniteScroll from "react-infinite-scroller";
import { List, Spin, message } from "antd";
import ArticleListItem from "./ArticleListItem";

function ArticleListComponent() {
  const articleList = useSelector((state) => state.fetchArticleListReducer);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, sethasMore] = useState(true);

  const dispatch = useDispatch();

  function handleInfiniteOnLoad() {
    setLoading(true);
    if (data.length > 10) {
      message.warning("Infinite List loaded all");
      sethasMore(false);
      setLoading(false);
      return;
    }
  }

  useEffect(() => {
    async function articleListFunc() {
      try {
        dispatch(
          Object.assign(
            {},
            { type: "GET_ARTICLE_LIST_LOADING" },
            { status: false, loading: true, data: false }
          )
        );
        let data = await articleListData();
        dispatch(Object.assign({}, { type: "GET_ARTICLE_LIST_SUCCESS" }, data));
        setData(data.data);
      } catch (err) {
        dispatch(
          Object.assign(
            {},
            { type: "GET_ARTICLE_LIST_FAILED" },
            { status: false, loading: false, data: false }
          )
        );
      }
    }
    articleListFunc();
  }, [dispatch]);

  console.log(articleList);
  console.log(hasMore, loading);

  return (
    <InfiniteScroll
      initialLoad={false}
      pageStart={0}
      loadMore={handleInfiniteOnLoad}
      hasMore={!loading && hasMore}
      useWindow={false}
    >
      <List
        dataSource={articleList.data}
        renderItem={(item, index) => (
          <ArticleListItem article={item} index={index} />
        )}
      >
        {articleList.loading && (
          <div>
            <Spin />
          </div>
        )}
      </List>
    </InfiniteScroll>
  );
}

export default ArticleListComponent;
