import { Box,Flex,Image } from '@chakra-ui/react';
import React from 'react'
import Bodyfourchildcard from './Bodyfourchildcard';

const Details = [
    {src:"https://img.gkbcdn.com/p/2021-12-22/SCULPFUN-S9-Laser-Engraver-481991-0._w280_p1_.jpg",
    OFF:"36%",
    Product:"SCULPFUN S9 5.5W Laser Engraver, 0.06mm Ultra-", 
    Price:"₹ 21720.75", 
    SPrice:"₹ 34070.91"},

    {src:"https://img.gkbcdn.com/p/2022-12-24/sculpfun-s30-pro-10w-laser-engraver-cutter-7a31b2-1671852910598._w280_p1_.jpg",
    OFF:"9%",
    Product:"SCULPFUN S30 Pro 10W Laser Engraver Cutter,", 
    Price:"₹ 40800.93", 
    SPrice:"₹ 45059.90"},

    {src:"https://img.gkbcdn.com/p/2022-12-24/sculpfun-s30-pro-max-20w-laser-engraver-cutter-958862-1671852745852._w280_.JPG",
    OFF:"9%",
    Product:"SCULPFUN S30 Pro Max 20W Laser Engraver", 
    Price:"₹ 71891.41", 
    SPrice:"₹ 79124.85"},

    {src:"https://img.gkbcdn.com/p/2022-05-12/Sculpfun-S10-Laser-Engraver-500429-0._w280_p1_.jpg",
    OFF:"43%",
    Product:"SCULPFUN S10 10W Laser Engraver Cutter, 0.08mm", 
    Price:"₹ 33986.58", 
    SPrice:"₹ 59280.60"}
]

const Bodysevencard = () => {
  return (
    <Flex gap={5}>
        <Box>
            <Image height={"auto"} width={600} borderRadius="5px 0 0 5px" src='https://img.gkbcdn.com/bb/sculpfun-20221007152503762._p1_.jpg'/>
        </Box>
        <Flex>
            {
                Details.map((el)=><Bodyfourchildcard key={el.Product} {...el}/>)
            }
        </Flex>
    </Flex>
  )
};

export default Bodysevencard;