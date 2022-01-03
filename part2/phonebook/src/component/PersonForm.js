import React from "react";
import Service from "./Service";




const PersonForm = ({persons,newName,newNumber,setNewName,setNewNumber,setPersons,message,setMessage})=>{

    const nameHandler = (event)=>{
        setNewName(event.target.value);
      }
      
    const numberHandler = (event)=>{
        setNewNumber(event.target.value);
    }

    const addNameNumber = (event)=>{
        event.preventDefault();
        const newObj = {
            name:newName,
            number:newNumber
        }

        let nameFlag = false;
        let numberFlag = false;

                persons.forEach(item=>{
                    if(item.name === newName){
                        nameFlag=true;
                        if(item.number===newNumber){
                            numberFlag=true;
                        }
                    }
                })
                if(nameFlag && numberFlag){
                    setMessage(`${newName} is already added to the phonebook!`);
                }else if(nameFlag===true && numberFlag===false){
                        const confirmed = window.confirm(`${newName} is already added to the phonebook, would you like to replace the number?`);
                        if(confirmed){
                            const note = persons.find(person=>person.name === newName);
                            const changedNote = {...note, number:newNumber};
                            Service
                                .update(note.id,changedNote)
                                .then(response=>{
                                    setPersons(persons.map(person=>person.name===newName?newObj:person));
                                })
                                .catch(error=>{
                                    setMessage(`${newName} was already removed from server`);
                                    setTimeout(()=>{setMessage(null)},5000);
                                    setPersons(persons.filter(person=>person.name!==newName));
                                })
                        }
                }else{
                    Service
                    .create(newObj)
                    .then(response=>{
                        setMessage(`${newName} is added to the phonebook`);
                        setTimeout(()=>{setMessage(null)},5000);
                        setPersons(persons.concat(response.data));
                        setNewNumber('');
                        setNewName('');
                    })
                }
            }



    return(
    <>
    <form onSubmit = {addNameNumber}>
      <div>
            Name:<input value={newName} onChange={nameHandler}/>
        </div>
        <div>
            Cell #:<input value = {newNumber} onChange={numberHandler}/>
        </div>
        <div>
          <button type='submit'>save</button>
        </div>
    </form>
    </>
    )
}

export default PersonForm;