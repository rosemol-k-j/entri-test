import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Select } from "antd";
import { languages } from "../Header/globalConst";

function HeaderComponent() {
  const [languageList, setLanguageList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function languageListFun() {
      try {
        var list = languages.map((x) => (
          <Select.Option key={x.value} value={x.value}>
            {x.label}
          </Select.Option>
        ));
        setLanguageList(list);
      } catch (err) {
        console.log(err);
      }
    }
    languageListFun();
  }, [dispatch]);
  console.log(languageList);

  return (
    <div>
      <Input.Search
        className="searchComponent"
        placeholder="Search term.."
        onSearch={(value) =>
          dispatch(Object.assign({}, { type: "SET_QUERY" }, { query: value }))
        }
      />
      <Select
        className="languageSelector"
        defaultValue="English"
        style={{ width: 120 }}
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
