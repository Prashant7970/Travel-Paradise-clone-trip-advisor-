import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
  
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useContext } from 'react';
  import {Link, useNavigate} from "react-router-dom"
import SmallFooter from '../component/smallfooter';
import { AuthContext } from '../context/Authcontext';
import axios from "axios"
  export default function Login() {
    const {handlelogin}=useContext(AuthContext)
const [email,setemail]=useState("eve.holt@reqres.in")
const [password,setpassword]=useState("")
const navigate=useNavigate()
 function handlechange(e){
  let val=e.target.value 
  e.target.type==="email"?setemail(val):setpassword(val)
  


 }


    function handlesignin(){

axios.post(`https://reqres.in/api/login`,{

    email:email,
    password:password
 
}).then((res)=>{
if(res.status===200){
  handlelogin()
  console.log("okk")

}else{
  console.log("error")
}
})

navigate("/")

    }

    return (
      <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool  <Link  color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input onChange={handlechange} type="email" value="eve.holt@reqres.in" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input onChange={handlechange} type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link to="/forget" color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                onClick={handlesignin}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>

      </Flex>
      <SmallFooter/>
      </>
    );
  }