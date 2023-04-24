
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
  FormHelperText,
  RadioGroup,
  HStack,
  Radio
  } from '@chakra-ui/react'
  import axios from 'axios';
  import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Model({props}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
 const enter=props
 const [name,setname]=useState("")
 const [last,setlast]=useState("")
 const [email,setemail]=useState("")
 const [type,settype]=useState("local")
 const [date,setdate]=useState("")
 const navigate=useNavigate()

  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    
    async function bookhotel(enter){
      let price=0
      if(type==="Bussiness"){
        price=enter.id*2*200
      }else if(type==="Middle"){
        price=enter.id*2*100
      }else{
        price=enter.id*2*50
      }
      
        await axios.post(`https://mock4-1jhm.onrender.com/hotels`,{
         title:enter.title,
         content:enter.content,
         description:enter.des,
         url:enter.imgUrl,
         name:name+" "+last,
         email:email,
         type:type,
         date:date,
         price:price


        }
        )

       navigate("/mybooking")
          
        
        // let res=await data.json()
    
      
      }
      
  
    return (
      <>
        <Button  rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
             
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }} onClick={onOpen} variant={'outline'}  background={"black"}>BOOK NOW</Button>
       
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} onChange={(e)=>setname(e.target.value)} placeholder='First name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input onChange={(e)=>setlast(e.target.value)} placeholder='Last name' />
              </FormControl>
              <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input onChange={(e)=>setemail(e.target.value)} type="email" />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
<FormControl as='fieldset'>
  <FormLabel as='legend' htmlFor={null}>
   Select seat Type
  </FormLabel>
  <RadioGroup  defaultValue='local'>
    <HStack spacing='24px'>
      <Radio onChange={(e)=>e.target.checked===true?settype(e.target.value):null} value='Bussiness'>Bussiness ${enter.id*2*200}</Radio>
      <Radio onChange={(e)=>e.target.checked===true?settype(e.target.value):null} value='Middle'>Middle  ${enter.id*2*100}</Radio>
      <Radio onChange={(e)=>e.target.checked===true?settype(e.target.value):null} value='local'>Local  ${enter.id*2*50}</Radio>
     
    </HStack>
  </RadioGroup>
  <FormHelperText>By default local </FormHelperText>
</FormControl>

<FormLabel as='legend' htmlFor={null}>
   Departure
  </FormLabel>
<Input
onChange={(e)=>setdate(e.target.value)}
 placeholder="Select Date and Time"
 size="md"
 type="datetime-local"
/>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' onClick={()=>bookhotel(enter)} mr={3}>
                BOOK
              </Button>
            
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }