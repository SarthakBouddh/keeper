import './App.css';
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { Note } from "./component/Note";
import { CreateNote } from './component/CreateNote';
import { useState, useEffect } from 'react';

function App() { 
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  function addNote(newNote) {
     setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
     setNotes(prevNotes => prevNotes.filter((_, index) => index !== id));
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      <div className='d-flex flex-wrap mx-4 align-items-start align-item'>
      {notes.map((noteItem, index) => (
          <Note 
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
          />
      ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
