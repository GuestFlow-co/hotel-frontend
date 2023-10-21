import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function MoreTours() {
    const [sidebarData, setSidebarData] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/tour`)
            .then((response) => {
                setSidebarData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching sidebar data:", error);
            });
    }, []);

    return (
        <div className="widget widget-recent-news wow fadeInUp delay-0-2s py-50">
            <div className="room-details-sidebar p-50  bgc-lighter ">
                <h4 className="widget-title">Check out our Tours</h4>
                <ul>
                    {sidebarData.map((item) => (
                        <li key={item.tour_id} >
                            <Link to={`/TourDetalis/${item.tour_id}`} className="d-flex">
                                <div className="image">
                                    <img className="tour-card-image-home" src={item.coverPhoto}  />
                                </div>
                                <div className="content">
                                <h5>
                                    {item.Title}
                                </h5>
                                <Link to={`/TourDetalis/${item.tour_id}`} className="read-more">Read More <i class="fa fa-angle-right"></i></Link>

                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


// style={{ width: "20%", height: "20%", objectFit: "cover", borderRadius: "5px", marginBottom: "5px", marginTop: "5px" }}