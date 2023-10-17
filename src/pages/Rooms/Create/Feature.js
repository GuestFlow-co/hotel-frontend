import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAminity } from '../../../store/actions/Rooms/AminityActions';

function Checkbox({ feature, checked, onChange }) {
  return (
    <label>
      <input type="checkbox" name={feature} checked={checked} onChange={onChange} />
      {feature}
    </label>
  );
}

function FeatureChecklist() {
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

  const allFeatures = useSelector(state => state.aminities.aminities);

  const [features, setFeatures] = useState(initialFeatures);
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.rooms.rooms);
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
    <div>
      <h3>Feature Checklist</h3>
      <form onSubmit={handleSubmit}>
        {Object.entries(features).map(([feature, checked]) => (
          <div key={feature}>
            <Checkbox
              feature={feature}
              checked={checked}
              onChange={() => handleCheckboxChange(feature)}
            />
          </div>
        ))}

        <button type="submit">Add Amenities</button>
      </form>
    </div>
  );
}

export default FeatureChecklist;
