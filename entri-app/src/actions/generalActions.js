import axios from "axios";

let Api = axios.create({
  timeout: 100000,
  withCredentials: false,
  headers: {
    crossDomian: true,
  },
});
export const currentWeather = (place) => {
  return Api.get(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      place +
      "&APPID=611553464eeadcfaaf8ec9a5fe573558"
  );
};

export const articleList = (query) => {
  return Api.get(
    "https://newsapi.org/v2/everything?apiKey=b752afffaea345d1a78e19ceb03ee6f2" +
      query
  );
};
