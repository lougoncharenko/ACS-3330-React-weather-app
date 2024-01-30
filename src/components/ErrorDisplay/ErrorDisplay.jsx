import React from 'react';
import './ErrorDisplay.css';

const ErrorDisplay = ({ errorMessage }) => {
  return (
    <div className="error-container">
      <p className="error-message">{errorMessage}</p>
    </div>
  );
};

export default ErrorDisplay;