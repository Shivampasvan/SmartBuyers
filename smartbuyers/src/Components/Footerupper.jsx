import { Box,Button,Center,Flex,Input,Link } from '@chakra-ui/react';
import React from 'react'

const Footerupper = () => {
  return (
    <Box fontFamily={"Open Sans, sans-serif, Arial, Helvetica"} bg="gray.200"> 
    <Center py={10}>
        <Link textDecoration='none' color={'#0066ff'} fontSize={17} fontWeight={600}>Why buy from SmartBuyers?</Link>
    </Center>
    <Flex border={'2px solid rgb(10,110,254)'} borderRadius={5} mx={"30%"}>
        <Input border={'none'} borderRadius={'4px 0 0 4px'} bg={'white'} placeholder='Enter email to get $60 off coupons'/>
        <Button color={'white'} border={'none'} borderRadius={'none'}  bg={'#0066ff'} _hover={{bg: 'blue.600'}}>Subscribe</Button>
    </Flex>
    </Box>
  )
}

export default Footerupper;