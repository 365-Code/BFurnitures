"use client"
import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

const AuthState = ({children})=>{

    const noAuth = {
        user: {},
        token: ''
    }
    const [auth, setAuth] = useState(noAuth)

    const saveAuth = (user, token)=>{

        const authDet = {user, token}
        localStorage.setItem('auth', JSON.stringify(authDet))
        setAuth(authDet)
    }

    const clearAuth = ()=>{
        localStorage.removeItem("auth");
        setAuth(noAuth)
    }

    return (
        <AuthContext.Provider value={{auth, setAuth, saveAuth, clearAuth}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthState;

export const useAuth = ()=>useContext(AuthContext)