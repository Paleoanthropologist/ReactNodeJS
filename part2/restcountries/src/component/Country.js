import React from "react";

const Country = ({name,capital,population,languages,flags})=>{
    return(
    <div>
        <h3>{name}</h3>
        <p>capital: {capital}</p>
        <p>population: {population}</p>
        <h3>languages</h3>
        <div>{Object.values(languages).map(item=>
            <li key={item}>{item}</li>
        )}
        </div>
        <img src={flags.png} alt='new'/>
    </div>
    )
}

export default Country;