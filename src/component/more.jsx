import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    IconButton,
    Button,
    Stack,
    Flex,
 
  } from '@chakra-ui/react';
  
  import { BsThreeDots } from 'react-icons/bs';
 
  
  export default function MoreOptions() {
    return (
      /**
       * You may move the Popover outside Flex.
       */
      <Flex justifyContent="center" mt={4}>
        <Popover placement="bottom" isLazy>
        
          <PopoverTrigger>
            
            <IconButton
              aria-label="More server options"
              icon={<BsThreeDots />}
              variant="ghost"
              w="fit-content"
              value={"More"}
            />
          </PopoverTrigger>
          <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
            <PopoverArrow />
            <PopoverBody>
              <Stack>
                <Button
                  w="194px"
                  variant="ghost"
                  
                  justifyContent="space-between"
                  fontWeight="bold"
                  fontSize="sm">
                Add a Place
                </Button>
                <Button
                  w="194px"
                  variant="ghost"
               
                  justifyContent="space-between"
                  fontWeight="bold"
               
                  fontSize="sm">
                 Airlines
                </Button>
                <Button
                  w="194px"
                  variant="ghost"
                  
                  justifyContent="space-between"
                  fontWeight="bold"
                
                  fontSize="sm">
                Flights
                </Button>
                <Button
                  w="194px"
                  variant="ghost"
                 
                  justifyContent="space-between"
                  fontWeight="bold"
                 
                  fontSize="sm">
                Help Centre
                </Button>
                <Button
                  w="194px"
                  variant="ghost"
                 
                  justifyContent="space-between"
                  fontWeight="bold"
                
                  fontSize="sm">
               Package Holidays
                </Button>
                <Button
                  w="194px"
                  variant="ghost"
                 
                  justifyContent="space-between"
                  fontWeight="bold"
                
                  fontSize="sm">
             Travel Forems
                </Button>
                <Button
                  w="194px"
                  variant="ghost"
                 
                  justifyContent="space-between"
                  fontWeight="bold"
                
                  fontSize="sm">
              Traveller's Choice
                </Button>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    );
  }