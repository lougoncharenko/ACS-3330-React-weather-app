import React, { useState }from 'react';
import {Search} from '../Search/Search';

export const Layout = () => {
    const [city, setCity] = useState('');
  return (
   <div>
    <Search city={city} setCity={setCity}/>
   </div>

  );
}
