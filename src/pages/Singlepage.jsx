import {
    Box,
  
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
  ListItem,
  List
   
  } from '@chakra-ui/react';
  import {data as array} from "../data"

import { useParams } from 'react-router-dom';
  


  export default function SinglePage() {
let {id}=useParams()

    let obj=array.local.filter((item)=>{
        
        return item.id===Number(id)
    })
    console.log(obj)
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 1 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                obj[0].imgUrl
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
               { obj[0].title}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                {obj[0].content}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                 {obj[0].des}
                </Text>
                <Text fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack>
              <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
               Availability Criteria
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Ages:
                  </Text>{' '}
                  0-120
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Duration:
                  </Text>{' '}
                  2days
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Start time:
                  </Text>{' '}
                  Check Availability
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                   Ticket Type:
                  </Text>{' '}
                  Mobile
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Language:
                  </Text>{' '}
                  English,Chineese
                </ListItem>
               
              </List>
            </Box>
              
             
            </Stack>
  
            <Button
              rounded={'none'}
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
              }}>
             Book Now
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
            
             
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }