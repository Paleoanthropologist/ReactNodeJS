import React, { useEffect, useState } from 'react';
import Note from './components/Note';
import NoteService from './components/NoteService';

const App = () =>{
  const [notes,setNotes] = useState([]);
  const[newNote,setNewNote] = useState('add a new note');
  const[showAll, setShowAll] = useState(true);


  const hook = ()=>{
    NoteService.getAll().then(response=>{
      setNotes(response.data);
    });
  }
  useEffect(hook,[]);

  const addNote = (event)=>{
      event.preventDefault();
      //console.log('button clicked', event.target);
      const noteObj = {
        content:newNote,
        date:new Date().toISOString(),
        important: Math.random()<0.5,
      }
      
      NoteService.create(noteObj).then(response=>{
        console.log(response);
        setNotes(notes.concat(response.data));
        setNewNote('');
      });
      
  }

  const handleNoteChange = (event)=>{
    //console.log(event.target.value);
    setNewNote(event.target.value);
  }

  const toggleImportanceOf = (id)=>{
    const note = notes.find(note=>note.id===id);
    const changedNode = {...note, important: !note.important};
    NoteService
              .update(id,changedNode)
              .then(response=>{setNotes(notes.map(note=>note.id!==id?note:response.data))})
              .catch(error=>{
                alert(`the node ${changedNode} does not exist on the server`);
                setNotes(notes.filter(note=>note.id!==id));
              });
  }

  const notesToShow = showAll? notes:notes.filter(note=>note.important===true);

  return(
    <div>
      <h1>Notes</h1>
      <button onClick={()=>setShowAll(!showAll)}>show {showAll?'important':'All'}</button>
      <ul>
        {notesToShow.map(note=>
          <Note key={note.id} note={note} toggleImportance={()=>{toggleImportanceOf(note.id)}}/>
          )}
      </ul>

      <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange}/>
          <button type='submit'>Save</button>
      </form>

    </div>
  )
}

export default App;
