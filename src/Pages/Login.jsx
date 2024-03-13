import { useState } from "react"
import { handleLogin, setTokens } from "../api";

export default function Login ({onLogin}) {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");

    const handleLogin = async () => {
        const apiLogin = await handleLogin(email,password);
        if(apiLogin.status === 200){
            onLogin(apiLogin.data.data.acsessToken)
            setTokens(apiLogin.data.data.acsessToken)
        }
    }

    return (
        <>
            <div>
                <h1 className='text-center font-bold text-4xl p-5'>LOGIN</h1>
                <div className="container">
                    <div className="flex flex-col">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="input" placeholder="Email" />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" className="input" placeholder="Password" />
                    </div>
                    <button onClick={handleLogin} className="bg-gray-700 font-bold hover:bg-gray-500 mt-[20px] h-10 w-[150px] text-[20px] rounded-lg text-white">Login</button>
                </div>
            </div>
        </>
    )
} 
