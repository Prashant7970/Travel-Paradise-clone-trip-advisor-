import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";




export default function PrivateRoute({children}){
    const {login}=useContext(AuthContext)
    if(login){
        return children
    }else{
        return <Navigate to="/login"/>
    }
}