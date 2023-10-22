import React from "react";
import ReactStars from "react-rating-stars-component";
import "./TopSection.scss";
import hart from "../../../../assets/Lottie/hart - 1696496716172.json"
import stars from "../../../../assets/Lottie/rating- 1696500406013.json"

import Lottie from "lottie-react";
function calculateDuration(startDate, endDate) {
  const durationMs = new Date(endDate) - new Date(startDate);
  const durationDays = durationMs / (1000 * 60 * 60 * 24);
  return durationDays;
}
function TopSection({ tour }) {


  return (

    <div style={{ width: "85%", marginBottom: "35px" }} className="tour-header-sec">
      <div className="main-tour-header">
        <div className="header-tour-detalis">
          <p className="tour-title"> {tour.Title} </p>
          <section className="titel-icon">
            <i class="fa-solid fa-dollar-sign"></i>
            <div>
              <p> From </p>
              <p className="under-icon">${tour.Seat_price}</p>
            </div>
          </section>
          <section className="titel-icon">
            <i class="fa-regular fa-clock"></i>
            <div>
              <p> Durations </p>
              <p className="under-icon">
                {calculateDuration(tour.start_date, tour.end_date)}
              </p>
            </div>
          </section>
          <section className="titel-icon">
            <i class="fa-solid fa-users"></i>
            <div>
              <p>Capacity </p>
              <p className="under-icon">{tour.max_capacity}</p>
            </div>
          </section>
        </div>
      </div>
      <div className="for-center ">
        <hr
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            color: "black",
            borderWidth: "3px",
            width: "100%",
          }}
        />
        <section className="sec-tour-detalis-section   ">
          <section className="rev-sec" style={{ display: "flex", alignItems: "center" }}>
            <ReactStars
              count={5}
              size={25}
              activeColor="rgb(247,146,30)"
              value={tour?.Rating}
              edit={false}
              isHalf={true}
            />
            {"  "}
            <p style={{ fontSize: "20px", padding: "3px" }}>
              {" "}
              ({tour.Rating})
            </p>
          </section>
            <div className="tour-detalis-btn-section p-10">
              <button className="btn-tour-detalis"> REVIEWS  <Lottie style={{ height: "40px" }} animationData={stars} /></button>

            </div>

        </section>
        <hr
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            color: "black",
            width: "100%",
            borderWidth: "3px",

          }}
        />
      </div>
    </div>
  );
}

export default TopSection;
