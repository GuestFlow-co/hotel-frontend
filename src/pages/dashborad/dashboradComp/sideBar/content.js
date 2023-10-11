import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Content() {
  return (
    <div>
      <Box w="250px" bg="blue.500" h="100vh" color="white" p="4" boxShadow="md">
        {/* Sidebar content */}
        
        <Link> Home</Link>
        <Link> Booking</Link>
        <Link>Rooms</Link>
        <Link>Tour</Link>
      </Box>
    </div>
  );
}

export default Content;
