import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateRoom } from '../../../store/actions/RoomActions';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Rating({ room }) {
  const Room_id = room.Room_id;
  const dispatch = useDispatch();
  const [hoverValue, setHoverValue] = useState(null);
  const [stars, setStars] = useState(Array(5).fill(0)); 

  useEffect(() => {
    
    setStars(stars.map((_, index) => (index < parseFloat(room.theRoomRate) ? 1 : 0)));
  }, [room.theRoomRate]);

  const handleClick = (value) => {
    
    dispatch(updateRoom({ userRate: value }, Room_id));
    
    
    setStars(stars.map((_, index) => (index < value ? 1 : 0)));
  };

  const handleMouseOver = (value) => {
    setHoverValue(value); // Set the hoverValue to the index of the star being hovered

    // Update the star colors based on hover and rated values
    setStars(stars.map((_, index) => {
      if (index < value) {
        return 1; // Hovered stars should be orange
      } else if (index < parseFloat(room.theRoomRate)) {
        return 0; // Rated stars should be gray
      } else {
        return 0; // Unrated stars should be gray
      }
    }));
  };


  const handleMouseLeave = () => {
    
    setHoverValue(null);
    setStars(stars.map((_, index) => (index < parseFloat(room.theRoomRate) ? 1 : 0)));
  };

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.stars}>
          {stars.map((star, index) => (
            <FaStar
              key={index}
              size={40}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index +1 )}
              onMouseLeave={handleMouseLeave}
              color={
                hoverValue !== null && hoverValue >= index + 1 
                  ? colors.orange
                  : star === 1
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "10%",
    left: "65%",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
};

export default Rating;
