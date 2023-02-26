import { Box,Image,Tag,Text } from '@chakra-ui/react';
import React from 'react'

const Bodyfourchildcard = ({src,OFF,Product,Price,SPrice}) => {
  return (
    <>
        <Box mt={1}>
            <Box m={2}>
                <Image src={src} w={150}/>
            </Box>
            <Box>
            <Box lineHeight="1.2">
            {OFF ? <Tag variant='solid' px={5} bg='red' color={"white"} borderRadius="20">{OFF} OFF</Tag> : ""}
            <Text fontSize="13px" >{Product}</Text>
            <Text fontWeight={700} fontSize="15px">{Price}</Text>
            {SPrice ? <Text as='s' fontSize="14px" color={"gray"}>{SPrice}</Text> : ""}
            </Box>
            </Box>
        </Box>
    </>
  )
}

export default Bodyfourchildcard;