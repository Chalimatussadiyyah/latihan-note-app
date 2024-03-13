function Register() {
    return (
        <>
            <div>
                <h1 className='text-center text-4xl p-5 my-[20px] font-bold'>REGISTER</h1>
                <div className="container">
                    <div className="flex flex-col">
                        <input type="text" className="input" placeholder="Nama" />
                        <input type="text" className="input" placeholder="Email" />
                        <input type="text" className="input" placeholder="Password" />
                    </div>
                    <button className="bg-gray-700 font-bold hover:bg-gray-500 h-12 w-[170px] text-[20px] rounded-lg text-white mt-[20px]">Register</button>
                </div>
            </div>
        </>
    )
} 
export default Register