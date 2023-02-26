import { Box,Flex,Image } from '@chakra-ui/react';
import React from 'react'
import Bodyfourchildcard from './Bodyfourchildcard';

const Details = [
    {src:"https://img.gkbcdn.com/p/2022-03-02/creality-ender-3-s1-pro-3d-printer-c9e30b-1646215071933._w280_p1_.jpg",
    OFF:"",
    Product:"Creality Ender-3 S1 Pro 3D Printer, Sprite Full Metal", 
    Price:"₹ 47496.89", 
    SPrice:""},

    {src:"https://img.gkbcdn.com/p/2022-07-09/creality-ender-3-v2-3d-printer-with-upgraded-32-bit-silent-motherboard-732f54-1657351329700._w280_.JPG",
    OFF:"4%",
    Product:"Creality Ender-3 V2 Neo 3D Printer, CR Touch", 
    Price:"₹ 32666.81", 
    SPrice:"₹ 33986.58"},

    {src:"https://img.gkbcdn.com/p/2022-07-06/Creality-Ender-3-Max-Neo-3D-Printer-507593-0._w280_p1_.jpg",
    OFF:"2%",
    Product:"Creality Ender-3 Max Neo 3D Printer, CR Touch", 
    Price:"₹ 39036.36", 
    SPrice:"₹ 39949.14"},

    {src:"https://img.gkbcdn.com/p/2022-10-31/creality-ender-3-s1-3d-printer-303cda-1667202443810._w280_p1_.jpg",
    OFF:"",
    Product:"Creality Ender-5 S1 3D Printer, 250mm/s, Sprite", 
    Price:"₹ 47615.28", 
    SPrice:""}
]

const Bodyeightcard = () => {
  return (
    <Flex gap={5}>
        <Box>
            <Image height={"auto"} width={590} borderRadius="5px 0 0 5px" src='https://img.gkbcdn.com/bb/creality-20221007150037712._p1_.jpg'/>
        </Box>
        <Flex>
            {
                Details.map((el)=><Bodyfourchildcard key={el.Product} {...el}/>)
            }
        </Flex>
    </Flex>
  )
};

export default Bodyeightcard;