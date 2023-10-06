import React from 'react'
import Slider from './TourDetails-comp/Slider/Slider'
import TopSection from './TourDetails-comp/topSection/TopSection';
import axios from "axios";
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './style.scss'
function TourDetalis() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [tour, setTour] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3000/tour/${id}`);
        setDetails(response.data.photoUrl );
        setTour(response.data)
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
    fetchData();
    console.log(details);
  }, []);
  return (
    <div className='tourDetalis-index'>
      <Slider photo={details}/>
      <TopSection tour={tour} />
    </div>
  )
}

export default TourDetalis
