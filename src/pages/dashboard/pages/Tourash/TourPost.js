import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTour } from "../../../../store/actions/Tours/Touraction";
import { useParams } from "react-router-dom";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Button,
} from "./TourPostStyles";

const TourPost = ({ setPopupOpen }) => {
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
    image: [],
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

  const [tour, setTour] = useState(initialTourState);
  const [tourPlan, setTourPlan] = useState(initialTourPlanState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (const key in tour) {
      if (key === "image") {
        tour.image.forEach((file) => {
          formData.append("image", file);
        });
      } else {
        formData.append(key, tour[key]);
      }
    }

    // Include the TourPlan in the formData
    formData.append("TourPlan", JSON.stringify(tourPlan));

    dispatch(addTour(formData));

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
  };

  const handleImage = (event) => {
    const { name, files } = event.target;
    if (name === "image") {
      setTour({ ...tour, image: Array.from(files) });
    }
  };

  const handleTourPlanChange = (index, e) => {
    const { name, value } = e.target;
    const updatedDays = [...tourPlan.days];
    updatedDays[index] = {
      ...updatedDays[index],
      [name]: value,
    };
    setTourPlan({ ...tourPlan, days: updatedDays });
  };
  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop:"15px"
  };
  
const inputStyle = {
  display: 'none',
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
          {tourPlan.days.map((day, index) => (
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
      <i class="fa-solid fa-arrow-up-from-bracket"></i>  Upload Tour Photos
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
              Create
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

export default TourPost;
