import React, { useState } from "react";

export const Search = ({city, setCity}) => {
  // Function to handle input changes
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use the 'city' state value here for further processing
    console.log("City entered:", city);
    // Add your search logic or API call here
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