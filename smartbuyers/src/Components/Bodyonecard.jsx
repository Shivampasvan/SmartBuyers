import React from 'react';
import { Progress,Text,Tag,Image, Box } from '@chakra-ui/react';

const Bodyonecard = ({src,OFF,Price,SPrice,Sold,Left}) => {
  return (
    <>
        <Box >
            <Box>
                <Image src={src} w={120}/>
            </Box>
            <Box>
            <Box lineHeight="1.2">
            <Tag variant='solid' px={5} bg='red' color={"white"} borderRadius="20">{OFF} OFF</Tag>
            <Text fontWeight={700} fontSize="15px">{Price}</Text>
            <Text as='s' fontSize="14px" color={"gray"}>{SPrice}</Text>
            </Box>
            <Box mt={2}>
            <Progress h={2} border=".5px solid silver" borderRadius={2} value={Sold} />
            <Text fontSize="12px" color={"gray"}>{Left} Left</Text>
            </Box>
            </Box>
        </Box>
    </>
  )
}

export default Bodyonecard;