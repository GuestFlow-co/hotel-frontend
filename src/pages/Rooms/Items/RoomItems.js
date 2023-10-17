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
import person from "../../../assets/Rooms/person.png"

const colors = {
  orange: "#e8a41d",
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
    <div>
      {/* <section className='card-section-room room padding-top padding-bottom'>
        <div className='container'>
          <div className='room__wrapper'>
            <div className='row g-4'>
              <div className="col-xl-4 col-md-6" key={room.Room_id}> */}
                <div className="room__item room__item--style1" >
                  <div className="room__item-inner " style={{ maxHeight: '446px' }}>
                    <div className="room__item-thumb">
                      <img src={room.coverPhoto} alt="room image" />
                    </div>
                    <div className="room__item-content">
                      <div className="room__item-header">
                        <div className="room__item-name">
                          <ul className="rating">
                            {Array(5).fill(parseInt(room.theRoomRate)).map((_, index) => (
                              <FaStar
                                key={index}
                                size={25}
                                color={room.theRoomRate > index ? colors.orange : colors.grey}
                                style={{
                                  marginRight: 10,
                                  cursor: "pointer",
                                }}
                              />
                            ))}
                          </ul>
                          {/* Room name and availability */}
                          <h3>{room.roomType} Room</h3>
                          <p>{room.roomStatus}</p>
                        </div>

                        <div className="room__item-price">
                          {/* Room price */}
                          <h3>${room.roomPrice}</h3>
                          <p>Per Night</p>
                        </div>
                      </div>
                      <div className="room__item-body">
                        {/* Room description */}
                        <p>{room.description}</p>

                        <div style={{ display: "flex" ,padding:'10px' }}>
                            <img src={person} alt="feature icon" style={{ height: "25px" }}></img>
                            <p style={{ color: "black",paddingLeft:'10px' }}>{room.room_capacity} person</p>
                          </div>  
                        {/* Room features */}
                        <ul className="room__feature">
                          {room.features.map((feature, index) => (
                            <li className="room__feature-item" key={index}>
                              <div className="room__feature-text">
                                <p>{feature}</p>
                              </div>
                            </li>
                          ))}
                        </ul>

                        <Link to={`/rooms/${room.room_number}`} className="custom-btn"><span>Booking Now</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default RoomItem;






{/* <RoomItemWrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="card mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <Link to={`/rooms/${room.room_number}`} className="text-decoration-none text-dark">
          <CardDiv className="w-full">
            <ImgItem src={room.coverPhoto} className="card-img bg-cover " alt="Room Image" />
            <InfoDiv className="position-absolute align-items-center bottom-0 start-0 end-0 bg-transparent">
              <FlexContainer className="d-flex justify-content-between align-items-center p-2 ">
                <RoomTypeContainer>
                  <p>
                    {Array(5).fill(parseInt(room.theRoomRate)).map((_, index) => (
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
                  <p style={{ fontWeight: 300 }}></p>
                </RoomPriceContainer>
              </FlexContainer>
            </InfoDiv>
          </CardDiv>

          {isHovered && (
            <HoveredItems className="position-absolute bottom-0 start-0 end-100 bg-transparent-white">
              <TextWrapper className="p-80">
                <FlexContainer className="d-flex justify-content-between align-items-center p-2 ">
                  <RoomTypeContainer>
                    <p>
                      {Array(5).fill(parseInt(room.theRoomRate)).map((_, index) => (
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
                    <p style={{ fontWeight: 500 }}></p>
                    <div style={{ display: "flex" }}>
                      <img src={person} alt="feature icon" style={{ height: "25px" }}></img>
                      <p style={{ color: "black" }}>{room.room_capacity} person</p>
                    </div>
                  </RoomPriceContainer>
                </FlexContainer>
              </TextWrapper>
            </HoveredItems>
          )}
        </Link>
      </RoomItemWrapper> */}