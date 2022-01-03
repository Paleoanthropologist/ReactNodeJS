import React from "react";
import Country from "./Country";
import Weather from "./Weather";


const DisplayCountries = ({countriesToShow,setCountriesToShow,weather, setWeather, all, setAll})=>{

const buttonHandler = (event)=>{
    setCountriesToShow(all.filter(country=>country.name.common.toUpperCase().includes(event.target.value.toUpperCase())));
}

if(countriesToShow.length===1){
    return(
        <div>
            <Country name={countriesToShow[0].name.common} capital={countriesToShow[0].capital} population={countriesToShow[0].population} languages={countriesToShow[0].languages} flags={countriesToShow[0].flags}/>
            <Weather  capital={countriesToShow[0].capital} weather={weather} setWeather={setWeather}/>
        </div>
    )
}else if(countriesToShow.length >10){
    return(
        <div>
            <p>too many matches, please specify another filter</p>    
        </div>
    )
}else{
    return(
        <div>
            {countriesToShow.map(country=>
            <div key = {country.name.common}>
                <li>{country.name.common}</li>
                <button value = {country.name.common} onClick={buttonHandler}>show</button>
            </div>)}
            
        </div>

    )
}


}

export default DisplayCountries;