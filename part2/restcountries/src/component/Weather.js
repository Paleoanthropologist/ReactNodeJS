import React, { useEffect } from "react";
import axios from "axios";

const Weather = ({capital,weather, setWeather})=>{
    let temp = '';
    let windspeed = '';
    const hookWeather = ()=>{
        const APP_KEY = process.env.REACT_APP_API_KEY;
        const promise = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${APP_KEY}`);
        const weatherHandler = (response)=>{
            setWeather(response.data);
        }
        promise.then(weatherHandler);
    }
    useEffect(hookWeather,[capital]);

    if(weather.length !== 0){
        temp = Math.round(weather.main.temp - 273.15);
        windspeed = weather.wind.speed;
    }
    return(
        <div>
            <h3>weather in {capital}</h3>
           <p>temperature: {temp}</p>
          <p>wind: {windspeed}</p>
        </div>
    )
}

export default Weather;