
import {
  Box,
  Flex,
  Avatar,
Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
Image,
 
  Stack,
  useColorMode,





} from '@chakra-ui/react';
import styles from "./components.module.css"
import {Link} from "react-router-dom"
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {FiHeart,FiBell,FiEdit2} from 'react-icons/fi'
import {BsCart3} from 'react-icons/bs'
import { useContext } from 'react';
import { AuthContext } from '../context/Authcontext';
// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link,
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const {handlelogin}=useContext(AuthContext)
 
  return (
    <div className={styles.nav} >
      <Box>
        <Flex h={16} w={"80%"} margin={"auto"} alignItems={'center'} justifyContent={'space-between'}>
        <Link to="/">  <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
           <Box > <Image borderRadius={"60%"} w={["70px"]} display={["none","none","block"]} src={'./logo.jpg'} alt='logo' />  </Box><Text color={"black"} fontWeight={"bold"} fontSize={["14px","20px","25px"]} fontFamily={"sans-serif"}>Travel Paradise</Text> 
            </Flex></Link>
        

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={["4","5","6","7"]}>
            <Button borderRadius={"17px"} display={["none","none","flex"]} color={"black"} bg={"white"}><FiEdit2 /> <Text ml={"10px"}> Review</Text></Button>
            <Button borderRadius={"17px"} color={"black"} bg={"white"}> <FiHeart /> <Text ml={"10px"}> <Link to="/mybooking">Trips</Link></Text></Button>
            <Button borderRadius={"17px"} color={"black"} display={["none","none","flex"]} bg={"white"}>
              <FiBell/><Text ml={"10px"}> Alerts</Text></Button>
              <Button borderRadius={"17px"} color={"black"} bg={"white"} onClick={()=>{toggleColorMode()
             
              }}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
             
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e9/bb/default-avatar-2020-65.jpg?w=100&h=-1&s=1'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  
                  <MenuDivider />
                  <Link to="/mybooking">  <MenuItem>Your Bookings</MenuItem></Link>
                  <Link to="/login"><MenuItem>Login</MenuItem></Link>
                  <MenuItem ><Button w={"100%"} onClick={handlelogin}> Logout</Button></MenuItem>
                </MenuList>
              </Menu>
              <Button borderRadius={"17px"} color={"black"} display={["none","none","flex"]} bg={"white"}> <BsCart3/><Text ml={"10px"}> Basket</Text></Button>
             
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
