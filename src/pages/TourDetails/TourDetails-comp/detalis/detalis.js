import React, { useState, useEffect } from "react";
import "./details.scss";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  VStack,
  Stack,
  Text,
} from "@chakra-ui/react";

function Detalis({ tour }) {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(tour.TourPlan.days[0].day);
  }, []);
  console.log(selected);
  return (
    <div className="tour-description">
      <p className="thedetlais-headers">Explore Tours</p>
      <p>{tour.description}</p>
      <section>
        <p className="thedetlais-headers"> Tour Plan</p>
        <p> {tour.TourPlan.description}</p>
        <div>
          <ButtonGroup variant={"outline"} className="ButtonGroup-tourPlan">
            {tour.TourPlan.days.map((option) => (
              <Button
              className="ButtonGroup-button"
                color={selected === option.day ? "#63ab45" : "gray"}
                // backgroundColor={selected === option.day ? "red" : "gray"}
                onClick={() => setSelected(option.day)}
              >
                {option.day}
              </Button>
            ))}
          </ButtonGroup>
          <Stack>
            {tour.TourPlan.days
              .filter((exp) => exp.day.includes(selected))
              .map((exp) => (
                <div>
                  <Card key={exp.day}>
                    <CardBody>
                      <Box px={4} textAlign={"left"}>
                        <Text >{exp.content}</Text>
                      </Box>
                    </CardBody>
                    <CardFooter>
                      <VStack spacing={2}></VStack>
                    </CardFooter>
                  </Card>
                </div>
              ))}
          </Stack>
        </div>
      </section>
    </div>
  );
}

export default Detalis;
