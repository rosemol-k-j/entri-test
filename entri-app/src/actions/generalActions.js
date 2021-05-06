// import axios from "axios";

// let Api = axios.create({
//   timeout: 100000,
//   withCredentials: false,
//   headers: {
//     crossDomian: true,
//     // "Access-Control-Allow-Origin": "*",
//   },
// });
export const currentWeather = (latitude, longitude) => {
  return fetch(
    "http://api.openweathermap.org/data/2.5/weather?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&APPID=611553464eeadcfaaf8ec9a5fe573558"
  ).then((res) => res.json());

  // return Api.get(
  //   "http://api.openweathermap.org/data/2.5/weather?q=" +
  //     place +
  //     "&APPID=611553464eeadcfaaf8ec9a5fe573558"
  // );
};

export const articleListData = (page, query, language) => {
  return fetch(
    "https://gnews.io/api/v4/search?q=" +
      query +
      "&token=67670652a58fe94a786a9190be1bd0cb&page=" +
      page +
      "&lang=" +
      language
  ).then((res) => res.json());

  // return Api.get(
  //   "https://gnews.io/api/v4/search?q=malayalam&lang=ml&page=3&token=850c4200eddd8380d489df548d3806df"
  // );
};

export const filterURL = (data) => {
  var str = [];
  let k;
  for (var p in data.data) {
    if (data.data[p].length > 0) {
      k = p;

      str.push(encodeURIComponent(k) + "=" + encodeURIComponent(data.data[p]));
    }
  }
  let url = str.join("&");
  window.history.pushState("", "", "/?" + url);
  return str.join("&");
};
