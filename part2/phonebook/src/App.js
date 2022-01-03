
import React,{useEffect, useState} from "react";
import Note from './component/Note.js';
import PersonForm from './component/PersonForm.js';
import Filter from './component/Filter.js'
import Service from "./component/Service.js";
import Notification from './component/Notification'

function App() {

const[persons, setPersons] = useState([]);
const[newName,setNewName] = useState('');
const[newNumber,setNewNumber] = useState('');
const[filter, setFilter] = useState('');
const[message,setMessage]= useState('');

const hook = ()=>{
  
  const eventHandler=(response)=>{
    setPersons(response.data);
  }
  Service.getAll().then(eventHandler);
}
useEffect(hook,[]);

const personsToShow = filter===''? persons:persons.filter(person=>person.name.toUpperCase()===filter.toUpperCase())

return(
  <div>
    <h2>Phonebook</h2>
    <Notification message={message}/>
    <Filter filter={filter} setFilter={setFilter}/>
    <PersonForm persons={persons} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} setPersons={setPersons} message={message} setMessage={setMessage}/>
    <h2>Numbers</h2>
      <div>
        {personsToShow.map(person=>
          <Note key={person.name} name={person.name} number={person.number} id={person.id} persons={persons} setPersons={setPersons}/>
        )}
      </div>
  </div>
)

}

export default App;
