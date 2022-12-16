
import {
  Box,
  Flex,
  Avatar,

  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
Image,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,


} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
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
 
  return (
    <>
      <Box bg={useColorModeValue('#062424','gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box > <Image w={"70px"} src={'./logo.jpg'} alt='logo' /> <span>Let's Travel Paradise</span>  </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            <Button>Review</Button>
            <Button>Trips</Button>
            <Button>Alerts</Button>
              <Button onClick={toggleColorMode}>
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
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e9/bb/default-avatar-2020-65.jpg?w=100&h=-1&s=1'}
                    />
                    {/* https://avatars.dicebear.com/api/male/username.svg */}
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
              <Button>Basket</Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
