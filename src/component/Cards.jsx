import {

  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  
  Stack,
  Text,
 
  
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Cards({props}) {
  const navigate=useNavigate()
    const el=props

    async function canceltrip(id){
      await axios.delete(`https://mock4-1jhm.onrender.com/hotels/${id}`)



      navigate("/mybooking")
    }
   
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '100%' }}
       h={"fit-content"}
        direction={{ base: 'column', md: 'row' }}
        bg={['white', 'gray.900']}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
              el.url
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} color={"gray"} fontFamily={'body'}>
           {el.title}
          </Heading>
          <Text fontWeight={600} color={"gray"}size="md" mb={4}>
            {el.content}
          </Text>
          <Text
            textAlign={'center'}
            color={('gray.700', 'gray.400')}
            px={3}
            display={["none","none","none","block"]}>
            {el.description}
           
            
          </Text>
          <Stack align={'center'} justify={'center'} direction={'column'} mt={6}>
            <Badge
              px={2}
              py={1}
              color={"gray"}
              fontWeight={'400'}>
             Name : {el.name}
            </Badge>
            <Badge
              px={2}
              py={1}
              color={"gray"}
              fontWeight={'400'}>
             Email : {el.email}
            </Badge>
            <Badge
              px={2}
              py={1}
              color={"gray"}
              fontWeight={'400'}>
             price : ${el.price}
            </Badge>
            <Badge
              px={2}
              py={1}
              color={"gray"}
              fontWeight={'400'}>
             TIcket : {el.type}
            </Badge>
            <Badge
              px={2}
              py={1}
              color={"gray"}
              fontWeight={'400'}>
             Departure : {el.date}
            </Badge>
          
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
              onClick={()=>canceltrip(el.id)}
              >
              Cancel
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
            
              >
              Pay
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Update
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
