// import React from "react";
// import { useSelector } from "react-redux";
// import { Grid, Box, Flex, Stack, Text } from "@chakra-ui/react";
// import {
//   FaWifi,
//   FaUtensils,
//   FaTv,
//   FaBath,
//   FaCoffee,
// } from "react-icons/fa";
// import { FaKitchenSet } from "react-icons/fa6";
// import { MdBalcony, MdRoomService } from "react-icons/md";
// import { GiSlippers } from "react-icons/gi";
// import { SiSmartthings } from "react-icons/si";
// import { useParams } from "react-router-dom";

// const amenitiess = [
//   {
//     image: <FaWifi />,
//     feature: "Wi-Fi",
//   },
//   {
//     image: <SiSmartthings />,
//     feature: "Smart Controls",
//   },
//   {
//     image: <FaKitchenSet />,
//     feature: "Mini Kitchenette",
//   },
//   {
//     image: <FaTv />,
//     feature: "TV",
//   },
//   {
//     image: <MdBalcony />,
//     feature: "Balcony or Terrace",
//   },
//   {
//     image: <FaBath />,
//     feature: "Spa Bathrooms",
//   },
//   {
//     image: <FaCoffee />,
//     feature: "Nespresso Machine",
//   },
//   {
//     image: <GiSlippers />,
//     feature: "Robes and Slippers",
//   },
//   {
//     image: <MdRoomService />,
//     feature: "Room Service Options",
//   },
// ];

// const Amenities = () => {
//   const { room_number } = useParams();
//   const rooms = useSelector((state) => state.rooms.rooms);
//   const room = rooms.find((x) => x.room_number === room_number);
//   const roomFeatures = room.features || [];
//    console.log(roomFeatures,"roooooooooooooooooooom")
//   return (
//     <div>
//     <br/>
//       <h3 style={{paddingBottom:"25px"}}>Room Amenities</h3>
//       <Grid templateColumns="repeat(3, 1fr)" gap={4}>
//         {amenitiess
//           .filter((amenity) =>
//             roomFeatures.some((roomFeature) => roomFeature.feature_name === amenity.feature)
//           )
//           .map((amenity, index) => (
//             <Box key={index} overflow="hidden" p={4} boxShadow="md" maxW="300px" style={{background:'#fff',display:"flex"}}>
//               <Flex mt={4} justify="space-between">
//                 <Stack spacing={2} direction="row">
//                   <Flex align="center">
//                     <div style={{padding:"10px"}}>{amenity.image}</div>
//                     <Text>{amenity.feature}</Text>
//                   </Flex>
//                 </Stack>
//               </Flex>
//             </Box>
//           ))}
//       </Grid>
//       <br/>
//       <br/>
//     </div>
//   );
// };

// export default Amenities;
import React from "react";
import { useSelector } from "react-redux";
import { Grid, Box, Flex, Stack, Text } from "@chakra-ui/react";
import {
  FaWifi,
  FaUtensils,
  FaTv,
  FaBath,
  FaCoffee,
} from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { MdBalcony, MdRoomService } from "react-icons/md";
import { GiSlippers } from "react-icons/gi";
import { SiSmartthings } from "react-icons/si";
import { useParams } from "react-router-dom";

const amenities = [
  {
    image: <FaWifi />,
    feature: "Wi-Fi",
  },
  {
    image: <SiSmartthings />,
    feature: "Smart Controls",
  },
  {
    image: <FaKitchenSet />,
    feature: "Mini Kitchenette",
  },
  {
    image: <FaTv />,
    feature: "TV",
  },
  {
    image: <MdBalcony />,
    feature: "Balcony or Terrace",
  },
  {
    image: <FaBath />,
    feature: "Spa Bathrooms",
  },
  {
    image: <FaCoffee />,
    feature: "Nespresso Machine",
  },
  {
    image: <GiSlippers />,
    feature: "Robes and Slippers",
  },
  {
    image: <MdRoomService />,
    feature: "Room Service Options",
  },
];


const Amenities = () => {
  const { room_number } = useParams();
  const rooms = useSelector((state) => state.rooms.rooms);
  const room = rooms.find((x) => x.room_number === room_number);
  const roomFeatures = room.features || [];

  // Function to get a random number of amenities for each room
  const getRandomAmenities = (arr) => {
    const shuffled = arr.sort(() => Math.random() - 0.5);
    const randomLength = Math.floor(Math.random() * (shuffled.length + 1));
    return shuffled.slice(0, randomLength);
  };

  // Get random amenities for the current room
  const randomAmenities = getRandomAmenities(amenities);

  return (
    <div>
      <br />
      <h3 style={{ paddingBottom: "25px" }}>Room Amenities</h3>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {randomAmenities.map((amenity, index) => (
          <Box key={index} overflow="hidden" p={4} boxShadow="md" maxW="300px" style={{ background: '#fff', display: "flex" }}>
            <Flex mt={4} justify="space-between">
              <Stack spacing={2} direction="row">
                <Flex align="center">
                  <div style={{ padding: "10px" }}>{amenity.image}</div>
                  <Text>{amenity.feature}</Text>
                </Flex>
              </Stack>
            </Flex>
          </Box>
        ))}
      </Grid>
      <br />
      <br />
    </div>
  );
};


export default Amenities;
