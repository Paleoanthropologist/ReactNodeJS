import React, {useState, useEffect} from "react";
import axios from 'axios';
import DisplayCountries from "./component/DisplayCountries";

const App = ()=> {
  
  const [all,setAll] = useState([]);
  const [weather, setWeather]=useState([]);
  const [countriesToShow,setCountriesToShow]=useState([]);
  
  const hook = ()=>{
    const promiseHandler = (response)=>{
      setAll(response.data);
    }
    const promise = axios.get('https://restcountries.com/v3.1/all');
    promise.then(promiseHandler)
  }
  useEffect(hook,[]);


const filterHandler = (event)=>{
  setCountriesToShow(all.filter(country=>country.name.common.toUpperCase().includes(event.target.value.toUpperCase())));
}

  return (
      <>
       <div>search countries: <input onChange={filterHandler}/></div>
       <div>
       <DisplayCountries countriesToShow={countriesToShow} setCountriesToShow={setCountriesToShow} weather={weather} setWeather={setWeather} all={all} setAll={setAll}/>
       </div>
      </>
  )

}

export default App;
