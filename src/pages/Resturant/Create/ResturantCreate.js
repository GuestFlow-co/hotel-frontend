import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addResturant } from '../../../store/actions/resturant/ResturantAction';
import { useParams } from 'react-router-dom';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Button,
} from '../../Rooms/Create/style';

const ResturantCreate = () => {
  const dispatch = useDispatch();
  const { Food_id } = useParams();

//   {
//     "Food_id": 1,
//     "foodType": "foodTyp",
//     "foodName": "foodName",
//     "foodPrice": null,
//     "foodStatus": "Available",
//     "photoUrl": null,
//     "coverPhoto": null,
//     "description": null,
// },


  const initialResturantState = {
    foodType: '',
    foodName: '',
    foodStatus: 'Available',
    foodPrice: 0,
    photoUrl:'',
    coverPhoto:'',
    description: '',
  };

  const [resturant, setResturant] = useState(initialResturantState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addResturant(resturant));
      setResturant(initialResturantState);
      console.log("Resturant created successfully");
      console.log(resturant);
    } catch (error) {
      console.error("Resturant creation failed:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResturant({
      ...resturant,
      [name]: value,
    });
  };

  return (
    <Container>
        <br></br>
        <br></br>
      <Form onSubmit={handleSubmit}>
     
      <FormGroup>
          <Label>foodName</Label>
          <Input
            type="text"
            value={resturant.foodName}
            onChange={handleChange}
            name="foodName"
            className="form-control"
          />
        </FormGroup>

        <FormGroup>
          <Label>foodType</Label>
          <Input
            type="text"
            value={resturant.foodType}
            onChange={handleChange}
            name="foodType"
            className="form-control"
          />
        </FormGroup>

      

        {/* <FormGroup>
          <Label>Resturant Type</Label>
          <Input
            type="text"
            value={resturant.resturantType}
            onChange={handleChange}
            name="resturantType"
            className="form-control"
          />
        </FormGroup> */}

        <FormGroup>
          <Label>foodPrice</Label>
          <Input
            type="text"
            value={resturant.foodPrice}
            onChange={handleChange}
            name="foodPrice"
            className="form-control"
          />
        </FormGroup>

        <FormGroup>
          <Label>foodStatus</Label>
          <Input
            type="number"
            value={resturant.foodStatus}
            onChange={handleChange}
            name="foodStatus"
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <Label>photoUrl</Label>
          <Input
            type="text"
            value={resturant.photoUrl}
            onChange={handleChange}
            name="photoUrl"
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <Label>coverPhoto</Label>
          <Input
            type="text"
            value={resturant.coverPhoto}
            onChange={handleChange}
            name="coverPhoto"
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <Label>description</Label>
          <Input
            type="text"
            value={resturant.description}
            onChange={handleChange}
            name="description"
            className="form-control"
          />
        </FormGroup>
          <ButtonGroup>
        <Button type="submit" className="btn btn-success">
          Create
        </Button>
      
        </ButtonGroup>
      </Form>
    </Container>
  );
};

export default ResturantCreate;
