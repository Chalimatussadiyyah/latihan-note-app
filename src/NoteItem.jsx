import { useNoteContext } from "./NoteContext"

export default function NoteItem({ id, title, content, onDelete, onEdit }) {
  const { handleDelete, Edit } = useNoteContext()

  const Delete = (id) => {
    const konfirm = confirm("Apakah Anda Yakin Ingin Menghapusnya?")
    if(konfirm){
      handleDelete (id)
      alert("Berhasil Mendelete")
    }
  }

  return (
    // <h1>Hallo</h1>
    // <div className="flex">
    <div >
      <div className="note bg-gray-600 m-5 rounded-[30px] w-[340px] h-auto p-4  relative">
        <button onClick={() => Delete(id)} className='detele absolute right-7 font-bold text-2xl top-1 text-red-500'> x </button>

        {/* <div className="text-white mt-[25px] border-[1px] p-[5px] mb-[30px] text-center"> {id} </div> */}
        <div className="text-lg text-white font-bold"> {title} </div>
        <p className="text-white text-sm">{content}</p>

        <button className="bg-gray-800 font-bold hover:bg-gray-900 text-white text-lg rounded-lg px-5 py-3 mt-4" onClick={() => Edit(id)}> Edit </button>

      </div>
    </div>
    // </div>
  )
}