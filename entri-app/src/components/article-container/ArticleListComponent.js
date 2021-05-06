import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { articleListData } from "../../actions/generalActions";
import InfiniteScroll from "react-infinite-scroller";
import { List, Spin, message } from "antd";
import ArticleListItem from "./ArticleListItem";

function ArticleListComponent() {
  const articleList = useSelector((state) => state.fetchArticleListReducer);
  const articlePaginate = useSelector(
    (state) => state.fetchArticleListPaginateReducer
  );

  const [loading, setLoading] = useState(false);
  const [hasMore, sethasMore] = useState(true);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  function handleInfiniteOnLoad() {
    setLoading(true);
    console.log("here");
    setPage(page + 1);
    if (page > 5) {
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
        let data = await articleListData(1);
        dispatch(
          Object.assign(
            {},
            { type: "GET_ARTICLE_LIST_SUCCESS" },
            { articles: data.articles }
          )
        );
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

  useEffect(() => {
    async function articleListFuncPaginate() {
      try {
        dispatch(
          Object.assign({}, { type: "GET_ARTICLE_LIST_PAGINATE_LOADING" })
        );
        let data = await articleListData(page);
        let articleListUpdated = [...articleList.data, ...data.articles];
        dispatch(
          Object.assign(
            {},
            { type: "GET_ARTICLE_LIST_PAGINATE_SUCCESS" },
            { articles: articleListUpdated }
          )
        );
        dispatch(
          Object.assign(
            {},
            { type: "GET_ARTICLE_LIST_SUCCESS" },
            { articles: articleListUpdated }
          )
        );
        setLoading(false);
      } catch (err) {
        dispatch(
          Object.assign({}, { type: "GET_ARTICLE_LIST_PAGINATE_FAILED" })
        );
      }
    }
    articleListFuncPaginate();
  }, [page, articleList.data, dispatch]);

  console.log(page);
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
      ></List>
      {articleList.loading ||
        (articlePaginate.loading && (
          <div>
            <Spin className="fullWidth" size="large" />
          </div>
        ))}
    </InfiniteScroll>
  );
}

export default ArticleListComponent;
