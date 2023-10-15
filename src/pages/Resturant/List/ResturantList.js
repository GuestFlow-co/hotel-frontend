import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import ResturantItem from "../Items/ResturantItems";
// import hero from "../../../assets/Resturants/5655441.jpg";
// import ResturantFilter from "../Filter";
import {
  Container,
  Box,
  Input,
  Spinner,
  SimpleGrid,
  Card,
  Flex,
  Grid,
} from "@chakra-ui/react";

const ResturantList = () => {
  const loading = useSelector((state) => state.resturants.loading);
  const resturants = useSelector((state) => state.resturants.resturants);
  const [filteredResturants, setFilteredResturants] = useState(resturants);
  const [query, setQuery] = useState("");

  const handleFilter = (filteredData) => {
    setFilteredResturants(filteredData);
  };

  useEffect(() => {
    setFilteredResturants(resturants);
  }, [resturants]);

//   {
//     "Food_id": 1,
//     "foodType": "foodTyp",
//     "foodName": "foodName",
//     "foodPrice": null,//
//     "foodStatus": "Available",
//     "photoUrl": null,
//     "coverPhoto": null,
//     "description": null,
// },

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setQuery(searchText);
    const filteredData = resturants.filter(
      (resturant) =>
        (resturant.foodType &&
          resturant.foodName.toLowerCase().includes(searchText)) ||
        (resturant.description &&
          resturant.description.toLowerCase().includes(searchText)) ||
        (resturant.foodStatus && resturant.foodStatus.toLowerCase().includes(searchText))
    );
    setFilteredResturants(filteredData);
  };

  const ResturantItems = filteredResturants.map((resturant) => (
    <Box key={resturant.Food_id} p={7} lg={4} md={6} sm={12}>
      <Card>
        <Box>
          {/* <ResturantItem resturant={resturant} /> */}
        </Box>
      </Card>
    </Box>
  ));

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      minHeight="100vh"
      pl={"-1%"}
    >
      {/* <img
        src={hero}
        alt={`Resturant Image`}
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      /> */}
      <Input
        placeholder="Search for a resturant"
        onChange={handleSearch}
        value={query}
        size="md"
        borderColor="BROWN"
        backgroundColor="white"
        _placeholder={{ color: "gray.500" }}
        borderRadius="5%"
        width="25%"
        height={1}
        paddingLeft={3}
        position="absolute"
        top="8%"
        left="30%"
        transform="translateX(-50%)"
      />
      <Grid mb={3}>
        <Flex>
          {/* <ResturantFilter resturants={resturants} onFilter={handleFilter} /> */}
        </Flex>
      </Grid>
      <SimpleGrid columns={3} spacing={3}>
        {ResturantItems}
      </SimpleGrid>
      {loading && (
        <Flex justifyContent="center" mt={4}>
          <Spinner size="md" color="teal.500" emptyColor="gray.200" />
        </Flex>
      )}
    </Flex>
  );
};

export default ResturantList;
