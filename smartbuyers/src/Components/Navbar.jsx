import React from 'react';
import { Center,Box,Flex, Image, Input,Link,InputGroup,InputRightElement,Text,Popover,PopoverTrigger,Portal,PopoverContent,PopoverHeader,PopoverBody,Button,PopoverFooter,Tooltip } from '@chakra-ui/react';
import {SearchIcon} from "@chakra-ui/icons";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    
  return (
    <>
    <Box>
        <TopNavbar/>
    </Box>
    <Box fontFamily={"Open Sans, sans-serif, Arial, Helvetica"} display='flex' alignItems="center" justifyContent="center" w='100%' h="90px" bg="rgb(10,110,254)">
        <Flex gap={10}>
            <Box>
                <Flex alignItems="center" justifyContent="center" gap={2}>
                    <Image src='favicon.ico' w="10" alt='SmartBuyers Logo' />
                    <Link textDecorationLine={'none'} onClick={()=>navigate('/')}><Text fontWeight={600} fontSize={25} color="white">SmartBuyers</Text></Link>
                </Flex>
            </Box>

            <Box>  
                <InputGroup>  
                <Input 
                    w={650}
                    colorScheme="gray"
                    bg="white"
                    variant="outline"
                    placeholder="Search Products"
                />
                <InputRightElement>
                    <Tooltip hasArrow label='Search Products' bg='gray.300' color='black'>
                        <SearchIcon color={'blue.700'}/>
                    </Tooltip>
                </InputRightElement>
                </InputGroup>
            </Box>

            <Flex alignItems="center" justifyContent="center" gap={20}>
            <Link color="white">About</Link>
            <Link color="white">
                <Flex>
                    <PersonIcon/>
                    <Popover>
                        <PopoverTrigger>
                            <Text>User</Text>
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent>
                            <Center>
                            <PopoverHeader fontWeight={500} fontSize={15}>Welcome to SmartBuyers</PopoverHeader>     
                            </Center>
                            <PopoverBody display="flex" justifyContent="space-between" p="5">                           
                                <Button px="40px" variant='outline' color={'#0066ff'} colorScheme='blue' onClick={()=>navigate('/login')}>LogIn</Button>
                                <Button px="35px" bg={'#0066ff'} color={'white'} _hover={{bg: 'blue.600'}} onClick={()=>navigate('/signup')}>SignUp</Button>
                            </PopoverBody>  
                            <Center>  
                                <br />
                                <br />
                            <PopoverFooter><Link><Image src="https://cdn.geekwire.com/wp-content/uploads/2015/09/Screen-Shot-2015-09-01-at-9.03.40-AM.png" width="20" /></Link></PopoverFooter>
                            </Center>
                            </PopoverContent>
                        </Portal>
                    </Popover>
                </Flex>
            </Link>
            <Link>
                <ShoppingCartIcon/>
            </Link>
            </Flex>

        </Flex>
    </Box>
    <Box>
        <BottomNavbar/>
    </Box>
    </>
  )
}

export default Navbar