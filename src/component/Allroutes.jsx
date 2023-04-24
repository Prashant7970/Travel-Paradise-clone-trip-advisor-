import {Routes,Route} from "react-router-dom"
import Forgot from "../pages/Forget"
import Home from "../pages/Home"
import Login from "../pages/login"

import SinglePage from "../pages/Singlepage"
import PrivateRoute from "./PrivateRoute"
import Mybooking from "../pages/Mybooking"



export default function Allroutes(){


    return(
        <Routes>
<Route path="/" element={<Home/>} />
<Route path="/login" element={<Login/>}/>
<Route path="/place/:id" element={<PrivateRoute><SinglePage/></PrivateRoute>}/>
<Route path="/forget" element={<Forgot/>}/>

<Route path="/mybooking" element={<Mybooking/>}/>
<Route/>
        </Routes>
    )
}