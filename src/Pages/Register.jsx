import { useState } from "react"
import { Register } from "../api";

export default function Registrasi() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleRegister = async () => {
        const apiRegis = await Register (name,email,password);

        if(apiRegis.status === 201){
            setName("")
            setEmail("")
            setPassword("")
            alert(apiRegis.data.message)
        }else{
            const {name= [],email = [], password = []} = apiRegis.data.errors;
            const err = [...name,...email,...password]
            alert(err.join("\n"));
        }
    }
    return (
        <>
            <div>
                <h1 className='text-center text-4xl p-5 my-[20px] font-bold'>REGISTER</h1>
                <div className="container">
                    <div className="flex flex-col">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="input" placeholder="Nama" />
                        <input value={email} onChange={(e) => setName(e.target.value)} type="text" className="input" placeholder="Email" />
                        <input value={password} onChange={(e) => setName(e.target.value)} type="text" className="input" placeholder="Password" />
                    </div>
                    <button onClick={handleRegister} className="bg-gray-700 font-bold hover:bg-gray-500 h-12 w-[170px] text-[20px] rounded-lg text-white mt-[20px]">Register</button>
                </div>
            </div>
        </>
    )
} 
