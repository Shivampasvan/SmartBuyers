import React from 'react';
import { Box, Flex, Image, Text,VStack } from '@chakra-ui/react';
import Bodyonecard from './Bodyonecard';
import Bodyonecardtwo from './Bodyonecardtwo';

const Bodyone = () => {
  return (
    <>
    <Flex mx={"20"} my={"5"} gap={5}>
    <Box>
        <Image src='https://img.gkbcdn.com/s3/bn/2301/740x670-63d7599d2b40c930200ab207.jpg' alr="best deal"  borderRadius="5" w={530}/>
    </Box>
    <VStack gap={3}>
        <Box border="1px solid silver" borderRadius="5" p={2}>
            <Text fontWeight={600} fontSize={20} >Deal of the Day</Text>
            <Flex px={2} gap={10}>
                <Bodyonecard src="https://img.gkbcdn.com/p/2019-09-27/tronsmart-element-t6-mini-bluetooth-5-0-speaker---black-1571994046957._w280_p1_.jpg" OFF={"29%"} Price={"₹ 2128.63"} SPrice={"₹ 2980.43"} Sold={20} Left={40}/>
                <Bodyonecard src="https://img.gkbcdn.com/p/2017-10-21/c120-6-axis-gyro-2-4g-mini-air-mouse-1571989094158._w280_p1_.jpg" OFF={"10%"} Price={"₹ 765.76"} SPrice={"₹ 850.94"} Sold={80} Left={170}/>
                <Bodyonecard src="https://img.gkbcdn.com/p/2023-02-08/Electric-Air-Duster-Upgraded-Air-Duster-and-Vacuum-Orange-519306-0._w280_p1_.jpg" OFF={"8%"} Price={"₹ 5620.99"} SPrice={"₹ 6132.07"} Sold={50} Left={98}/>
                <Bodyonecard src="https://img.gkbcdn.com/p/2022-06-28/OOLACTIVE-GF-1202-34oz-Motivational-Water-Bottle-with-Straw-507108-0._w280_p1_.jpg" OFF={"7%"} Price={"₹ 1106.48"} SPrice={"₹ 1191.66"} Sold={10} Left={30}/>
            </Flex>
        </Box>
        <Box border="1px solid silver" borderRadius="5" p={2}>
            <Text fontWeight={600} fontSize={20}>Featured Products</Text>
            <Flex p={2} gap={10}>
                <Bodyonecardtwo src="https://img.gkbcdn.com/p/2018-02-07/jvmac-jm-p5-magnetic-wristband-1571977987322._w280_p1_.jpg" name="JVMAC JM-P5" price={"₹ 765.76"} />
                <Bodyonecardtwo src="https://img.gkbcdn.com/p/2019-02-28/xiaomi-wireless-car-charger-20w-power-blcak-1571991489443._w280_p1_.jpg" name="Xiaomi Wireless Car" price={"₹ 3406.32"} />
                <Bodyonecardtwo src="https://img.gkbcdn.com/p/2021-04-12/4inch-32GB-Handheld-Portable-Game-Console-5000-Games-458415-1._w280_p1_.jpg" name="32GB Handheld" price={"₹ 6813.50"} />
                <Bodyonecardtwo src="https://img.gkbcdn.com/p/2018-10-25/xiaomi-aqara-smart-window-door-sensor-white-1574132921215._w280_p1_.jpg" name="Xiaomi Aqara Smart" price={"₹ 1191.66"} />
            </Flex>
        </Box>
    </VStack>
    </Flex>
    </>
  )
}

export default Bodyone;