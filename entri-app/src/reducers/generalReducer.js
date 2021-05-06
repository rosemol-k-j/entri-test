export const fetchArticleListReducer = (
  state = { status: true, loading: false, data: [] },
  action
) => {
  switch (action.type) {
    case "GET_ARTICLE_LIST_SUCCESS":
      return {
        status: true,
        data: action.articles,
        loading: false,
      };
    case "GET_ARTICLE_LIST_LOADING":
      return {
        status: false,
        data: [],
        loading: true,
      };
    case "GET_ARTICLE_LIST_FAILED":
      return {
        status: false,
        data: [],
        loading: false,
      };
    default:
      return state;
  }
};

export const fetchArticleListPaginateReducer = (
  state = { status: true, loading: false, data: [] },
  action
) => {
  switch (action.type) {
    case "GET_ARTICLE_LIST_PAGINATE_SUCCESS":
      return {
        status: true,
        data: action.articles,
        loading: false,
      };
    case "GET_ARTICLE_LIST_PAGINATE_LOADING":
      return {
        status: false,
        data: [],
        loading: true,
      };
    case "GET_ARTICLE_LIST_PAGINATE_FAILED":
      return {
        status: false,
        data: [],
        loading: false,
      };
    default:
      return state;
  }
};
