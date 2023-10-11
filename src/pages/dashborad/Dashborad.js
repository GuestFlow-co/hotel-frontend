import React from "react";
import {
  Box,
  Flex,
  Spacer,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import Content from "./dashboradComp/sideBar/content";


function Dashborad() {
  return (
    <div>
    <Content />
    <Spacer />
   < Box p="4">
      {/* Dashboard content */}
      Dashboard Content
    </Box>
    </div>
  )
}

export default Dashborad
