import React, { useEffect, useState } from "react";

export const Search = ({ city, setCity, setWeatherData, unit, setUnit }) => {

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=d71be756535b836342b5fa5e644f8f8e`
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch weather data. Status: ${response.status}`
        );
      }

      const data = await response.json();
      setWeatherData({ data });
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  };

  useEffect(() => {
    if (!city) {
      setCity("Sarasota");
      fetchWeatherData();
    }
  }, [city, setCity, unit]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit} style={formStyle}>
        <span style={iconStyle}>🔍</span>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter a city..."
          style={inputStyle}
        />
        <select value={unit} onChange={handleUnitChange} style={selectStyle}>
          <option value="imperial">Fahrenheit</option>
          <option value="metric">Celsius</option>
        </select>
        <button type="submit" style={buttonStyle}>
          Search
        </button>
      </form>
    </>
  );
};

const formStyle = {
  display: "flex",
  alignItems: "center",
  maxWidth: "300px",
  margin: "0 auto",
};

const iconStyle = {
  fontSize: "1.5rem",
  marginRight: "8px",
};

const inputStyle = {
  flex: "1",
  padding: "8px",
  fontSize: "1rem",
};

const selectStyle = {
  marginLeft: "8px",
  padding: "8px",
  fontSize: "1rem",
};

const buttonStyle = {
  marginLeft: "8px",
  padding: "8px 12px",
  fontSize: "1rem",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};
