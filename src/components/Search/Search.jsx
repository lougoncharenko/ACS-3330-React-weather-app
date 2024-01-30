import React, { useEffect, useState } from "react";

export const Search = ({ input, setInput, setWeatherData, unit, setUnit }) => {
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const fetchWeatherData = async (input) => {
    try {
      let url = "";
      if (/\d/.test(input)) {
        url = `https://api.openweathermap.org/data/2.5/weather?zip=${input},us&appid=d71be756535b836342b5fa5e644f8f8e`;
      } else {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=${unit}&appid=d71be756535b836342b5fa5e644f8f8e`;
      }

      const response = await fetch(url);
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
    fetchWeatherData("Sarasota");
  }, [input, setInput, unit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(input);
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit} style={formStyle}>
        <span style={iconStyle}>🔍</span>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a city or zipcode..."
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
  maxWidth: "600px",
  margin: "20px auto",
  backgroundColor: "#f5f5f5",
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const iconStyle = {
  fontSize: "1.5rem",
  marginRight: "8px",
};

const inputStyle = {
  flex: "1",
  padding: "8px",
  fontSize: "1rem",
  border: "none",
  borderRadius: "4px",
  outline: "none",
  marginRight: "20px",
};

const selectStyle = {
  padding: "10px",
  fontSize: "1rem",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

const buttonStyle = {
  marginLeft: "8px",
  padding: "8px 12px",
  fontSize: "1rem",
  backgroundColor: "gray",
  borderRadius: "4px",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};
