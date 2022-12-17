import {Routes,Route} from "react-router-dom"
import Forgot from "../pages/Forget"
import Home from "../pages/Home"
import Login from "../pages/login"

import SinglePage from "../pages/Singlepage"



export default function Allroutes(){


    return(
        <Routes>
<Route path="/" element={<Home/>} />
<Route path="/login" element={<Login/>}/>
<Route path="/place/:id" element={<SinglePage/>}/>
<Route path="/forget" element={<Forgot/>}/>

<Route/>
<Route/>
        </Routes>
    )
}