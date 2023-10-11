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
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { useParams } from "react-router-dom";

function Detalis({ tour }) {
  const { id } = useParams();

  const [selected, setSelected] = useState("");
  const [newRate, setNewRate] = useState()
  const [allcomment, setAllcomment] = useState([])
  // const [updated, setupdated] = useState(false)

  const ratingChanged = (newRating) => {
    console.log(newRating);
    setNewRate(newRating)

  };

  useEffect(() => {

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/theTourCommnet`)
      .then((res) => {
      //  const thetourcomment= 
        setAllcomment(res.data.filter(comment => comment.theTour_id === parseInt(id) ));
       

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
      <section className="review-section">
                <div className="main-div-review">
                  <h3>Rivews</h3>
                  <div className="under-header">
                    <div className="review-cards">
                      {allcomment.map((review) => {
                        console.log(review);
                        return (

                          <div class="card-body py-4 mt-2"
                            className="inside-card">
                          <p class="font-weight-bold my-3">{review.Email}</p>

                            <p class="font-weight-bold">{review.commentName}</p>
                            <ReactStars
                              count={5}
                              onChange={ratingChanged}
                              size={25}
                              activeColor="#ffd700"
                              value={review.Rating}
                              edit={false}

                            />

                            <p class="mb-2">
                              <i class="fas fa-quote-left pe-2"></i>{review.comment}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </section>
    </div>
  );
}

export default Detalis;
