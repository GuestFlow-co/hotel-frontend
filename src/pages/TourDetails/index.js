import React from 'react'
import Slider from './TourDetails-comp/Slider/Slider'
import TopSection from './TourDetails-comp/topSection/TopSection';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './style.scss'
import Detalis from './TourDetails-comp/detalis/detalis';
import RightDetalis from './TourDetails-comp/detalis/right-detalis/rightDetalis';
function TourDetalis() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [tour, setTour] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isupdated, setupdated] = useState(false);

  
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    function fetchData() {
      try {
        const response = axios.get(`${process.env.REACT_APP_BASE_URL}/tour/${id}`).then(response => {
          
          setupdated(false)
          setDetails(response.data.photoUrl);
          setTour(response.data)
          //  console.log(response.data.TourPlan);
        })

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [isupdated]);
  return (
    <div>
    {isLoading ? ( 
        <div className='preloader'></div>
      ) : (
        <div>
          <Slider photo={details} />
          <div className='tourDetalis-index'>
            <TopSection tour={tour} />
            <section className='description-container'>
              <Detalis tour={tour} isupdated={isupdated}/>
              <RightDetalis tour={tour} setupdated={setupdated} isupdated={isupdated}/>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default TourDetalis
