

import {
   
    Button,

   Stack,

  
  
  } from '@chakra-ui/react';
import MoreOptions from './more';

export default function NavButton({handlemodal}){


    return (
        
       
        <Stack spacing={4} p={["5px","10px","20px","30px"]} w={["100%","90%"]} m={"auto"}mt={"70px"} direction='row' align='center'>
  <Button onClick={handlemodal} variant={"outline"} width={["60px","130px","170px"]}  p={"10px"} >
   Hotels
  </Button>
  <Button onClick={handlemodal} variant={"outline"} width={["60px","130px","170px"]} overflow={"hidden"}  p={"10px"} >
    Holiday Homes
  </Button>
  <Button onClick={handlemodal} variant={"outline"}  width={["60px","130px","170px"]} p={"10px"} >
   Things To Do
  </Button>
  <Button onClick={handlemodal} variant={"outline"} width={["100px","130px","170px"]}  p={"10px"}  >
  Restaurants
  </Button>
  <Button onClick={handlemodal} variant={"outline"} width={["100px","130px","170px"]}  p={"10px"} >
   Travel Stories
  </Button>
 <MoreOptions/>
</Stack>
       
    );
}