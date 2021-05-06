import { combineReducers } from "redux";
import {
  fetchArticleListReducer,
  fetchArticleListPaginateReducer,
  fetchWeatherReducer,
  setQueryReducer,
  setLanguageReducer,
} from "./generalReducer";
export default combineReducers({
  fetchArticleListReducer,
  fetchArticleListPaginateReducer,
  fetchWeatherReducer,
  setQueryReducer,
  setLanguageReducer,
});
