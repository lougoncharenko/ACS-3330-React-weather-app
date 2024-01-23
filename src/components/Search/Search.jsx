import React, { useState, useEffect } from "react";

export const Search = ({city, setCity, setWeatherData}) => {
  // Function to handle input changes
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeatherData = async () => {
    console.log('this is running')
    try {
      const unit = "imperial"; // or "metric" for Celsius
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units='+ unit + '&appid=d71be756535b836342b5fa5e644f8f8e')
      if (!response.ok) {
        throw new Error(`Failed to fetch weather data. Status: ${response.status}`);
      }
  
      const data = await response.json();
      setWeatherData({ data: data });
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  };

 
  useEffect(() => {
    if (!city) {
        city = 'Sarasota'
        fetchWeatherData()
    }

  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use the 'city' state value here for further processing
    console.log("City entered:", city);
    // Add your search logic or API call here
    setCity(e.target.value);
    fetchWeatherData()
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
      <button type="submit" style={buttonStyle}>
        Search
      </button>
    </form>
  </>
);
};

const formStyle = {
display: 'flex',
alignItems: 'center',
maxWidth: '300px',
margin: '0 auto',
};

const iconStyle = {
fontSize: '1.5rem',
marginRight: '8px',
};

const inputStyle = {
flex: '1',
padding: '8px',
fontSize: '1rem',
};

const buttonStyle = {
marginLeft: '8px',
padding: '8px 12px',
fontSize: '1rem',
backgroundColor: '#007BFF',
color: '#fff',
border: 'none',
cursor: 'pointer',
};