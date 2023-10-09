import React, { useState } from 'react';
import { Box, Image, Flex, Button } from '@chakra-ui/react';

const HeroRoom = ({ images,room }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  images= room.photoUrl
  
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box position="relative" w="70%" height="150px" paddingTop={20}>
      <Image
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
        objectFit="cover"
        w="100%"
        h="100%"
      />
      <Flex
        justify="space-between"
        position="absolute"
        w="100%"
        bottom="1rem"
        p="1rem"
      >
        <Button onClick={prevImage} colorScheme="teal" variant="outline">
          Previous
        </Button>
        <Button onClick={nextImage} colorScheme="teal" variant="outline">
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default HeroRoom;
