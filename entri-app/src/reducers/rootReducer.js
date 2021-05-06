import { combineReducers } from "redux";
import {
  fetchArticleListReducer,
  fetchArticleListPaginateReducer,
  fetchWeatherReducer,
} from "./generalReducer";
export default combineReducers({
  fetchArticleListReducer,
  fetchArticleListPaginateReducer,
  fetchWeatherReducer,
});
