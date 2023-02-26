import React from 'react';
import { Box,Text,SimpleGrid } from "@chakra-ui/react";
import Bodytwocard from './Bodytwocard';

const Bodytwo = () => {
  return (
    <Box fontFamily={"Open Sans, sans-serif, Arial, Helvetica"} mx={20}>
    <Box>
        <Text fontWeight={700} fontSize="18px" my={3}>Trending Categories</Text>
    </Box>
    <Box>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>

            <Bodytwocard src="https://img.gkbcdn.com/s3/bn/2301/dyads11dog2-63c66dea2b40c939489cd456.gif" heading="Smart Home & Garden" text="Smart cleaning robots and vacuums, living room furniture, patio & garden supplies, up to 60% off!"/>

            <Bodytwocard src="https://img.gkbcdn.com/bn/2212/488x274-63998a412b40c92ac0082d77._p1_.jpg" heading="E-transport" text="New e-rides for less. Skip gas prices with electric bikes, scooters & beyond."/>

            <Bodytwocard src="https://img.gkbcdn.com/bn/2205/3d488x274-62958bbe2b40c9241c538d77._p1_.jpg" heading="3D Printers" text="3D printers allow you to bring digitally modeled designs to life by using highly detailed filament printing."/>

        </SimpleGrid>
    </Box>
    </Box>
  )
}

export default Bodytwo;