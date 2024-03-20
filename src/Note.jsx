import { useEffect, useRef, useState } from 'react'
import NoteItem from './Component/NoteItem'
import { nanoid } from 'nanoid'
import FormTambah from './FormTambah'
import FormEdit from './FormEdit'
import axios from 'axios'
import { Await } from 'react-router-dom'
import { tampilkan } from './api'
// import {addNote, editNote, deleteNote, tampilkan} from './api' 

// import { nanoid } from 'nanoid'
// import{useState} from 'react';

export default function Note() {

  // const [count, setCount] = useState(0)
  const [notes, setNotes] = useState([])
  const [currentNoteId, setCurrentNoteId] = useState(null)

  // console.log(currentNoteId)

  const handleFetchData = async () => {
    const apiFetch = await tampilkan()
    setNotes(apiFetch.data.data.notes ?? null)
  }

  // const tampilkan = async () => {
  //   await axios.get('http://192.168.1.46:8000/api/v1/notes')
  //     .then((response) => {
  //       return response
  //       // console.log(response.data)
  //       // setNotes(response.data)
  //     })
  //     .catch((error) => {
  //       return error
  //     })
  //     console.group(notes.data.data)
  //     setNotes(notes.data.data)
  // }

  // const addNote = async (title, content) => {
  //   // setNotes((oldNote) => {
  //   const noteBaru = {
  //     // id: nanoid()
  //     title: title,
  //     content: content,
  //     writer: 1,
  //   };
  //   // return [...oldNote, noteBaru]
  //   await axios.post('http://192.168.1.46:8000/api/v1/notes', noteBaru)
  //     .then((response) => {
  //       console.log(response.data)
  //       tampilkan()
  //       setNotes((oldNote) => [...oldNote, response.data]);
  //     })
  //     .catch((error) => {
  //       console.error('Error adding note:', error);
  //     });

  // };

  // const deleteNote = async (id) => {
  //   const deletes = await axios.delete(`http://192.168.1.46:8000/api/v1/notes/${id}`)
  //     .then((response) => {
  //       // tampilkan()
  //       // setNotes((oldnotes) => oldnotes.filter((note) => note.id !== id));
  //       return response
  //     })
  //     .catch((error) => {
  //       return error
  //     });
  //   alert(deletes.data)
  //   tampilkan()
  // };

  // const editNote = async (id, title, content) => {
  //   const edits = await axios.delete(`http://192.168.1.46:8000/api/v1/notes/${id}`, { title, content })
  //     .then((response) => {
  //       return response
  //       // setNotes((oldNotes) =>
  //       //   oldNotes.map((note) => (note.id === id ? { ...note, title, content } : note))
  //       // );
  //     })
  //     .catch((error) => {
  //       return error
  //     })
  //   setIsEditKlik(null)
  //   alert(edits.data)
  //   tampilkan()
  // }

  const handleAddData = async (title,content) => {
    await addNote (title,content)
    handleFetchData()
  }

  const handleUpdate = async (id,title,content,writer) => {
    await editNote(id,title,content,writer)
    handleFetchData()
  }

  const handleDelete = async (id) => {
    await deleteNote(id);
    handleFetchData()
  }

  const Edit = (id) => {
    setCurrentNoteId(id)
  }

  const cancelEdit = () => {
    setCurrentNoteId(null);
  }

  useEffect(() => {
    handleFetchData();
  }, [])

  return (
    <>
      <div className='mx bg-gray-800 h-[500px] w-[800px] m-auto mt-[50px] rounded-[20px]'>
        <div className="App w-[100%] flex flex-col items-center">
          <h1 className='text-center text-4xl p-5 text-white'> Notes </h1>
          {currentNoteId ?
            <FormEdit onEdit={handleUpdate} targetValue={notes !== null ? notes.filter(e => e.id === currentNoteId)[0] : null} notes={notes} onCancel={cancelEdit} /> : <FormTambah onAdd={handleAddData} onCancel={cancelEdit} />}
          {/* <div className="card-container border-t-2 border-[#5F6F52] my-10 flex flex-wrap"></div> */}
          <div className='flex flex-row flex-wrap justify-center'>
            {notes.map (note => 
              <NoteItem
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
                onDelete={handleDelete}
                onEdit={Edit} />
           )}
          </div>
        </div>
      </div>

    </>
  )
}


