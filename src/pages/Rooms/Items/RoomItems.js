import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  RoomItemWrapper,
  HoveredItems,
  ImgItem,
  TextWrapper,
  CardDiv,
  InfoDiv,
  FlexContainer,
  RoomTypeContainer,
  RoomPriceContainer,
} from "./style";
import person from "../../../assets/person.png"

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const RoomItem = ({ room }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <RoomItemWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="card mb-3"
      style={{ maxWidth: "18rem" }}
    >
      <Link to={`/rooms/${room.room_number}`} className="text-decoration-none text-dark">
        <CardDiv>
          <ImgItem src={room.coverPhoto} className="card-img" alt="Room Image" />
          <InfoDiv className="position-absolute bottom-0 start-0 end-0 bg-transparent">
            <FlexContainer className="d-flex justify-content-between align-items-center p-2 ">
              <RoomTypeContainer>
                <p>
                {Array(5).fill( parseInt(room.theRoomRate) ).map((_, index) => (
                  <FaStar
                    key={index}
                    size={20}
                    color={room.theRoomRate > index ? colors.orange : colors.grey}
                    style={{
                      marginRight: 10,
                      cursor: "pointer",
                    }}
                  />
                ))}
                </p>
              </RoomTypeContainer>
              <RoomPriceContainer>
                <p className="m-0 white">{room.roomType}</p>
                <p className="m-0 room-price">{room.roomPrice} JD/Night</p>
                <p style={{fontWeight: 300}}></p>
              </RoomPriceContainer>
            </FlexContainer>
          </InfoDiv>
        </CardDiv>

        {isHovered && (
          <HoveredItems className="position-absolute bottom-0 start-0 end-100 bg-transparent-white">
            <TextWrapper className="p-8">
            <FlexContainer className="d-flex justify-content-between align-items-center p-2 ">
              <RoomTypeContainer>
                <p>
                {Array(5).fill( parseInt(room.theRoomRate) ).map((_, index) => (
                  <FaStar
                    key={index}
                    size={20}
                    color={room.theRoomRate > index ? colors.orange : colors.grey}
                    style={{
                      marginRight: 10,
                      cursor: "pointer",
                    }}
                  />
                ))}
                </p>
              </RoomTypeContainer>
              <RoomPriceContainer>
                <h3 className="m-0">{room.roomType}</h3>
                <h3 className="m-0 room-price">{room.roomPrice} JD/Night</h3>
                <p style={{fontWeight: 500}}></p>
                <div style={{display:"flex"}}>
                <img src={person} alt="feature icon" style={{height:"25px"}}></img>
            <p style={{color:"black"}}>{room.room_capacity} person</p>
            </div>
              </RoomPriceContainer>
            </FlexContainer>
          </TextWrapper>
          </HoveredItems>
        )}
      </Link>
    </RoomItemWrapper>
  );
};

export default RoomItem;
