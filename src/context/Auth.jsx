import { createContext, useContext, useState } from "react"
import { handleLogin, setTokens } from "../api"

// nilai default
const initialAuthState = {
    isLoggedin: false,
    doLogin: () => {},
    doLogout: () => {}

}

// buat context
const AuthContext = createContext(initialAuthState)

// buat custom hook
const useAuth =() => {
    return useContext(AuthContext)
}

// buat provider
const AuthProvider = ({children}) => {
    // state
    const [isLoggedin, setIsLoggedin] = useState(false)

    // function
    const doLogin = async (email, password) => {
        //memanggil api dengan data email & password
        console.log("akan melakuakan login dengan : ", email, password)

        //memanggil api dengan axios
        const apiResult = await handleLogin(email,password)
        console.log(apiResult)
        console.log(apiResult.data.data.accessToken)

        //jika berhasil maka setIsLoggedin -> true
        //simpan token kedalam local storage
        setIsLoggedin(true)
        setTokens(apiResult.data.data.accessToken)

        //jika gagal tampilkan peringatan
        setIsLoggedin(false)
        console.log('test kepanggil' ,isLoggedin)
    }

    const doLogout = () => {
        setIsLoggedin(false)
    }

    // return provider
    return (
        <AuthContext.Provider value={{isLoggedin, doLogin, doLogout}}>
            {children}
        </AuthContext.Provider>
    )
}    

// export provider & hook
export {AuthProvider, useAuth}