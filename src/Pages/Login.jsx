import { useState } from "react"
import { handleLogin, setTokens } from "../api";
import { useAuth } from "../context/Auth";

export default function Login({ onLogin }) {
    const { doLogin } = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const handleClick = async () => {
        doLogin(email, password)
        // const login = await handleLogin(email,password);
        // if(login.status === 200){
        //     setEmail("")
        //     setPassword("")
        //     setTokens(login.data.data.acsessToken)
        //     onLogin(login.data.data.acsessToken)
        //     alert(login.data.message)
        // }else{
        //     const {email=[],password=[]} =login.data.error;
        //     const err = [...email,...password];
        //     alert(err.join("\n"))
        // }
    }

    return (
        <>
            <div>

                <div className="bg-gray-800 h-[300px] w-[800px] m-auto mt-[50px] rounded-[20px] shadow-xl">
                    <h1 className='text-center font-bold text-4xl p-5 text-white'>LOGIN</h1>
                    <div className="container">
                        <div className="flex flex-col">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="input" placeholder="Email" />
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" className="input" placeholder="Password" />
                        </div>
                        <button onClick={handleClick} className="bg-gray-700 font-bold hover:bg-gray-500 mt-[20px] h-10 w-[150px] text-[20px] rounded-lg text-white">Login</button>
                    </div>
                </div>
            </div>
        </>
    )
} 
