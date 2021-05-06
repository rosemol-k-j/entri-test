import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Spin, Typography } from "antd";
import { currentWeather } from "../../actions/generalActions";

function WeatherComponent() {
  const weatherData = useSelector((state) => state.fetchWeatherReducer);

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    async function currentWeatherFun() {
      try {
        dispatch(
          Object.assign(
            {},
            { type: "GET_WEATHER_LOADING" },
            { status: false, loading: true, data: false }
          )
        );
        // to get the current location of the user
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          });
        }

        let data = await currentWeather(latitude, longitude);
        dispatch(Object.assign({}, { type: "GET_WEATHER_SUCCESS" }, data));
      } catch (err) {
        dispatch(
          Object.assign(
            {},
            { type: "GET_WEATHER_FAILED" },
            { status: false, loading: false, data: false }
          )
        );
      }
    }
    currentWeatherFun();
  }, [latitude, longitude, dispatch]);

  //To convert temperature from Kelvin to Celsius
  function tempToCelsius(temp) {
    return Math.round(temp - 273.5);
  }

  return !weatherData.loading && weatherData.data.weather !== undefined ? (
    <Card title={weatherData.data.name} className="currentWeather">
      <div>
        <Typography.Text className="currentStatus">
          {weatherData.data.weather[0].main}
        </Typography.Text>
        <Typography.Title className="currentTemp">
          {tempToCelsius(weatherData.data.main.temp) + "°c"}
        </Typography.Title>
        <Typography.Text>
          {"( " +
            //
            tempToCelsius(weatherData.data.main.temp_max) +
            "°c - " +
            tempToCelsius(weatherData.data.main.temp_min) +
            "°c )"}
        </Typography.Text>
      </div>
      <div>
        <img
          className="weatherIcon"
          src={
            " http://openweathermap.org/img/wn/" +
            weatherData.data.weather[0].icon +
            "@2x.png"
          }
          alt="weatherIcon"
          width="215"
          height="235"
        />
      </div>
    </Card>
  ) : (
    <div>
      <Spin className="fullWidth" size="large" />
    </div>
  );
}

export default WeatherComponent;
