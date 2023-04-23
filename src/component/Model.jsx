
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
  import React from 'react'

export default function Model({props}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
 const enter=props
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    console.log(enter)
    async function bookhotel(enter){
        
      
        let data= await axios.post(`https://mock4-1jhm.onrender.com/hotels`,{
         title:enter.title,
         content:enter.content,
         description:enter.des,
         url:enter.imgUrl
        }
        )
          
        
        // let res=await data.json()
        console.log(data)
      
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
                <Input ref={initialRef} placeholder='First name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder='Last name' />
              </FormControl>
              <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
<FormControl as='fieldset'>
  <FormLabel as='legend' htmlFor={null}>
   Select seat Type
  </FormLabel>
  <RadioGroup defaultValue='local'>
    <HStack spacing='24px'>
      <Radio value='Bussiness'>Bussiness ${enter.id*2*200}</Radio>
      <Radio value='Middle'>Middle  ${enter.id*2*100}</Radio>
      <Radio value='local'>Local  ${enter.id*2*50}</Radio>
     
    </HStack>
  </RadioGroup>
  <FormHelperText>By default local </FormHelperText>
</FormControl>

<FormLabel as='legend' htmlFor={null}>
   Departure
  </FormLabel>
<Input
 placeholder="Select Date and Time"
 size="md"
 type="datetime-local"
/>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                BOOK
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }