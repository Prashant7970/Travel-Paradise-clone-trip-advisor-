

import styles from "./components.module.css"


export default function Slider({img,title,content}){




    return(


        <div className={styles.slider}>
       <img src={img} alt="imageurl" />
       <h3>
    {title}
 </h3>
 <p>{content}</p>

        </div>
      


       
    )
}