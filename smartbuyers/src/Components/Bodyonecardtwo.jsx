import React from 'react';
import {Text,Image, Box } from '@chakra-ui/react';

const Bodyonecardtwo = ({src,name,price}) => {
  return (
    <>
        <Box >
            <Box>
                <Image src={src} w={120}/>
            </Box>
            <Box>
            <Box lineHeight="1.2">
            <Text fontSize="14px">{name}</Text>
            <Text fontWeight={700} fontSize="15px">{price}</Text>
            </Box>
            </Box>
        </Box>
    </>
  )
}

export default Bodyonecardtwo;