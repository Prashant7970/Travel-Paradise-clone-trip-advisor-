
import Cards from '../component/Cards'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Mybooking = () => {
    const [data,setdata]=useState([])

    async function getdata(){
        let data=await axios.get(`https://mock4-1jhm.onrender.com/hotels`)
       


        setdata(data.data)
    }

   
    useEffect(()=>{
  getdata()
    },[])
  return (
    <div style={{margin:"80px"}}>
        <p style={{fontSize:"30px",color:"teal",display:"flex",alignItems:"center", justifyContent:"center",fontWeight:"bold"}}>My Bookings</p>
        {data.map(el=>{
            return <Cards key={el.id} props={el}/>
        })}


        
    </div>
  )
}

export default Mybooking