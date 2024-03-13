import { Link, Outlet } from "react-router-dom";

export default function Layout({token,onLogout}) {
    return (
        <>
            <div className="flex bg-gray-700 p-4">
                <nav className="flex mx-2 gap-5">
                    <Link to={"/Note"}><p className="text-white hover:text-slate-300 font-bold text-[20px]">Note</p></Link>
                    {token !== null ? null : <Link to={"/Login"}><p className="text-white hover:text-slate-300 font-bold text-[20px]">Login</p></Link>}
                    {token !== null ? null : <Link to={"/Register"}><p className="text-white hover:text-slate-300 font-bold text-[20px]">Register</p></Link>}
                    {token !== null ? <Link onClick={() => onLogout()}><span className="text-white font-sans hover:text-slate-300">Logout</span></Link> : null}
                </nav>
            </div>
            <Outlet />
        </>
    )
}