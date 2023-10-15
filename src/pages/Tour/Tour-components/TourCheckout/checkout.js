import React, { useState } from "react";
import "./styel.scss";
import { Text } from "@chakra-ui/react";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import the styles

function Checkout() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <section className="checkout-main container">
        <div className="check-in">
          <label className="check-label">Check In</label>
          <div className="check-input">
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText="Check In"
            />
            <i className="fa-regular fa-calendar-days"></i>
          </div>
        </div>
        <div className="check-in">
          <label className="check-label">Check Out</label>
          <div className="check-input">
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              placeholderText="Check Out"
            />
            <i className="fa-regular fa-calendar-days"></i>

          </div>
        </div>
        <div className="check-in">
          <label className="check-label">Guest</label>
          <input className="check-input" type="number"></input>
        </div>
        <div className="check-in">
          <label className="check-label">Accommodations</label>
          <select className="check-input">
            <option value="Tent Camping">Tent Camping</option>
            <option value="Mountain Biking">Mountain Biking</option>
            <option value="Birdwatching">Birdwatching</option>
          </select>
        </div>

        <div className="theBotton-Tour">
          <Text style={{ color: "white" }}> .</Text>
          <br />
          <button className="CHECK-AVAILABILITY">
            CHECK AVAILABILITY <i className="fa fa-angle-double-right px-1"></i>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
