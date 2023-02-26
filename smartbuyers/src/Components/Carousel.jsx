import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Text,
  Link,
  HStack
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState() ;

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'ENGWE T14 Folding Electric Bicycle',
      text:
        "Waveshare 2.8inch Capacitive Touch Display for Raspberry Pi, 480x640,",
      image:
        'https://img.gkbcdn.com/s3/d/202208/96da7b59-42fb-4b57-9244-c4a5d51c2a92.jpg',
    },
    {
      image:
        'https://img.gkbcdn.com/s3/d/202202/BMAX-Y13-13-3--Laptop-Intel--Gemini-Lake-N4120-8GB-256GB-EU-Plug-497175-0.jpg',
    },
    {
      image:
        'https://img.gkbcdn.com/s3/d/202202/BMAX-Y13-13-3--Laptop-Intel--Gemini-Lake-N4120-8GB-256GB-EU-Plug-497175-11.jpg',
    },
  ];

  return (
    <Box mx={"20"} my={"5"} fontFamily={"Open Sans, sans-serif, Arial, Helvetica"}>
    <HStack gap={5}>
        <Text fontWeight={700} fontSize="18px" my={3}>New For You</Text>
        <Link textDecoration={"none"} color={"blue.600"} fontSize="14px">See More</Link>
    </HStack>    

    <Box
      position={'relative'}
      height={'400px'}
      overflow={'hidden'}
      borderRadius={"5"}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <ArrowCircleLeftIcon size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <ArrowCircleRightIcon size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'md'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
          </Box>
        ))}
      </Slider>
    </Box>
    </Box>
  );
  
}