import React from "react";
import {
  Box,
  Flex,
  Spacer,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";


function Dashborad() {
  return (
    <div>
     <Box
      w="250px"
      bg="blue.500"
      h="100vh"
      color="white"
      p="4"
      boxShadow="md"
    >
      {/* Sidebar content */}
      Sidebar Content
    </Box>
    <Spacer />
   < Box p="4">
      {/* Dashboard content */}
      Dashboard Content
    </Box>
    </div>
  )
}

export default Dashborad
