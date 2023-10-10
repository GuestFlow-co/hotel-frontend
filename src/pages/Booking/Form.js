import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';

// Define custom Chakra UI theme with brown color
const theme = extendTheme({
  colors: {
    brown: {
      50: '#f5e6d6',
      100: '#ebd2b9',
      200: '#e1be9c',
      300: '#d7aa7f',
      400: '#cd9662',
      500: '#c38245',
      600: '#b96e28',
      700: '#af5a0b',
      800: '#a54600',
      900: '#8c3c00',
    },
  },
});

function HotelBookingForm() {
  // State for form inputs
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [numRooms, setNumRooms] = useState(1);
  const [numPeople, setNumPeople] = useState(1);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form data, e.g., submit to an API or process it as needed
  };

  return (
    <ChakraProvider theme={theme}>
      <Box p={4} borderRadius="md" bg= 'rgba(223, 215, 191, 0.45)' boxShadow="lg" maxW="md" mx="auto">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Check-in Date</FormLabel>
              <Input
                type="date"
                value={checkinDate}
                onChange={(e) => setCheckinDate(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Check-out Date</FormLabel>
              <Input
                type="date"
                value={checkoutDate}
                onChange={(e) => setCheckoutDate(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Number of Rooms</FormLabel>
              <Select
                value={numRooms}
                onChange={(e) => setNumRooms(e.target.value)}
                required
              >
                {[1, 2, 3, 4, 5].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Number of People</FormLabel>
              <Select
                value={numPeople}
                onChange={(e) => setNumPeople(e.target.value)}
                required
              >
                {[1, 2, 3, 4, 5].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </FormControl>
            <Button type="submit" colorScheme="brown">
              Book Now
            </Button>
          </VStack>
        </form>
      </Box>
    </ChakraProvider>
  );
}

export default HotelBookingForm;
