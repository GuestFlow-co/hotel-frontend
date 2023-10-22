import React from 'react';
import './AboutUs.scss';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";


export default function AboutUs() {
    return (
        <>
            {/* Page Banner Start */}
            <section className="page-banner-area pt-170 rpt-110 pb-190 rpb-125 rel z-1 bgs-cover bgc-black text-center" style={{ backgroundImage: "url(https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", backgroundAttachment: "fixed" }}>
                <div className="container">
                    <div className="banner-inner text-white rpb-25">
                        <h1 className="page-title wow fadeInUp delay-0-2s" style={{ fontFamily: 'Noto Serif' }}>About GUESTFLOW</h1>
                        <nav aria-label="breadcrumb">
                        </nav>
                    </div>
                </div>
                <div className="bg-lines">
                    <span></span><span></span>
                    <span></span><span></span>
                    <span></span><span></span>
                    <span></span><span></span>
                    <span></span><span></span>
                </div>
            </section>
            {/* Page Banner End */}

            {/* About Page Area start */}
            <section className="about-page-area py-130 rpy-100 rel z-2">
                <div className="container">
                    <Fade triggerOnce>
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-5">
                                <div className="about-page-content rmb-55 wow fadeInUp delay-0-2s">
                                    <div className="section-title mb-35">
                                        <span className="sub-title mb-15">About Company</span>
                                        <h2>We Help to Provide Quality Hotel Services & Foods</h2>
                                        <p>We are dedicated to providing exceptional hotel services and delicious food, ensuring your satisfaction and comfort.</p>
                                    </div>
                                    <Link className="theme-btn" to='/rooms'>Explore Our Rooms <i className="fa fa-angle-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="about-page-right bgc-lighter">
                                    <div className="feature-item style-two wow fadeInUp delay-0-2s">
                                        <div className="icon">
                                            <i className="flaticon-mission"></i>
                                        </div>
                                        <div className="content">
                                            <h3>Company Mission</h3>
                                            <p>Our mission is to offer the best possible experience for our guests, exceeding their expectations and providing top-notch services.</p>
                                        </div>
                                    </div>
                                    <div className="feature-item style-two wow fadeInUp delay-0-4s">
                                        <div className="icon">
                                            <i className="flaticon-mission"></i>
                                        </div>
                                        <div className="content">
                                            <h3>Hotel & Suites</h3>
                                            <p>Our hotels and suites are designed for your comfort and relaxation, offering a home away from home during your stay.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div class="bg-lines for-bg-white">
                    <span></span><span></span>
                    <span></span><span></span>
                    <span></span><span></span>
                    <span></span><span></span>
                    <span></span><span></span>
                </div>
            </section>
            {/* About Page Area end */}

            <section className="who-we-are-area pb-130 rpb-100 rel z-1">
                <div className="container">
                    <Fade triggerOnce>
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-6 col-lg-7">
                                <div className="who-we-are-image rmb-55 wow fadeInUp delay-0-2s">
                                    <img src="https://webtend.site/html/qomfort/assets/images/about/who-we-are.jpg" alt="Who We Are" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="who-we-are-content wow fadeInUp delay-0-4s">
                                    <div className="section-title mb-35">
                                        <span className="sub-title mb-15">Who We Are</span>
                                        <h2>Start Your Amazing Adventure!</h2>
                                        <p>We are here to make your journey memorable and enjoyable. With our services, you can embark on an amazing adventure.</p>
                                    </div>
                                    <Link className="theme-btn style-two" to='./tour'>Get Started Us <i className="fa fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="bg-lines for-bg-white">
                    <span></span><span></span>
                    <span></span><span></span>
                    <span></span><span></span>
                    <span></span><span></span>
                    <span></span><span></span>
                </div>

                <section className="team-area pt-130 rpt-100 pb-70 rpb-40 rel z-1">
                    <div className="container">
                        <Fade triggerOnce>
                            <div className="row justify-content-center">
                                <div className="col-xl-6 col-lg-8 col-md-11">
                                    <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                                        <span className="sub-title mb-15">Meet Our Team</span>
                                        <h2>We Have Professional Team Member Let’s Talk Our Experience</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="team-member wow fadeInUp delay-0-2s">
                                        <div className="image">
                                            <img src="https://imgbucketfordestinate.s3.eu-north-1.amazonaws.com/DSC_0333.jpg.jpeg" alt="Member" />
                                            <div className="social-links">
                                                <a href="https://github.com/saleh2001k"><i className="fab fa-github"></i></a>
                                                <a href="https://www.linkedin.com/in/saleh-almashni/"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h4>Saleh Al-mashni</h4>
                                            <span className="designation">Software Engineer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="team-member wow fadeInUp delay-0-4">
                                        <div className="image">
                                            <img src="https://cdn.discordapp.com/attachments/1109771828454510602/1141200163138965545/farah_new__photo.jfif?ex=65388079&is=65260b79&hm=8e10c9456004e1147270cf7e85d2ab2cbb20c1ac4011036a0a682bc20f86cea8&" alt="Member" />
                                            <div className="social-links">
                                                <a href="#"><i className="fab fa-github"></i></a>
                                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h4>Farah Yasin</h4>
                                            <span className="designation">Software Engineer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="team-member wow fadeInUp delay-0-3">
                                        <div className="image">
                                            <img src="https://avatars.githubusercontent.com/u/84291148?v=4" alt="Member" />
                                            <div className="social-links">
                                                <a href="#"><i className="fab fa-github"></i></a>
                                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h4>Ayah Abdalqader</h4>
                                            <span className="designation">Full-Stack Developer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="team-member wow fadeInUp delay-0-5">
                                        <div className="image">
                                            <img src="https://avatars.githubusercontent.com/u/129458608?v=4" alt="Member" />
                                            <div className="social-links">
                                                <a href="https://github.com/jadaan96"><i className="fab fa-github"></i></a>
                                                <a href="https://www.linkedin.com/in/mohammadjadaan/"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h4>Mohammad ALJadaan</h4>
                                            <span className="designation">Full-Stack Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="bg-lines for-bg-white">
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                    </div>
                </section>

                {/* <div className="counter-area rel z-1">
                    <div className="container">
                        <Fade triggerOnce>
                            <div className="bgc-lighter pt-15">
                                <div className="row gap-70">
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="counter-item style-three counter-text-wrap wow fadeInUp delay-0-2s">
                                            <span className="count-text" data-speed="3000" data-stop="49">0</span>
                                            <span className="counter-title">Projects Completed</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="counter-item style-three counter-text-wrap wow fadeInUp delay-0-3s">
                                            <span className="count-text" data-speed="3000" data-stop="305">0</span>
                                            <span className="counter-title">Luxury Rooms</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="counter-item style-three counter-text-wrap wow fadeInUp delay-0-4s">
                                            <span className="count-text" data-speed="3000" data-stop="68">0</span>
                                            <span className="counter-title">Beaches</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="counter-item style-three counter-text-wrap wow fadeInUp delay-0-5s">
                                            <span className="count-text" data-speed="3000" data-stop="385">385</span>
                                            <span className="counter-title">Regular Guests</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div> */}

                <section className="services-area-four rpt-100 pb-90 rpb-60 rel z-2">
                    <div className="container">
                        <Fade triggerOnce>
                            <div className="row gap-80 justify-content-between align-items-center">
                                <div className="col-lg-5">
                                    <div className="activity-left-content mb-40 rmb-55 wow fadeInUp delay-0-2s">
                                        <div className="section-title mb-35">
                                            <span className="sub-title mb-15">Our Activity</span>
                                            <h2>Quality Services & Food Make Your Trip Enjoyable</h2>
                                            <p>We are dedicated to making your trip enjoyable with quality services and delicious food. We strive to provide you with an unforgettable experience.</p>
                                        </div>
                                        <a className="theme-btn" href="room-grid.html">Explore Our Rooms <i className="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="row gap-50">
                                        <div className="col-lg-4 col-6 col-small">
                                            <div className="service-item style-two wow fadeInUp delay-0-3s">
                                                <div className="icon">
                                                    <i className="flaticon-mop"></i>
                                                </div>
                                                <div className="content">
                                                    <h4><a href="room-details.html">Room Cleaning and Guide</a></h4>
                                                    <p>We offer room cleaning and guidance services to ensure your stay is comfortable and hassle-free.</p>
                                                    <a className="read-more" href="room-details.html">Read More <i className="fa fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6 col-small">
                                            <div className="service-item style-two wow fadeInUp delay-0-4s">
                                                <div className="icon">
                                                    <i className="flaticon-food-delivery"></i>
                                                </div>
                                                <div className="content">
                                                    <h4><a href="room-details.html">Quality Foods & Kitchen</a></h4>
                                                    <p>Indulge in our delicious cuisine and enjoy the quality of our food prepared in our top-notch kitchen.</p>
                                                    <a className="read-more" href="room-details.html">Read More <i className="fa fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6 col-small">
                                            <div className="service-item style-two wow fadeInUp delay-0-5s">
                                                <div className="icon">
                                                    <i className="flaticon-treadmill"></i>
                                                </div>
                                                <div className="content">
                                                    <h4><a href="room-details.html">SPA Treatments and GYM</a></h4>
                                                    <p>Relax and rejuvenate with our spa treatments and stay fit with our well-equipped gym facilities.</p>
                                                    <Link className="read-more" to='./'>Read More <i className="fa fa-angle-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="bg-lines for-bg-white">
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                    </div>
                </section>
            </section >
        </>
    );
}
