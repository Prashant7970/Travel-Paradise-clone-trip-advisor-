// import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,

  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

// const Text = ({ children }: { children: ReactNode }) => {
//   return (
//     <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
//       {children}
//     </Text>
//   );
// };

// const Text = ({
//   children,
//   label,
//   href,
// }: {
//   children: ReactNode;
//   label: string;
//   href: string;
// }) => {
//   return (
//     <chakra.button
//       bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
//       rounded={'full'}
//       w={8}
//       h={8}
//       cursor={'pointer'}
//       as={'a'}
//       href={href}
//       display={'inline-flex'}
//       alignItems={'center'}
//       justifyContent={'center'}
//       transition={'background 0.3s ease'}
//       _hover={{
//         bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
//       }}>
//       <VisuallyHidden>{label}</VisuallyHidden>
//       {children}
//     </chakra.button>
//   );
// };

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('#faf1ed', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>


          <Stack align={'flex-start'}>
            <Text  fontSize={"20px"}>About Tripadvisor</Text>
            <Link fontWeight={"bold"} href={'#'}>About us</Link>
            <Link fontWeight={"bold"} href={'#'}>Press</Link>
            <Link fontWeight={"bold"} href={'#'}>Resources and Policies</Link>
            <Link fontWeight={"bold"} href={'#'}>Careers</Link>
            <Link fontWeight={"bold"} href={'#'}>Trust & safety</Link>
            <Link fontWeight={"bold"} href={'#'}>Contact us</Link>
            <Link fontWeight={"bold"} href={'#'}>Accessibility Statement</Link>
           
           
          </Stack>
          <Stack align={'flex-start'}>
            <Text  fontSize={"20px"}>Explore</Text>
            <Link fontWeight={"bold"} href={'#'}>Write a review</Link>
            <Link fontWeight={"bold"} href={'#'}>Add a Place</Link>
            <Link fontWeight={"bold"} href={'#'}>Join</Link>
            <Link fontWeight={"bold"} href={'#'}>Traveller's Choice</Link>
            <Link fontWeight={"bold"} href={'#'}>GreenLeaders</Link>
            <Link fontWeight={"bold"} href={'#'}>Help Centre</Link>
            <Link fontWeight={"bold"} href={'#'}>Travel Articles</Link>
           </Stack>
           
            <Stack align={'flex-start'}>
            <Text  fontSize={"20px"}>Do Business With Us</Text>
            <Link fontWeight={"bold"} href={'#'}>Owners & DMO?CVB</Link>
            <Link fontWeight={"bold"} href={'#'}>Business Advantage</Link>
            <Link fontWeight={"bold"} href={'#'}>Sponsored Placements</Link>
            <Link fontWeight={"bold"} href={'#'}>Access Our Content Api</Link>
           
          </Stack>
          <Stack align={'flex-start'}>
            <Text  fontSize={"20px"}>Get The App</Text>
            <Link fontWeight={"bold"} href={'#'}>iPhone App</Link>
            <Link fontWeight={"bold"} href={'#'}>Android App</Link>
            
           
          </Stack>

         
        </SimpleGrid>
      </Container>

      <Box
     padding={"20px"}
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          
          <Stack direction={'row'} spacing={6}>
      
            < Text label={'Twitter'} href={'#'}>
              <FaTwitter />
            </Text>
            <Text label={'YouTube'} href={'#'}>
              <FaYoutube />
            </Text>
            <Text label={'Instagram'} href={'#'}>
              <FaInstagram />
            </Text>
          </Stack>
         
        </Container>
        <Text width={"50%"} position={"relative"} left={"180px"} textAlign={"left"}  fontSize={"12px"}>This is the version of our website addressed to speakers of English in India. If you are a resident of another country or region, please select the appropriate version of Tripadvisor for your country or region in the drop-down menu. more</Text>
      </Box >
    </Box>
  );
}