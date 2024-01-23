import React from "react";
import "./WeatherData.css";

// interface Props {
//     weatherData:
// }
// const place = data.name;
// const temperature = data.main.temp;
// const feels = data.main.feels_like;
// const desc = data.weather[0].description;
// const humid = data.main.humidity
// const maxTemp = data.main.temp_max;

export const WeatherData = ({ data, unit }) => {
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <div className="weatherInfoContainer">
      <section className="weatherInfo">
        <section className="cardTop">
          <span className="weatherCondition">
            {" "}
            {data.weather[0].description}{" "}
          </span>
          <h1 className="city"> {data.name} </h1>
        </section>
        <div className="bottom-cards">
          <section className="cardLeft">
          {unit === "imperial" ? (<span className="temp"> Temperature: {data.main.temp} °F </span>): (<span className="temp"> Temperature: {data.main.temp} °C </span>) }

            <img className="weather-icon" src={iconurl} alt="" />
          </section>
          <div className="border"> </div>
          <section className="cardRight">
          {unit === "imperial" ? (<span className="feelsLike"> Feels Like: {data.main.feels_like} °F </span>): (<span className="feelsLike"> Feels Like: {data.main.feels_like} °C </span>) }
            <span className="tempMax">
              {" "}
              Wind Speed {data.wind.speed} miles/hr{" "}
            </span>
            <span className="humidty"> Humidity: {data.main.humidity} % </span>
          </section>
        </div>
      </section>
    </div>
  );
};
