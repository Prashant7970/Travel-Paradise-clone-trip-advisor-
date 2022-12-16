import NavButton from "../component/HeaderButton";


import { Input,Heading,  Button,useDisclosure,Modal,ModalOverlay,ModalContent,ModalFooter,  Text,ModalBody,ModalHeader} from "@chakra-ui/react"
import styles from "./Pages.module.css"
import RecentButton from "../component/Recentbtn";
import Slider from "../component/Slider";


export default function Home(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    function handlemodal(){
        onOpen()
    }

    const data=[1,2,3,4,5,6,7,8,9,10]
    return (
    <div className={styles.headerimage}> 
        <NavButton handlemodal={handlemodal}/>
        <div style={{width:"90%", margin:"auto"}} >
            <img src="https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp" alt="" />
            
            <div className={styles.input}>
                  
      <Input onClick={onOpen}
       size={"lg"}
       width={"100%"}
       variant={"filled"}
       borderRadius={"30px"}
        type={'text' }
        placeholder='Where To ?'
      
       
      />
        <Modal isOpen={isOpen} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader> <Input 
       size={"lg"}
       width={"100%"}
       variant={"filled"}
       borderRadius={"30px"}
        type={'text' }
        placeholder='Where To ?'
      
       
      /></ModalHeader>
           
            <ModalBody>
              <Text>Search</Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
            </div>
        </div>
        <Heading as='h3' fontFamily={"sans-serif"} size='lg'>
    Your Recently Searches
  </Heading>
        <RecentButton/>


<div className={styles.sliding1}>
{data.map((item)=>{
    return <Slider/>
})}
</div>

        <div className={styles.sliding1}>
{data.map((item)=>{
    return <Slider/>
})}
</div>

        
     
        
     </div>  


    );
}