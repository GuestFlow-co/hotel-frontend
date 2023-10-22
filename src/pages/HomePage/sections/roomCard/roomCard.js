import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import './room.scss'
import { useState, useEffect } from 'react';
import RoomImg from '../../../../assets/images/1.png'
import { FaStar } from "react-icons/fa";
import person from "../../../../assets/Rooms/person.png"
import { Slide } from "react-awesome-reveal";



export default function RoomCard() {
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/rooms`)
      setRooms(response.data.slice(0, 6));
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching room data:', error);
    }
  };

  const colors = {
    orange: "#e8a41d",
    grey: "#a9a9a9",
  };

  useEffect(() => {
    fetchRooms();
  }, []);
  return (
    <section className='rooms-area pt-130 rpt-100 pb-100 rpb-70 rel z-2 overflow-hidden'>
      <div className='container'>
        <div className="row justify-content-between align-items-center pb-20">
          <div className="col-xl-5 col-lg-7">
            <div className="section-title mb-40 wow fadeInLeft delay-0-2s">
              <h2>Take A Look Our Luxury Rooms and Hotel</h2>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <Link className="theme-btn mb-40 wow fadeInRight delay-0-2s" to='./rooms'>Explore Rooms <i class="fa-solid fa-angle-right"></i></Link>
          </div>
        </div>
      </div>


      {/* cards section */}


      <section className='card-section-room room padding-top padding-bottom'>
        <div className='container'>
          <div className='room__wrapper'>
            <div className='row g-4'>
                {rooms.map(room => (
                  <div className="col-xl-4 col-md-6" key={room.Room_id}>
                    <div className="room__item room__item--style1" >
                      <div className="room__item-inner " style={{ maxHeight: '446px' }}>
                        <div className="room__item-thumb">
                          <img src={room.coverPhoto} alt="room image" style={{ maxHeight: '446px', minHeight: '446px' }} />
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
                              <h3>{room.roomType}</h3>
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


                            {/* <div style={{ display: "flex", padding: '10px' }}>
                              <img src={person} alt="feature icon" style={{ height: "25px" }}></img>
                              <p style={{ color: "black", paddingLeft: '10px' }}>{room.room_capacity} person</p>
                            </div> */}
                            {/* Room features */}
                            <ul className="room__feature">
                              {room.features.map((feature, index) => (
                                <li className="room__feature-item" key={index}>
                                  <div className="room__feature-text">
                                    <p>{feature.feature_name}</p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                            <ul className="room__feature">
                          <li className="room__feature-item">
                            <div className="room__feature-icon">
                              <img src={person} alt="feature icon" />
                            </div>
                            <div className="room__feature-text">
                              <p>{room.room_capacity} person</p>
                            </div>
                          </li>

                          <li className="room__feature-item">
                            <div className="room__feature-icon">
                              <img src="https://labartisan.net/demo/tavern/assets/images/room/icon/6.png" alt="feature icon" />
                            </div>
                            <div className="room__feature-text">
                              <p>Breake fast</p>
                            </div>
                          </li>

                
                        
                        </ul>
                            <Link to={`/rooms/${room.room_number}`} className="custom-btn"><span>Booking Now</span></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              {/* <div className="col-xl-4 col-md-6">
                <div className="room__item room__item--style1">
                  <div className="room__item-inner">
                    <div className="room__item-thumb">
                      <img src={RoomImg} alt="room image" />
                    </div>
                    <div className="room__item-content">
                      <div className="room__item-header">
                        <div className="room__item-name">
                          <ul className="rating">
                            <li className="rating__star"><i className="fa-solid fa-star"></i></li>
                            <li className="rating__star"><i className="fa-solid fa-star"></i></li>
                            <li className="rating__star"><i className="fa-solid fa-star"></i></li>
                            <li className="rating__star"><i className="fa-solid fa-star"></i></li>
                            <li className="rating__star"><i className="fa-solid fa-star"></i></li>
                          </ul>
                          <h3><a href="room-details.html">Family Room</a></h3>
                          <p>Available room</p>
                        </div>

                        <div className="room__item-price">
                          <h3>$220</h3>
                          <p>Per Night</p>
                        </div>
                      </div>
                      <div className="room__item-body">
                        <p>Continually productize compelling quality packed elated productize compelling quality.</p>
                        <ul className="room__feature">
                          <li className="room__feature-item">
                            <div className="room__feature-icon">
                              <img src="https://labartisan.net/demo/tavern/assets/images/room/icon/6.png" alt="feature icon" />
                            </div>
                            <div className="room__feature-text">
                              <p>4 Person</p>
                            </div>
                          </li>

                          <li className="room__feature-item">
                            <div className="room__feature-icon">
                              <img src="https://labartisan.net/demo/tavern/assets/images/room/icon/6.png" alt="feature icon" />
                            </div>
                            <div className="room__feature-text">
                              <p>King bed</p>
                            </div>
                          </li>

                          <li className="room__feature-item">
                            <div className="room__feature-icon">
                              <img src="https://labartisan.net/demo/tavern/assets/images/room/icon/6.png" alt="feature icon" />
                            </div>
                            <div className="room__feature-text">
                              <p>free wifi</p>
                            </div>
                          </li>

                          <li className="room__feature-item">
                            <div className="room__feature-icon">
                              <img src="https://labartisan.net/demo/tavern/assets/images/room/icon/6.png" alt="feature icon" />
                            </div>
                            <div className="room__feature-text">
                              <p>Breakfast</p>
                            </div>
                          </li>

                          <li className="room__feature-item">
                            <div className="room__feature-icon">
                              <img src="https://labartisan.net/demo/tavern/assets/images/room/icon/6.png" alt="feature icon" />
                            </div>
                            <div className="room__feature-text">
                              <p>Shower</p>
                            </div>
                          </li>

                          <li className="room__feature-item">
                            <div className="room__feature-icon">
                              <img src="https://labartisan.net/demo/tavern/assets/images/room/icon/6.png" alt="feature icon" />
                            </div>
                            <div className="room__feature-text">
                              <p>Breakfast</p>
                            </div>
                          </li>
                        </ul>
                        <a href="#" className="custom-btn"><span>Booking Now</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-lines for-bg-white">
        <span></span><span></span>
        <span></span><span></span>
        <span></span><span></span>
        <span></span><span></span>
        <span></span><span></span>
      </div>
      <div className="wave-shapes"></div>
      <div className="wave-shapes-two"></div>
    </section>
  )
}
