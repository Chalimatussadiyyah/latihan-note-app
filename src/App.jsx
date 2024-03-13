import Register from "./Pages/Register"
import Note from "./Note"
import Login from "./Pages/Login"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import { useEffect, useState } from "react"
import { getToken } from "./api"

function App() {

    //ini berubah satu
    //apa

    const [token,setToken] = useState(null);

    const handleLogin = (token) => {
        setToken(token);
    }

    const handleLogout = () => {
        setToken (null)
        localStorage.removeItem('token');
    }

    useEffect(() => {
        const token = getToken()
        setToken(token)
    },[])

    return (
        <BrowserRouter>
        <Routes>
            <Route element={<Layout token={token} onLogout={handleLogout}/>}>
            {token !== null ? 
                <Route>
                    <Route path={"/Note"} element={<Note />} /> 
                    <Route path="*" element={<Navigate to={"/Note"}/>}/>
                </Route>
            : <Route path={"/Note"} element={<h1 className="text-white grid place-items-center mt-[16rem] font-bold text-[4rem]">Not Found</h1>} />}
            {
                token !== null ? null : 
               <Route>
                 <Route path={"/Registrasi"} element={<Register />} />
                 <Route path={"/Login"} element={<Login onLogin={handleLogin}/>} />
               </Route>
            }
            </Route>
            <Route path="*" element={<Navigate to={"/Login"}/>}/>
        </Routes>

        </BrowserRouter>
        // <Note/>
        // <Register/>
        // <Login/>
    )
}
export default App


