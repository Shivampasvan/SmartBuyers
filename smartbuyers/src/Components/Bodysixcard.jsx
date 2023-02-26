import { Box,Flex,Image } from '@chakra-ui/react';
import React from 'react'
import Bodyfourchildcard from './Bodyfourchildcard';

const Details = [
    {src:"https://img.gkbcdn.com/p/2022-08-31/tronsmart-bang-mini-wireless-speaker-a72b63-1661942906103._w280_p1_.jpg",
    OFF:"",
    Product:"Tronsmart Bang Mini 50W Portable Party Speaker", 
    Price:"₹ 7665.29", 
    SPrice:""},

    {src:"https://img.gkbcdn.com/p/2022-05-30/tronsmart-element-groove-bluetooth-speaker-black-bbd0c8-1653893706349._w280_p1_.jpg",
    OFF:"",
    Product:"Tronsmart Groove 2 10W TWS Bluetooth Speaker", 
    Price:"₹ 2980.43", 
    SPrice:""},

    {src:"https://img.gkbcdn.com/p/2022-02-25/Tronsmart-Force-Max-Outdoor-Speaker-497187-1._w280_p1_.jpg",
    OFF:"",
    Product:"Tronsmart Force Max 80W Portable Outdoor", 
    Price:"₹ 10220.68", 
    SPrice:""},

    {src:"https://img.gkbcdn.com/p/2022-06-28/Tronsmart--T7-507089-0._w280_p1_.jpg",
    OFF:"27%",
    Product:"Tronsmart T7 Portable Bluetooth Speaker with", 
    Price:"₹ 3661.86", 
    SPrice:"₹5024.73"}
]

const Bodysixcard = () => {
  return (
    <Flex gap={5}>
        <Box>
            <Image height={"auto"} width={590} borderRadius="5px 0 0 5px" src='https://img.gkbcdn.com/bb/tronsmart-20221007152616686._p1_.jpg'/>
        </Box>
        <Flex>
            {
                Details.map((el)=><Bodyfourchildcard key={el.Product} {...el}/>)
            }
        </Flex>
    </Flex>
  )
};

export default Bodysixcard;