import { Box,Flex,Image } from '@chakra-ui/react';
import React from 'react'
import Bodyfourchildcard from './Bodyfourchildcard';

const Details = [
    {src:"https://img.gkbcdn.com/p/2021-10-21/KAIWEETS-HT206D-Digital-Clamp-Meter-475003-0._w280_p1_.jpg",
    OFF:"20%",
    Product:"KAIWEETS HT206D Digital Clamp Meter, LowZ & LPF", 
    Price:"₹ 3150.79", 
    SPrice:"₹ 3917.40"},

    {src:"https://img.gkbcdn.com/p/2022-08-31/kaiweets-digital-multimeter-trms-6000-counts---c72b4d-1661925787017._w280_p1_.jpg",
    OFF:"",
    Product:"KAIWEETS HT118A Digital Multimeter TRMS", 
    Price:"₹ 3661.86", 
    SPrice:""},

    {src:"https://img.gkbcdn.com/p/2021-10-18/KAIWEETS-KM601-Digital-Multimeter-474552-0._w280_p1_.jpg",
    OFF:"26%",
    Product:"KAIWEETS KM601 Digital Multimeter 10000 Counts", 
    Price:"₹ 3321.14", 
    SPrice:"₹ 4513.66"},

    {src:"https://img.gkbcdn.com/p/2021-10-18/KAIWEETS-KET01-Multimeter-Test-Leads-Kit-474544-0._w280_p1_.jpg",
    OFF:"",
    Product:"KAIWEETS KET01 Multimeter Test Leads Kit", 
    Price:"₹ 1362.02", 
    SPrice:""}
]


const Bodyfourcard = () => {
  return (
    <Flex gap={5}>
        <Box>
            <Image height={"auto"} width={590} borderRadius="5px 0 0 5px" src='https://img.gkbcdn.com/bb/kaiweets-20221007152715167._p1_.jpg'/>
        </Box>
        <Flex>
            {
                Details.map((el)=><Bodyfourchildcard key={el.Product} {...el}/>)
            }
        </Flex>
    </Flex>
  )
};

export default Bodyfourcard;