import {
    Text,
    Link,
    Divider, 
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,HStack,Box,VStack
  } from '@chakra-ui/react';
  import { ChatIcon,DragHandleIcon,InfoOutlineIcon } from '@chakra-ui/icons'

const TopNavbar = () => {
  return (
    <>
    <Flex p="10px" bg="rgb(10,110,254)" gap={10} pr="80px" justifyContent="flex-end" fontFamily={"Open Sans, sans-serif, Arial, Helvetica"}>

        <Menu m="10px">
            <MenuButton as={Text} color="white" >
                Save $50 with App
            </MenuButton>
            <MenuList>
                <MenuItem><Link>Download app to get up to 70% off</Link></MenuItem>
                <MenuItem>
                <HStack>
                    <Box>
                        <Image src="https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png"/>
                    </Box>
                    <VStack>
                    <Image borderRadius="5" src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg"/>
                    <Image borderRadius="5" src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg"/>
                    <Image borderRadius="5" src="https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg"/>
                    </VStack>
                </HStack>
                </MenuItem>
                <Divider/>
                <MenuItem mt={3}><Link>Go to Mobile Site</Link></MenuItem>
            </MenuList>
        </Menu>

        <Menu w="10px" m="10px">
            <MenuButton as={Text} color="white" >
                Language
            </MenuButton>
        <MenuList w='10px'>
            <MenuItem>English</MenuItem>
            <MenuItem>Ελληνικά</MenuItem>
            <MenuItem>Deutsch</MenuItem>
            <MenuItem>Español</MenuItem>
            <MenuItem>Français</MenuItem>
            <MenuItem>Português</MenuItem>
            <MenuItem>Slovenčina</MenuItem>
            <MenuItem>Magyar</MenuItem>
            <MenuItem>Slovenščina</MenuItem>
            <MenuItem>Lietuvių kalba</MenuItem>
            <MenuItem>Italiano</MenuItem>
            <MenuItem>עברית</MenuItem>
            <MenuItem>Limba română</MenuItem>
            <MenuItem>Japanese</MenuItem>
            <MenuItem>Dansk</MenuItem>
        </MenuList>
        </Menu>

        <Menu m="10px">
        <MenuButton as={Text} color="white">
            Support Center 
        </MenuButton>
        <MenuList p={3}>
            <MenuItem gap={3}><ChatIcon />Live Chat</MenuItem>
            <MenuItem gap={3}><DragHandleIcon/>Ticket</MenuItem>
            <MenuItem gap={3}><InfoOutlineIcon/> Help Center</MenuItem>
        </MenuList>
        </Menu>
</Flex>
<Divider/>
</>
  )
}

export default TopNavbar;
