import React, { useEffect, useState } from "react";
import "./rightDetalis.scss";
import cookie from 'react-cookies';

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
} from '@chakra-ui/react'
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';

function RightDetails({ tour }) {
  const containerStyle = {
    width: "100%",
    height: "300px",
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
const [numberofSets,setSets]=useState("")
  function setschange (e){
    setSets(e.target.value)
    
  }
    const bookings = useSelector((state) => state.bookings.bookings);
    console.log(bookings,"bookings");
  const getSet = (e) => {
    e.preventDefault();
    const user = cookie.load('auth');
    console.log(user,"000");
     if(user){
      console.log(user.user_id,"user.user_id");
      try{
      const bookingss =  axios.get(`${process.env.REACT_APP_BASE_URL}/booking`).then(item =>{
      const theuserBooking=  item.data.filter(item => item.customer_id === user.user_id)
      console.log(bookingss,"theuserBooking");
      })
      }catch(e){
        console.log(e);
      }
   }
   console.log(typeof parseInt(numberofSets),"targee");
    const obj={

      number_of_seats_inTour: parseInt(numberofSets)
    }
    console.log(obj,"objjjj");

    try{
      axios.put(`${process.env.REACT_APP_BASE_URL}/booking`)
    }catch(e){
      console.log(e);
    }
  };

  useEffect(() => {
    const user = cookie.load('user');
    console.log(user,"00");
  }, []);
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
            {/* Add markers for Amman and Irbid */}
            {ammanMarkerPosition && (
              <Marker position={ammanMarkerPosition} title="Amman" />
            )}
            {irbidMarkerPosition && (
              <Marker position={irbidMarkerPosition} title="Irbid" />
            )}

            {/* Display directions on the map */}
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
            color:"black"
          }}
        />     
           <form onSubmit={getSet}>
          <div className="label-input-div">
            <label> starting Date</label>
            <p>{startDate.toLocaleString()} </p>
            
          </div>
          <hr
          style={{
            width: "100%",
            borderWidth: "2px",
            color:"black"
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
            color:"black"
          }}
        />    
          <p className="BookingTour">Tickets</p>
          <hr
          style={{
            width: "100%",
            borderWidth: "2px",
            color:"black"
          }}
        />   
          <div className="label-input-div">
            <label> Ticket price {tour.Seat_price}</label>
            {/* <NumberInput style={{height:"5px"}} defaultValue={1} >
              <NumberInputField  className="chakra-input-tour" />
              <NumberInputStepper >
                
                <NumberIncrementStepper style={{height:"10px"}}/>
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput> */}
            <input name="sets" onChange={setschange}/> 
          </div>
          <hr
          style={{
            width: "100%",
            borderWidth: "2px",
            color:"black"
          }}
        />    


        <Button className="btn-Booking-Now" onClick={getSet}>Booking Now <div>
        <i class="far fa-paper-plane"></i>
          </div></Button>
    
        </form>
      </section>
    </div>
  );
}

export default RightDetails;
