import React, { useEffect, useState } from "react";
import "./rightDetalis.scss";
import cookie from "react-cookies";
import ReactStars from "react-rating-stars-component";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router-dom";
function RightDetails({ tour }) {
  const { id } = useParams();
  const containerStyle = {
    width: "100%",
    height: "300px",
  };
  const [newRate, setNewRate] = useState();
  const [allcomment, setAllcomment] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const toast = useToast()

  const Addcomment = (e) => {
    console.log("onsubmit");
    e.preventDefault();
    setIsUpdated(false);
    const obj = {
      commentName: e.target.Name.value,
      Email: e.target.Email.value,
      comment: e.target.comment.value,
      Rating: newRate,
      theTour_id: id,
    };
    console.log(obj, "from review");
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/theTourCommnet`, obj)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
    setNewRate(newRating);
  };

  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [ammanMarkerPosition, setAmmanMarkerPosition] = useState(null);
  const [irbidMarkerPosition, setIrbidMarkerPosition] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDeqmOQPJjA_Pg3u-cnJuyCljSqh1EvIs4",
    libraries: ["directions"], // Include the Directions library
  });

  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  // Function to geocode a city name and set the center and marker position
  const geocodeCity = (cityName, setPosition) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: cityName }, (results, status) => {
      if (
        status === "OK" &&
        results[0] &&
        results[0].geometry &&
        results[0].geometry.location
      ) {
        const cityLocation = results[0].geometry.location;
        setPosition({ lat: cityLocation.lat(), lng: cityLocation.lng() });
      } else {
        console.error("Geocoding error:", status);
      }
    });
  };

  // Call the geocodeCity function to set the center and marker positions
  useEffect(() => {
    if (isLoaded) {
      // Replace 'Amman' and 'Irbid' with the city names you want to center the map on
      geocodeCity("Amman", setAmmanMarkerPosition);
      geocodeCity("Irbid", setIrbidMarkerPosition);
    }
  }, [isLoaded]);

  // Calculate and display directions between Amman and Irbid
  useEffect(() => {
    if (ammanMarkerPosition && irbidMarkerPosition && isLoaded) {
      const directionsService = new window.google.maps.DirectionsService();
      const origin = new window.google.maps.LatLng(
        ammanMarkerPosition.lat,
        ammanMarkerPosition.lng
      );
      const destination = new window.google.maps.LatLng(
        irbidMarkerPosition.lat,
        irbidMarkerPosition.lng
      );

      directionsService.route(
        {
          origin,
          destination,
          travelMode: "DRIVING", // You can use other travel modes like 'WALKING', 'BICYCLING', etc.
        },
        (result, status) => {
          if (status === "OK") {
            setDirections(result);
          } else {
            console.error("Directions error:", status);
          }
        }
      );
    }
  }, [ammanMarkerPosition, irbidMarkerPosition, isLoaded]);
  const startDate = new Date(tour.start_date);
  const endDate = new Date(tour.end_date);

  const getSet = (e) => {
    e.preventDefault();
    const user = cookie.load("user");
    const obj = {
      tourId: parseInt(id),
      number_of_seats_inTour: parseInt(value),
    };

    if (user) {
      console.log(user);
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/bookings`)
        .then((response) => {
          const bookingss = response.data;
          const theuserBooking = bookingss.filter(
            (item) => item.customer_id === user.user_id
          );
          const firstBooking = theuserBooking[0];
          console.log( typeof firstBooking.booking_id,firstBooking.booking_id);
          axios
            .put(
              `${process.env.REACT_APP_BASE_URL}/bookings/${firstBooking.booking_id}`,
              obj
            )
            .then((updateResponse) => {
              console.log("Booking updated successfully:", updateResponse.data);
            })
            .catch((updateError) => {
              console.error("Error updating booking:", updateError);
            });
        })
        .catch((error) => {
          console.error("Error fetching bookings:", error);
        });
    }
  };

  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(parseInt(value) + 1);
  };

  const handleDecrement = () => {
    setValue(parseInt(value) - 1);
  };

  return (
    <div className="RightDetalis-container">
      {isLoaded ? (
        <div style={{ backgroundColor: "tomato" }}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {ammanMarkerPosition && (
              <Marker position={ammanMarkerPosition} title="Amman" />
            )}
            {irbidMarkerPosition && (
              <Marker position={irbidMarkerPosition} title="Irbid" />
            )}
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
        </div>
      ) : (
        <></>
      )}
      <section className="form-section-tour">
        <h4 className="BookingTour"> Booking Tour</h4>
        <hr
          style={{
            width: "100%",
            borderWidth: "2px",
            color: "black",
          }}
        />
        <form onSubmit={getSet}>
          <div className="label-input-div">
            <label> Starting Date</label>
            <p>{startDate.toLocaleString()} </p>
          </div>
          <hr
            style={{
              width: "100%",
              borderWidth: "2px",
              color: "black",
            }}
          />
          <div className="label-input-div">
            <label> End Date</label>
            <p>{endDate.toLocaleString()} </p>
          </div>
          <hr
            style={{
              width: "100%",
              borderWidth: "2px",
              color: "black",
            }}
          />
          <p className="BookingTour">Tickets</p>
          <hr
            style={{
              width: "100%",
              borderWidth: "2px",
              color: "black",
            }}
          />
          <div className="label-input-div">
            <label> Ticket price {tour.Seat_price}$</label>
            <NumberInput value={value} defaultValue={1}>
              <NumberInputField
                className="customNumberInputField"
                _hover={{ borderColor: "blue.400" }}
                _focus={{ borderColor: "blue.600", boxShadow: "outline" }}
                paddingX={2}
                paddingY={1}
                fontSize="md"
                fontWeight="semibold"
                color="gray.700"
                bg="white"
                border="1px solid"
                borderColor="gray.300"
                borderRadius="md"
                transition="border-color 0.2s, box-shadow 0.2s"
                maxWidth="100px"
              />{" "}
              <NumberInputStepper style={{ height: "15px" }}>
                <NumberIncrementStepper onClick={handleIncrement} />
                <NumberDecrementStepper onClick={handleDecrement} />
              </NumberInputStepper>
            </NumberInput>
          </div>
          <hr
            style={{
              width: "100%",
              borderWidth: "2px",
              color: "black",
            }}
          />
          <Button type="submit" className="btn-Booking-Now" onClick={() =>
          toast({
            title: `solid toast`,
            variant: "solid",
            isClosable: true,
          })
      }>
            Booking Now{" "}
            <div>
              <i class="far fa-paper-plane"></i>
            </div>
          </Button>
        </form>
      </section>
      <section className="Form-section-detalis">
        <form onSubmit={Addcomment} className="rating-form-detalis">
          <p id="review">Add Review</p>
          <label> Your Name</label>
          <input id="Name" type="text"></input>
          <label> Email</label>
          <input id="Email" type="email"></input>
          <label> Your Comment</label>
          <textarea
            style={{ paddingLeft: "15px", border: "1px solid gray" }}
            id="comment"
          ></textarea>
          <p> How was your experience? </p>
          <div className="stars">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={42}
              activeColor="#ffd700"
            />
          </div>
          <Button type="submit" className="btn-Booking-Now">
            Submit{" "}
            <div>
              <i class="fa-regular fa-star"></i>
            </div>
          </Button>
        </form>
      </section>
    </div>
  );
}

export default RightDetails;
