import { useState } from "react";
import { useNoteContext } from "./NoteContext";

function FormTambah() {
    const { handleAddData } = useNoteContext()
    const [title, setTitle] = useState("")
    const [note, setNotes] = useState("")

    const handleSubmit = () => {
        handleAddData(title, note);
        setTitle("")
        setNotes("")
    };
    
    const handleCancel = () => {
        setTitle("")
        setNotes("")
    }

    return (
        <div className="container" >
            <div className='flex flex-col'>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder='title'
                    name='title'
                    className="input"
                />

                <textarea
                    value={note}
                    onChange={e => setNotes(e.target.value)}
                    name="note"
                    id=""
                    cols="30"
                    rows="5"
                    placeholder='note'
                    className="textarea">
                </textarea>

                <button
                    onClick={() => handleSubmit()}
                    className="bg-gray-700 font-bold hover:bg-gray-600 text-white text-lg rounded-lg px-5 py-3 mt-4">Add Note
                </button>

                <button
                    onClick={()=> handleCancel()}
                    className="bg-gray-700 font-bold hover:bg-gray-600 text-white text-lg rounded-lg px-5 py-3 mt-2">Cancel
                </button>
            
            </div>
        </div>
    )
}

export default FormTambah;