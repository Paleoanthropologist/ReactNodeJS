import React from "react";
import Service from "./Service";

const Note = ({name,number,id,persons,setPersons})=>{
    const deleteHandler=()=>{
        Service.remove(id).then(response=>{
            setPersons(persons.filter(person=>person.id!==id));
        })
    }
    return(
        <li className="note">
            {name}:{number}
            <button className='delete' onClick={deleteHandler}>delete</button>
        </li>
    )
}

export default Note;