import React, { useContext, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import data from "../../data.json";
import "./cardsTour.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import fire from "../../../../assets/Lottie/fire- 1696441846158.json"
import camp from "../../../../assets/Lottie/camp- 1696445853337.json"
import rabbit from "../../../../assets/Lottie/rabbit- 1696493249475.json"

import Lottie from "lottie-react";
function TourCards() {
  const [res, setData] = useState([]);
  const itemsPerPage = 3; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  function calculateDuration(startDate, endDate) {
    const durationMs = new Date(endDate) - new Date(startDate);
    const durationDays = durationMs / (1000 * 60 * 60 * 24);
    return durationDays;
  }

  useEffect(() => {
    // const baseURL = process.env.REACT_APP_BASE_URL;

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/tour`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(res.length / itemsPerPage);

  // Calculate the range of items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter the data for the current page
  const currentItems = res.slice(startIndex, endIndex);

  return (
    <div className="main-card-tour" >
      
            <section className="cards-tour-section">
        {currentItems.map((item) => (
                        <Link className="theTourCard" to={`/TourDetalis/${item.Tour_id}`}>

            <div>
              <img className="tour-card-image" src={item.coverPhoto} />
            </div>

            <div className="info-tour-card">
              <section style={{ display: "flex", alignItems: "center",}}>
                <ReactStars
                  count={5}
                  size={25}
                  activeColor="rgb(247,146,30)"
                  value={item.Rating}
                  edit={false}
                  isHalf={true}
                />{"  "}
                <p style={{fontSize:"20px", paddingTop:"15px"}}> ({item.Rating})</p>
              </section>

              <p style={{ fontSize: "18px", fontWeight: "700" }}>
                {" "}
                {item.Title}
              </p>
              <p>
                <i className="fa-solid fa-location-dot"></i> {item.location}
              </p>
              <p>
                <i className="fa-solid fa-sack-dollar"></i> Price: $
                {item.Seat_price}
              </p>
              <div>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>

          <Lottie  style={{ width: '50px' }} animationData={fire} />
             <Lottie  style={{ width: '60px' }} animationData={camp} />
             <Lottie  style={{ width: '60px' }} animationData={rabbit} />
                </div>


          </div> 
              <hr style={{ marginLeft: "30px", marginRight: "30px" }}></hr>
              <div className="lower-card-tour-section">
                <p>
                  <i className="fa-regular fa-clock"></i>{" "}
                  {calculateDuration(item.start_date, item.end_date)} Days
                </p>
                <p>
                  <i className="fa-regular fa-user"></i> {item.max_capacity}
                </p>
              </div>
              <Link to={`/TourDetalis/${item.Tour_id}`}>
                Details <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </Link>

        ))}
          <div class="col-lg-12">
            <ul className="gowilds-pagination wow fadeInUp text-center">
              <li>
                <button
                  onClick={() =>
                    setCurrentPage((prevPage) =>
                      prevPage > 1 ? prevPage - 1 : prevPage
                    )
                    
                  }
                  className="pageintbotton"

                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
              </li>
              {Array.from({ length: totalPages }).map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => setCurrentPage(index + 1)}
                    className="pageintbotton"
                    
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() =>
                    setCurrentPage((prevPage) =>
                      prevPage < totalPages ? prevPage + 1 : prevPage
                    )
                  }
                  className="pageintbotton"

                >
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </li>
            </ul>
          </div>
      </section>
      
    </div>
  );
}

export default TourCards;
