import { combineReducers } from "redux";
import { fetchArticleListReducer,fetchArticleListPaginateReducer } from "./generalReducer";
export default combineReducers({ fetchArticleListReducer ,fetchArticleListPaginateReducer});
