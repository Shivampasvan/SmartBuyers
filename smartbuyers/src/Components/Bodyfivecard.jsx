import { Box,Flex,Image } from '@chakra-ui/react';
import React from 'react'
import Bodyfourchildcard from './Bodyfourchildcard';

const Details = [
    {src:"https://img.gkbcdn.com/p/2022-06-14/ILIFE-V8-Plus-Robot-Vacuum-Cleaner-EU-Plug-503291-0._w280_p1_.jpg",
    OFF:"64%",
    Product:"ILIFE V8 Plus Robot Vacuum Cleaner 1000Pa", 
    Price:"₹ 7665.29", 
    SPrice:"₹ 21294.00"},

    {src:"https://img.gkbcdn.com/p/2022-12-02/ILIFE-W400-Floor-Washing-Robot-EU-Plug-518502-0._w280_p1_.jpg",
    OFF:"29%",
    Product:"ILIFE W400 Floor Washing Robot 1000Pa Suction", 
    Price:"₹ 10220.68", 
    SPrice:"₹ 14479.65"},

    {src:"https://img.gkbcdn.com/p/2022-06-15/ILIFE-B5-Max-Robot-Vacuum-Cleaner-504827-0._w280_p1_.jpg",
    OFF:"53%",
    Product:"ILIFE B5 Max Robot Vacuum Cleaner 2000Pa", 
    Price:"₹ 11924.26", 
    SPrice:"₹ 25552.97"},

    {src:"https://img.gkbcdn.com/p/2022-06-14/EASINE-by-ILIFE-G80-Cordless-Stick-Vacuum-Cleaner-502887-0._w280_p1_.jpg",
    OFF:"40%",
    Product:"EASINE by ILIFE G80 Cordless Handheld", 
    Price:"₹ 10220.68", 
    SPrice:"₹ 17035.03"}
]

const Bodyfivecard = () => {
  return (
    <Flex gap={5}>
        <Box>
            <Image height={"auto"} width={550} borderRadius="5px 0 0 5px" src='https://img.gkbcdn.com/bb/ilife-20221228174012123._p1_.jpg'/>
        </Box>
        <Flex>
            {
                Details.map((el)=><Bodyfourchildcard key={el.Product} {...el}/>)
            }
        </Flex>
    </Flex>
  )
};

export default Bodyfivecard;