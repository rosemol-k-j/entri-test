import { combineReducers } from "redux";
import {
  fetchArticleListReducer,
  fetchArticleListPaginateReducer,
  fetchWeatherReducer,
  setQueryReducer,
} from "./generalReducer";
export default combineReducers({
  fetchArticleListReducer,
  fetchArticleListPaginateReducer,
  fetchWeatherReducer,
  setQueryReducer,
});
