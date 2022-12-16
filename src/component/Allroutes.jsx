import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"



export default function Allroutes(){


    return(
        <Routes>
<Route path="/" element={<Home/>} />
<Route/>
<Route/>
        </Routes>
    )
}