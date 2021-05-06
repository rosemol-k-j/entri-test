import React from "react";
import { useDispatch } from "react-redux";
import { Input } from "antd";

function HeaderComponent() {
  const dispatch = useDispatch();

  return (
    <Input.Search
      className="searchComponent"
      placeholder="Search term.."
      onSearch={(value) =>
        dispatch(Object.assign({}, { type: "SET_QUERY" }, { query: value }))
      }
    />
  );
}

export default HeaderComponent;
