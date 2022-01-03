import React from "react";

const Filter = ({filter,setFilter})=>{

    const filterHandler = (event)=>{
        setFilter(event.target.value);
    }

    return(
        <div>search:<input value={filter} onChange={filterHandler}/></div>
    )
    
}
export default Filter;