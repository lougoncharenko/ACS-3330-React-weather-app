import React, { useState } from "react";
import { Search } from "../Search/Search";
import { WeatherData } from "../WeatherData/WeatherData";

export const Layout = () => {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [unit, setUnit] = useState("imperial"); // Default unit is Fahrenheit

  return (
    <div style={container}>
      <Search
        input={input}
        setInput={setInput}
        setWeatherData={setWeatherData}
        unit={unit}
        setUnit={setUnit}
      />
      {weatherData.data != undefined ? (
        <div>
          <WeatherData data={weatherData.data} unit={unit} />
        </div>
      ) : null}
    </div>
  );
};


const container =  {
    marginTop: "20px"
}