import React from "react";
import "./styel.scss";
import { Text } from "@chakra-ui/react";
function Checkout() {
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
      <section className="checkout-main">
        <div className="check-in">
          <label className="check-label"> Check In</label>
          <input
            className="check-input"
            placeholder="Check In"
            type="date"
          ></input>
        </div>
        <div className="check-in">
          <label className="check-label"> Check Out</label>
          <input className="check-input" type="date"></input>
        </div>
        <div className="check-in">
          <label className="check-label"> Guest</label>
          <input className="check-input" type="number"></input>
        </div>
        <div className="check-in">
          <label className="check-label"> Accommodations</label>
          <select className="check-input">
            <option value="Tent Camping">Tent Camping</option>
            <option value="Mountain Biking">Mountain Biking</option>
            <option value="Birdwatching">Birdwatching</option>
          </select>
        </div>

        <div className="theBotton-Tour">
          <Text style={{color:"white"}}> ...</Text><br />
          <button className="CHECK-AVAILABILITY"> CHECK AVAILABILITY >></button>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
