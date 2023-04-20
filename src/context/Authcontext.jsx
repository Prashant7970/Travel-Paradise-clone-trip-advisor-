import { useState } from "react";
import { createContext } from "react";






export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const[login,setlogin]=useState(false)
    function handlelogin(){
        setlogin(!login)
       
    }

    return <AuthContext.Provider value={{handlelogin:handlelogin,login:login}}>{children}</AuthContext.Provider>
}