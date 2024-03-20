import { Link, Outlet } from "react-router-dom"
import { useAuth } from "./context/Auth"

export default function Layout() {
    const { isLoggedin, doLogout } = useAuth()

    return (
        <>
            <div className="flex gap-2 py-2 h=[55px] items-center justify-around bg-slate-500">
                <h1 className="text-gray text-2xl"> NOTE</h1>

                {isLoggedin ? (
                    <span className="font-bold text-white text-[20px]">Udah Login</span>
                ) : (
                    <span className="font-bold text-white text-[20px]">Belum Login</span>
                )}

                {isLoggedin ? <>

                    <Link to={"/Note"}><span className="text-white font-sans hover:text-slate-300">Notes</span></Link>
                    <Link onClick={() => doLogout()}><span className="text-white font-sans hover:text-slate-300">Logout</span></Link>
                
                </> : <>

                    <Link to={"/Registrasi"}><span className="text-white font-sans hover:text-slate-300">Registrasi</span></Link>
                    <Link to={"/Login"}><span className="text-white font-sans hover:text-slate-300">Login</span></Link>
                
                </>}
            </div>
            <Outlet />
        </>
    )
}