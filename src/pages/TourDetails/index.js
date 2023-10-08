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
  const [tour, setTour] = useState({});
  const [loader, setloader] = useState(false);

  useEffect(() => {
     function fetchData() {
      try {
        const response =  axios.get(`${process.env.REACT_APP_BASE_URL}/tour/${id}`).then(response =>{

          setDetails(response.data.photoUrl );
          setTour(response.data)
          setloader(true)
           console.log(response.data.TourPlan);
        })

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
    fetchData();
  }, []);
  return (
    <div>
      {loader ? (
        <div>
          <Slider photo={details} />
          <div className='tourDetalis-index'>
            <TopSection tour={tour} />
            <section className='description-container'>
              <Detalis tour={tour} />
              <RightDetalis tour={tour} />
            </section>
          </div>
        </div>
      ) : (
        <p>Loading...</p> // You can replace this with your loader component or message
      )}
    </div>
  );
      }

export default TourDetalis
