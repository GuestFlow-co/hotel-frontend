import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateRoom } from '../../../store/actions/Rooms/RoomActions';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Rating({ room }) {
  const Room_id = room.Room_id;
  const dispatch = useDispatch();
  const [userRate, setUserRate] = useState(room.theRoomRate);
  const [hoverValue, setHoverValue] = useState(0);

  const handleClick = (value) => {
    setUserRate(value);
    dispatch(updateRoom({ userRate: value }, Room_id));
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  return (
    <div style={styles.container}>
      <div style={styles.stars}>
        {[1, 2, 3, 4, 5].map((value) => (
          <FaStar
            key={value}
            size={40}
            onClick={() => handleClick(value)}
            onMouseOver={() => handleMouseOver(value)}
            onMouseLeave={handleMouseLeave}
            color={
              (hoverValue >= value || userRate >= value)
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
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
};

export default Rating;
