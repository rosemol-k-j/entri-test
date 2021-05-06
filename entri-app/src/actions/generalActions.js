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

export const articleListData = (page, query) => {
  return fetch(
    "https://newsapi.org/v2/everything?q=" +
      query +
      "&apiKey=b752afffaea345d1a78e19ceb03ee6f2&page=" +
      page
  ).then((res) => res.json());

  // return Api.get(
  //   "https://gnews.io/api/v4/search?q=malayalam&lang=ml&page=3&token=850c4200eddd8380d489df548d3806df"
  // );
};
