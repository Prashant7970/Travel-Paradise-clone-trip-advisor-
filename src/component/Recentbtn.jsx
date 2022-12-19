import {
   
    Button,

   Stack,
Heading,

  
  
  } from '@chakra-ui/react';
import {CiSearch} from "react-icons/ci"
import styles from "./components.module.css"
export default function RecentButton(){


    return (
        
       
        <Stack spacing={4} p={"30px"} w={"90%"} m={"auto"} direction='row' align='center'>
  <Button variant={"outline"} className={styles.btn} >
  <CiSearch/> <Heading as='h5'ml={"5px"} size='sm'>
  Abu Dhabhi
  </Heading>
  </Button>
  <Button variant={"outline"} className={styles.btn} >
  <CiSearch/> <Heading as='h5'ml={"5px"} size='sm'>
    Residents 
  </Heading>
  </Button>
  <Button variant={"outline"}  className={styles.btn} >
  <CiSearch/> <Heading as='h5'ml={"5px"} size='sm'>
   Restaurants
  </Heading>
  </Button>
  <Button variant={"outline"} className={styles.btn} >
  <CiSearch/><Heading as='h5' ml={"5px"} size='sm'>
   Patna
  </Heading>
  </Button>
  <Button variant={"outline"}   className={styles.btn}  >
  <CiSearch/> <Heading as='h5'ml={"5px"} size='sm'>
     Things To Visit
  </Heading>
  </Button>
 
</Stack>
       
    );
}