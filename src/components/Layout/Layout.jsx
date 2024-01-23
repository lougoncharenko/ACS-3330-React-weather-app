import React, { useState }from 'react';
import {Search} from '../Search/Search';
import {WeatherData} from '../WeatherData/WeatherData';

export const Layout = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState({})

  return (
   <div>
    <Search city={city} setCity={setCity} setWeatherData={setWeatherData}/>
    {weatherData.data != undefined ? (
        <div>
          <WeatherData data={weatherData.data} />
        </div>
      ) : null}
   </div>

  );
}
