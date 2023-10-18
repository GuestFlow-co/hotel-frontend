import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addAminity } from '../../../store/actions/Rooms/AminityActions';

const ContainerCheck = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CheckboxInput = styled.input`
  margin-right: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  margin-right: 10px;
  cursor: pointer;
`;

function Checkbox({ feature, checked, onChange }) {
  return (
    <CheckboxLabel>
      <CheckboxInput type="checkbox" name={feature} checked={checked} onChange={onChange} />
      {feature}
    </CheckboxLabel>
  );
}

function FeatureChecklist({ setClose }) {
  const initialFeatures = {
    'Wi-Fi': false,
    'Smart Controls': false,
    'Mini Kitchenette': false,
    'TV': false,
    'Balcony or Terrace': false,
    'Spa Bathrooms': false,
    'Nespresso Machine': false,
    'Robes and Slippers': false,
    'Room Service Options': false,
  };

  const allFeatures = useSelector((state) => state.aminities.aminities);

  const [features, setFeatures] = useState(initialFeatures);
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);
  const lastRoomId = rooms.length > 0 ? rooms[rooms.length - 1].Room_id : null;

  const handleCheckboxChange = (feature) => {
    setFeatures((prevFeatures) => ({
      ...prevFeatures,
      [feature]: !prevFeatures[feature],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedFeatures = Object.keys(features).filter((feature) => features[feature]);

    const featureIds = selectedFeatures.map((selectedFeature) => {
      const feature = allFeatures.find((x) => x.feature_name === selectedFeature);
      return feature ? feature.feature_id : null;
    });

    const validFeatureIds = featureIds.filter((featureId) => featureId !== null);

    const amenityDataArray = validFeatureIds.map((featureId) => ({
      rooms_id: lastRoomId,
      feature_id: featureId,
    }));

    amenityDataArray.forEach((amenityData) => {
      dispatch(addAminity(amenityData));
    });
  };

  return (
    <ContainerCheck>
      <h3>Feature Checklist</h3>
      <form onSubmit={handleSubmit}>
        <div>
          {Object.entries(features).map(([feature, checked]) => (
            <div key={feature}>
              <Checkbox
                feature={feature}
                checked={checked}
                onChange={() => handleCheckboxChange(feature)}
              />
            </div>
          ))}
        </div>

        <Button type="submit">Submit</Button>
        <Button onClick={setClose}>Close</Button>
      </form>
    </ContainerCheck>
  );
}

export default FeatureChecklist;
