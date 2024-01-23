import React, { useState }from 'react';
import {Search} from '../Search/Search';
import {WeatherData} from '../WeatherData/WeatherData';

export const Layout = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState({})
    const [unit, setUnit] = useState('imperial'); // Default unit is Fahrenheit

  return (
   <div>
    <Search city={city} setCity={setCity} setWeatherData={setWeatherData} unit={unit} setUnit={setUnit}/>
    {weatherData.data != undefined ? (
        <div>
          <WeatherData data={weatherData.data} unit={unit} />
        </div>
      ) : null}
   </div>

  );
}
