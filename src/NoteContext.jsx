import { createContext, useContext, useState, useEffect } from "react"
import { addNote, deleteNote, editNote, tampilkan } from "./api"

const initialNoteState = {
    notes: [],
    currentNoteId: null,
    handleFetchData: () => { },
    handleAddData: () => { },
    handleUpdate: () => { },
    handleDelete: () => { },
    Edit: () => { },
    cancelEdit: () => { }
}

//create context
const NoteContext = createContext(initialNoteState)

//custom hook
const useNoteContext = () => {
    return useContext(NoteContext)
}

const NoteProvider = ({ children }) => {
    //state
    const [notes, setNote] = useState([])
    const [currentNoteId, setCurrentNoteId] = useState(null);

    const handleFetchData = async () => {
        const apiFetch = await tampilkan()
        setNote(apiFetch.data.data.notes ?? null)
    }

    const handleAddData = async (title, content) => {
        await addNote(title, content)
        handleFetchData()
    }

    const handleUpdate = async (id, title, content, writer) => {
        await editNote(id, title, content, writer)
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

    const handleSubmit = () => {
        onAdd(title, notes);
        setTitle("")
        setNote("")
    };
    
    const handleCancel = () => {
        setTitle("")
        setNote("")
    }

    useEffect(() => {
        handleFetchData();
    }, [])

    //return provider
    return (
        <NoteContext.Provider value={{ 
            notes, 
            currentNoteId,
            handleFetchData, 
            handleAddData, 
            handleUpdate, 
            handleDelete, 
            Edit, 
            cancelEdit, 
            handleSubmit, 
            handleCancel }}>
            {children}
        </NoteContext.Provider>
    )
}

// export provider & hook
export { NoteProvider, useNoteContext }