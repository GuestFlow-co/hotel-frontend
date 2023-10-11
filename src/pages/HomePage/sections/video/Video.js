import React from 'react'
import './Video.scss'


function Video() {
    return (
        <div>
            <section className="funfact funfact--shape padding-bottom pb-lg-0 bg--section-color">
                <div className="container">
                    <div className="testimonial__wrapper">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="funfact__content padding-top" data-aos="fade-right" data-aos-duration="1000">
                                    <div className="common-header">
                                        <p className="subtitle">Fun Fact</p>
                                        <h2>Our Hotel Tavern Achievement for over 20 years.</h2>
                                    </div>
                                    <ul className="funfact__list">
                                        <li className="funfact__item">
                                            <div className="funfact__item-icon">
                                                <img src="assets/images/funfact/icons/1.png" alt="funfact icon" />
                                            </div>
                                            <div className="funfact__item-content">
                                                <h3><span>200</span>+</h3>
                                                <p>Available Rooms</p>
                                            </div>
                                        </li>
                                        <li className="funfact__item">
                                            <div className="funfact__item-icon">
                                                <img src="	https://labartisan.net/demo/tavern/assets/images/funfact/icons/3.png" alt="funfact icon" />
                                            </div>
                                            <div className="funfact__item-content">
                                                <h3><span>400</span>+</h3>
                                                <p>Staff Members</p>
                                            </div>
                                        </li>
                                        <li className="funfact__item">
                                            <div className="funfact__item-icon">
                                                <img src="https://labartisan.net/demo/tavern/assets/images/funfact/icons/3.png" alt="funfact icon" />
                                            </div>
                                            <div className="funfact__item-content">
                                                <h3><span>240</span>k</h3>
                                                <p>Served Clients</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="funfact__video" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                                    <div className="funfact__video-wrapper">
                                        <img src="https://labartisan.net/demo/tavern/assets/images/funfact/1.png" alt="funfact video preview" />
                                        <a href="https://www.youtube.com/embed/4K6Sh1tsAW4" data-rel="lightcase" className="funfact__video-play">
                                            <i className="fa-solid fa-play"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-lines ">
                <span></span><span></span>
                <span></span><span></span>
                <span></span><span></span>
                <span></span><span></span>
                <span></span><span></span>
            </div>
        </div>
    )
}

export default Video
