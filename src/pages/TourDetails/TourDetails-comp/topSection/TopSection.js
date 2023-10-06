import React from "react";
import ReactStars from "react-rating-stars-component";
import "./TopSection.scss";

function calculateDuration(startDate, endDate) {
  const durationMs = new Date(endDate) - new Date(startDate);
  const durationDays = durationMs / (1000 * 60 * 60 * 24);
  return durationDays;
}
function TopSection({ tour }) {
  return (
    <div>
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
              <p> Max capacity </p>
              <p className="under-icon">{tour.max_capacity}</p>
            </div>
          </section>
        </div>
      </div>
      <div className="for-center">

      <hr
        style={{
          marginLeft: "30px",
          marginRight: "30px",
          color: "black",
          width: "85%",
        }}
      />
      <section className="sec-tour-detalis-section">
        <section style={{ display: "flex", alignItems: "center" }}>
          <ReactStars
            count={5}
            size={25}
            activeColor="rgb(247,146,30)"
            value={tour.Rating}
            edit={false}
            isHalf={true}
          />
          {"  "}
          <p style={{ fontSize: "20px", paddingTop: "15px" }}>
            {" "}
            ({tour.Rating})
          </p>
        </section>
        <div className="tour-detalis-btn-section">

        <button className="btn-tour-detalis"> REVIEWS  </button>
        <button className="btn-tour-detalis"> WHISLIST </button>
         
        </div>
      </section>
        <hr
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            color: "black",
            width: "85%",
          }}
          />
          </div>
    </div>
  );
}

export default TopSection;
