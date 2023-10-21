import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTour } from "../../../../../store/actions/Tours/Touraction";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Button,
} from "../TourPostStyles";
import axios from "axios";

const TourEdit = ({ setPopupOpen, tour1,tourupdated }) => {
  const dispatch = useDispatch();

  const initialTourState = {
    description: "",
    start_date: new Date(),
    end_date: new Date(),
    max_capacity: 0,
    Seat_price: 0,
    location: "",
    Title: "",
    Rating: 5,
    // image: [],
  };

  const initialTourPlanState = {
    description: "",
    days: [
      {
        day: "",
        content: "",
      },
    ],
  };

  const [tour, setTour] = useState({ ...tour1 }); // Initialize with tour1 data
  const [tourPlan, setTourPlan] = useState(tour1.TourPlan);
// console.log("tour1.TourPlan", typeof tour1.TourPlan);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(tour,"tourtour");
    for (const key in tour) {
      if (key === "image") {
        tour.image.forEach((file) => {
          console.log(file,"file");
          formData.append("image", file);
        });
      } else {
        // console.log("key",key, "value",tour[key]);
        formData.append(key, tour[key]);
      }
    }
    
    formData.append("TourPlan", JSON.stringify(tourPlan));
    

console.log(typeof tour.tour_id,"tour1.Tour_id");
const obj={
  tour_id:formData.get("tour_id"),
  max_capacity: formData.get("max_capacity"),
  Seat_price: formData.get("Seat_price"),
  TourPlan:JSON.stringify(tourPlan),
  image:formData.get("image"),
    description:formData.get("description"),
    start_date: formData.get("start_date"),
    end_date: formData.get("end_date"),
}
// const x =formData.get("TourPlan")
// console.log(JSON.stringify(x));
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/tour/${parseInt(obj.tour_id)}`, obj,
       
      );
      console.log(res.data, "resresres");
      tourupdated(true)
    } catch (error) {
      console.error("Error:", error);
    }
    // Reset the form after dispatching the action
    setTour(initialTourState);
    setTourPlan(initialTourPlanState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTour({
      ...tour,
      [name]: value,
    });
    console.log(tour);
  };

  const handleImage = (event) => {
    const { name, files } = event.target;
    if (name === "image") {
      setTour({ ...tour, image: Array.from(files) });
    }
  };

  const handleTourPlanChange = (index, e) => {
    console.log(tourPlan,"1");
    const { name, value } = e.target;
    if (name === 'description') {
      setTourPlan({ ...tourPlan, [name]: value });
      console.log(tourPlan,"2");

    } else if (name === 'day' || name === 'content') {
      const updatedDays = [...tourPlan.days];
      updatedDays[index] = {
        ...updatedDays[index],
        [name]: value,
      };
      setTourPlan({ ...tourPlan, days: updatedDays });
      console.log(tourPlan,"3");

    }
  };

  const buttonStyle = {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "15px",
  };

  const inputStyle = {
    display: "none",
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Seat Price</Label>
          <Input
            type="number"
            value={tour.Seat_price}
            onChange={handleChange}
            name="Seat_price"
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <Label>max Capacity</Label>
          <Input
            type="number"
            value={tour.max_capacity}
            onChange={handleChange}
            name="max_capacity"
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <Label>Title</Label>
          <Input
            type="text"
            value={tour.Title}
            onChange={handleChange}
            name="Title"
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <Label>location</Label>
          <Input
            type="text"
            value={tour.location}
            onChange={handleChange}
            name="location"
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <Label>Ending Date</Label>
          <Input
            type="date"
            value={tour.end_date}
            onChange={handleChange}
            name="end_date"
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <Label>starting Date</Label>
          <Input
            type="date"
            value={tour.start_date}
            onChange={handleChange}
            name="start_date"
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <Label> Tour Description</Label>
          <Input
            type="text"
            value={tour.description}
            onChange={handleChange}
            name="description"
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <Label>Tour Plan Description</Label>
          <Input
            type="text"
            value={tourPlan.description}
            onChange={(e) =>
              setTourPlan({ ...tourPlan, description: e.target.value })
            }
            name="tourPlanDescription"
            className="form-control"
          />
        </FormGroup>
        <div style={{ alignItems: "center", width: "100%" }}>
          {tourPlan.days&& tourPlan.days.map((day, index) => (
            <div
              key={index}
              style={{ display: "flex", alignItems: "center", width: "100%" }}
              className="day-section"
            >
              <div style={{ width: "48%" }}>
                <Label>{`Day ${index + 1}`}</Label>
                <Input
                  type="text"
                  value={day.day}
                  onChange={(e) => handleTourPlanChange(index, e)}
                  name="day"
                  className="form-control"
                />
              </div>
              <div style={{ width: "48%" }}>
                <Label>Content</Label>
                <Input
                  type="text"
                  value={day.content}
                  onChange={(e) => handleTourPlanChange(index, e)}
                  name="content"
                  className="form-control"
                />
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <div>
            <label style={buttonStyle}>
              <i className="fa-solid fa-arrow-up-from-bracket"></i> Upload Tour
              Photos
              <input
                type="file"
                name="image"
                style={inputStyle}
                onChange={handleImage}
                multiple
              />
            </label>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-around",
              margin: "15px",
            }}
          >
            <Button
              type="submit"
              onClick={() => setPopupOpen(false)}
              className="btn btn-success"
            >
              Edit 
            </Button>

            <Button
              type="button"
              onClick={() =>
                setTourPlan({
                  ...tourPlan,
                  days: [...tourPlan.days, { day: "", content: "" }],
                })
              }
            >
              Add Day
            </Button>
          </div>
        </div>
      </Form>
      <button
        type="text"
        onClick={() => setPopupOpen(false)}
        className="btn cancel"
        style={{ backgroundColor: "gray", color: "white", fontSize: "18px" }}
      >
        cancel
      </button>
    </Container>
  );
};

export default TourEdit;
