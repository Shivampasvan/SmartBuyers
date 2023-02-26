import { Text,Menu,MenuButton,MenuList,MenuItem,HStack,VStack,Flex,Link } from '@chakra-ui/react';
import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';


const BottomNavbar = () => {
  return (
    <>
    <Flex fontWeight={500} fontSize={16} color="white" bg="rgb(10,110,254)" pl={"40"} >
        <Flex gap={10}>
            <Menu w="10px" >
                <MenuButton bg="rgb(66,141,255)" px={"4"} as={Text} py="1" borderRadius={5}>
                    <HamburgerIcon/>
                    Categories
                </MenuButton>
            <MenuList color="black">
                <HStack>
                    <VStack>
                        <MenuItem>Local Warehouses</MenuItem>
                        <MenuItem>Sports & Outdoors</MenuItem>
                        <MenuItem>Smart Home & Garder</MenuItem>
                        <MenuItem>Consumer Electronics</MenuItem>
                        <MenuItem>Generator & Portable Power</MenuItem>
                        <MenuItem>Computers, Tablets & Accessories</MenuItem>
                    </VStack>
                    <VStack>
                        <MenuItem>TV Boxes & Mini PCs</MenuItem>
                        <MenuItem>Toys & Hobbies</MenuItem>
                        <MenuItem>Phone Accessesories</MenuItem>
                        <MenuItem>Automobiles & Motorcycles</MenuItem>
                        <MenuItem>Security Systems</MenuItem>
                        <MenuItem>Wearable Devices</MenuItem>
                    </VStack>
                </HStack>
                
            </MenuList>
            </Menu>
            <Link>New</Link>
            <Link>Bestselling</Link>
            <Link>Brand</Link>
            <Link>Clearance</Link>
            <Link>Deals</Link>
            <Link>Coupon</Link>
            <Link>App Only</Link>
        </Flex>
    </Flex>    
    </>
  )
}

export default BottomNavbar;