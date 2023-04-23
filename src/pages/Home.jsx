
import {Link} from "react-router-dom"

import { Heading,   Text} from "@chakra-ui/react"
import styles from "./Pages.module.css"

import Slider from "../component/Slider";
import {data as array} from "../data"
import Footer from "../component/footer"


export default function Home(){
   
   

    const data=array.local
    
    return (
      <div style={{border:"1px solid red",width:"100%"}}>
    <div className={styles.headerimage}> 
     
        <div style={{width:"100%", margin:"auto",marginTop:"100px"}} >
            <img src="https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp" alt="" />
            
         
        </div>
     
      

        <Heading as='h4' textAlign={"left"} fontFamily={"sans-serif"} size='md'>Ways to tour patna</Heading>
        <Text textAlign={"left"} >Book these experiences for a close-up look at Patna</Text>
<div className={styles.sliding1}>
  
{data.map((item)=>{
    return <Link key={item.id} to={`/place/${item.id}`}> <Slider  title={item.title} content={item.content} img={item.imgUrl}/></Link>
})}
</div>
{/* <BsArrowRightCircleFill className={styles.righticon}/> */}


{/* \*sliding window 2*\ */}
<Heading as='h4' textAlign={"left"} mt={"60px"} fontFamily={"sans-serif"} size='md'>Ring in the new year</Heading>
        <Text textAlign={"left"} >New Year's Eve spots to welcome 2023</Text>
<div className={styles.sliding1}>
  
{array.abroad.map((item)=>{
    return  <Link to={`/place/${item.id}`} key={item.id}><Slider  title={item.title}  img={item.imgUrl}/></Link> 
})}
</div>
{/* 
<BsArrowRightCircleFill className={styles.righticon}/> */}
 
        
     
        
     </div>  

     {/* sliding window 3 */}
<div className={styles.sliding3}>
<Heading  textAlign={"center"} fontFamily={"Trip Sans VF"} paddingTop={"30px"} fontSize={"25px"}>More to explore</Heading>
       
<div className={styles.sliding3sub}>
  
{array.global.map((item)=>{
    return <Link to={`/place/${item.id}`} key={item.id}><Slider  title={item.title}  img={item.imgUrl}/></Link> 
})}


</div>
{/* <BsArrowRightCircleFill className={styles.righticon}/> */}

</div>


{/* sliding window 4 */}

<div className={styles.sliding4}>



<Heading as='h4' textAlign={"left"} fontFamily={"sans-serif"} size='md'>Top destinations for beach lovers</Heading>
        <Text textAlign={"left"} >Recommended based on your activity</Text>
<div className={styles.sliding4sub}>
  
{array.beach.map((item)=>{
    return <Link to={`/place/${item.id}`} key={item.id}><Slider  title={item.title}  img={item.imgUrl}/></Link> 
})}
</div>
{/* <BsArrowRightCircleFill className={styles.righticon}/> */}
</div>
<div className={styles.footerimg}>
  <img src="./Footer.png" alt="" />
</div>
<Footer/>

     </div>

    );
}