import React from 'react'
import Slider from './TourDetails-comp/Slider/Slider'
import TopSection from './TourDetails-comp/topSection/TopSection';
import axios from "axios";
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './style.scss'
import Detalis from './TourDetails-comp/detalis/detalis';
import RightDetalis from './TourDetails-comp/detalis/right-detalis/rightDetalis';
function TourDetalis() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [tour, setTour] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/tour/${id}`);
        setDetails(response.data.photoUrl );
        setTour(response.data)
        // console.log(response.data);
        console.log(response.data.TourPlan);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
    fetchData();
    console.log(details);
  }, []);
  return (
    <div>

    <Slider photo={details}/>
    <div className='tourDetalis-index'>
      <TopSection tour={tour} />
      <section className='description-container'>
      <Detalis tour={tour} />
       <RightDetalis tour={tour} />
      </section>

    </div>
    </div>
  )
}

export default TourDetalis
