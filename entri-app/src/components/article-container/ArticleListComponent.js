import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { articleListData } from "../../actions/generalActions";
import InfiniteScroll from "react-infinite-scroller";
import { List, Spin, message } from "antd";
import ArticleListItem from "./ArticleListItem";

function ArticleListComponent() {
  const articleList = useSelector((state) => state.fetchArticleListReducer);
  const query = useSelector((state) => state.setQueryReducer);
  const language = useSelector((state) => state.setLanguageReducer);
  const articlePaginate = useSelector(
    (state) => state.fetchArticleListPaginateReducer
  );

  const [loading, setLoading] = useState(false);
  const [hasMore, sethasMore] = useState(true);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  //To handle the scroll
  function handleInfiniteOnLoad() {
    setLoading(true);
    setPage(page + 1);
    articleListFuncPaginate();
    if (page > 5) {
      //for a free account user is only allowed to paginate till page 5
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
        let data = await articleListData(1, query.query, language.language);
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
  }, [query, language, dispatch]);

  //Function for paginate
  async function articleListFuncPaginate() {
    try {
      dispatch(
        Object.assign({}, { type: "GET_ARTICLE_LIST_PAGINATE_LOADING" })
      );
      let data = await articleListData(page, query.query, language.language);
      //concatinating the previous list and the paginated list
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
      dispatch(Object.assign({}, { type: "GET_ARTICLE_LIST_PAGINATE_FAILED" }));
    }
  }

  return (
    <>
      {articleList.loading ? (
        <div>
          <Spin className="fullWidth" size="large" />
        </div>
      ) : (
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
        </InfiniteScroll>
      )}
      {articlePaginate.loading && (
        <div>
          <Spin className="fullWidth" size="large" />
        </div>
      )}
    </>
  );
}

export default ArticleListComponent;
