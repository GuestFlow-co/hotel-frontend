import React, {useContext, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import data from '../../data.json';
import "./cardsTour.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { Pagination, PaginationItem, PaginationLink, Box } from '@chakra-ui/react';

function TourCards() {
  const [res, setData] = useState([])

  function calculateDuration(startDate, endDate) {
    const durationMs = new Date(endDate) - new Date(startDate);
    const durationDays = durationMs / (1000 * 60 * 60 * 24);
    return durationDays;
  }
  
  useEffect(() => {
    // const baseURL = process.env.REACT_APP_BASE_URL; 

    axios.get("http://localhost:3000/tour").then(res => {
      setData(res.data);
      console.log(res.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
  });
  },[])

  let arr = [1,2,3,4];
  return (
    <div className="main-card-tour">
      <section className="cards-tour-section">
        {res.map((item) => (
          <div className="theTourCard">
            <div>
              <img className="tour-card-image" src={item.coverPhoto}  />
            </div>

            <div className="info-tour-card">
              <section style={{display:"flex",alignItems:"center"}}>
              <ReactStars
                count={5}
                size={25}
                activeColor="rgb(247,146,30)"
                value={item.Rating}
                edit={false}
                isHalf={true}
                /> <p> ({item.Rating})</p>
                </section>

              <p style={{fontSize:"18px",fontWeight:"700"}}> {item.Title}</p>
              <p><i className="fa-solid fa-location-dot"></i> {item.location}</p>
              <p><i class="fa-solid fa-sack-dollar"></i> Price: {item.Seat_price}$</p>
              <hr style={{ marginLeft: "30px", marginRight: "30px"}}></hr>
             <div className="lower-card-tour-section">

              <p><i class="fa-regular fa-clock"></i> {calculateDuration(item.start_date,item.end_date)} Days</p>
              <p><i class="fa-regular fa-user"></i> {item.max_capacity}</p>
             </div>
             <Link>Details <i class="fa-solid fa-arrow-right"></i></Link>
            </div>

          </div>
        ))}
      </section>
      

    </div>
  );
}

export default TourCards;



