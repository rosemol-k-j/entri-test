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

export const fetchWeatherReducer = (
  state = { status: true, loading: false, data: [] },
  action
) => {
  switch (action.type) {
    case "GET_WEATHER_SUCCESS":
      return {
        status: true,
        data: action,
        loading: false,
      };
    case "GET_WEATHER_LOADING":
      return {
        status: false,
        data: [],
        loading: true,
      };
    case "GET_WEATHER_FAILED":
      return {
        status: false,
        data: [],
        loading: false,
      };
    default:
      return state;
  }
};

export const setQueryReducer = (state = { query: "apple" }, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return {
        query: action.query,
      };
    default:
      return state;
  }
};

export const setLanguageReducer = (state = { language: "en" }, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        language: action.language,
      };
    default:
      return state;
  }
};
