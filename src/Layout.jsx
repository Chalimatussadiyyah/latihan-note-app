import { Link, Outlet } from "react-router-dom"
import { useAuth } from "./context/Auth"

function Layout({token,onLogout}){
    const {isLoggedin} = useAuth()
    const { doLogout} = useAuth()

    const handleClick = async () => {
        doLogout()
    }
    return(
        <>
        <div className="flex gap-2 py-2 h=[55px] items-center justify-around bg-slate-500">
            <h1 className="text-gray text-2xl"> NOTE</h1>

            { isLoggedin ? (
                <span className="font-bold text-white text-[20px]">Udah Login</span>
            ) : (
                <span className="font-bold text-white text-[20px]">Belum Login</span>
            )}

            <nav className="flex gap-5 items-center ">
                {token !== null ? null : <Link to={"/Registrasi"}><span className="text-white font-sans hover:text-slate-300">Registrasi</span></Link>}
                {token !== null ? null : <Link to={"/Login"}><span className="text-white font-sans hover:text-slate-300">Login</span></Link>}
                <Link to={"/Note"}><span className="text-white font-sans hover:text-slate-300">Notes</span></Link>
                {token !== null ? <Link onClick={() => onLogout()}><span className="text-white font-sans hover:text-slate-300">Logout</span></Link> : null}
                <button  onClick={handleClick} className="text-white bg-gray-800 hover:bg-gray-700 w-[80px] h-[40px] rounded-[20px] font-sans hover:text-slate-300">Logout</button>
            </nav>
        </div>
        <Outlet/>
        </>
    )
}

export default Layout