import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Select } from "antd";
import { languages } from "../Header/globalConst";

function HeaderComponent() {
  const query = useSelector((state) => state.setQueryReducer);
  const language = useSelector((state) => state.setLanguageReducer);
  const [inputQuery, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setQuery(query.query);
  }, [query.query, dispatch]);

  const languageList = languages.map((x) => (
    <Select.Option key={x.value} value={x.value}>
      {x.label}
    </Select.Option>
  ));
  return (
    <div>
      <Input.Search
        onChange={(e) => setQuery(e.target.value)}
        className="searchComponent"
        placeholder="Search term.."
        value={inputQuery}
        onSearch={(value) => {
          setQuery(value);
          dispatch(Object.assign({}, { type: "SET_QUERY" }, { query: value }));
        }}
      />
      <Select
        className="languageSelector"
        defaultValue="English"
        style={{ width: 120 }}
        value={language.language}
        onChange={(value) =>
          dispatch(
            Object.assign({}, { type: "SET_LANGUAGE" }, { language: value })
          )
        }
      >
        {languageList}
      </Select>
    </div>
  );
}

export default HeaderComponent;
