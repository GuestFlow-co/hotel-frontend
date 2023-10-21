import React from 'react'
import './AboutUs.scss'
import { Link } from 'react-router-dom'



export default function AboutUs() {
    return (
        <>
            {/* Page Banner Start */}
            <section className="page-banner-area pt-170 rpt-110 pb-190 rpb-125 rel z-1 bgs-cover bgc-black text-center" style={{ backgroundImage: "url(https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",backgroundAttachment:"fixed" }}>
                <div className="container">
                    <div className="banner-inner text-white rpb-25">
                        <h1 className="page-title wow fadeInUp delay-0-2s" style={{fontFamily:'Noto Serif'}}>About GUESTFLOW</h1>
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
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5">
                            <div className="about-page-content rmb-55 wow fadeInUp delay-0-2s">
                                <div className="section-title mb-35">
                                    <span className="sub-title mb-15">About Company</span>
                                    <h2>We Help to Provide Quality Hotel Services & Foods</h2>
                                    <p>Sed ut perspiciatis unde omniste natus voluptatem accusantiume doloremque laudantium, totam rem aperiam inventore</p>
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
                                        <p>Quis autem vel eum iure reprehenderit quie voluptate velite esse quam nihil molestiae consequatur eumey</p>
                                    </div>
                                </div>
                                <div className="feature-item style-two wow fadeInUp delay-0-4s">
                                    <div className="icon">
                                        <i className="flaticon-mission"></i>
                                    </div>
                                    <div className="content">
                                        <h3>Hotel & Suites</h3>
                                        <p>Quis autem vel eum iure reprehenderit quie voluptate velite esse quam nihil molestiae consequatur eumey</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praesentium voluptatum deleniti atque corrupti quose dolores et quas molestias cupiditate non similique</p>
                                </div>
                                <Link className="theme-btn style-two" to='./tour'>Get Started Us <i className="fa fa-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-lines for-bg-white">
                    <span></span><span></span>
                    <span></span><span></span>
                    <span></span><span></span>
                    <span></span><span></span>
                    <span></span><span></span>

                </div>

                <section class="team-area pt-130 rpt-100 pb-70 rpb-40 rel z-1">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-6 col-lg-8 col-md-11">
                                <div class="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                                    <span class="sub-title mb-15">Meet Our Team</span>
                                    <h2>We Have Professional Team Member Let’s Talk Our Experience</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                <div class="team-member wow fadeInUp delay-0-2s">
                                    <div class="image">
                                        <img src="https://imgbucketfordestinate.s3.eu-north-1.amazonaws.com/DSC_0333.jpg.jpeg" alt="Member" />
                                        <div class="social-links">
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i class="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <h4>Saleh</h4>
                                        <span class="designation">CEO & Founder</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                <div class="team-member wow fadeInUp delay-0-4">
                                    <div class="image">
                                        <img src="https://cdn.discordapp.com/attachments/1109771828454510602/1141200163138965545/farah_new__photo.jfif?ex=65388079&is=65260b79&hm=8e10c9456004e1147270cf7e85d2ab2cbb20c1ac4011036a0a682bc20f86cea8&" alt="Member" />
                                        <div class="social-links">
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i class="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <h4>Farah</h4>
                                        <span class="designation">Junior Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                <div class="team-member wow fadeInUp delay-0-3">
                                    <div class="image">
                                        <img src="https://avatars.githubusercontent.com/u/84291148?v=4" alt="Member" />
                                        <div class="social-links">
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i class="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <h4>Ayah</h4>
                                        <span class="designation">Senior  Manager</span>
                                    </div>
                                </div>
                            </div>
                           
                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                <div class="team-member wow fadeInUp delay-0-5">
                                    <div class="image">
                                        <img src="https://avatars.githubusercontent.com/u/129458608?v=4" alt="Member" />
                                        <div class="social-links">
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i class="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <h4>Mohammed</h4>
                                        <span class="designation">Business Consultant</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-lines for-bg-white">
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                    </div>
                </section>

                <div className="counter-area rel z-1">
                    <div className="container">
                        <div className="bgc-lighter pt-15">
                            <div className="row gap-70">
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="counter-item style-three counter-text-wrap wow fadeInUp delay-0-2s">
                                        <span className="count-text" data-speed="3000" data-stop="49">0</span>
                                        <span className="counter-title">Projects complete</span>
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
                    </div>
                </div>


                <section className="services-area-four pt-130 rpt-100 pb-90 rpb-60 rel z-2">
                    <div className="container">
                        <div className="row gap-80 justify-content-between align-items-center">
                            <div className="col-lg-5">
                                <div className="activity-left-content mb-40 rmb-55 wow fadeInUp delay-0-2s">
                                    <div className="section-title mb-35">
                                        <span className="sub-title mb-15">Our Activity</span>
                                        <h2>Quality Services & Food Your Trip Are Enjoyable</h2>
                                        <p>Sed ut perspiciatis unde omniste natus voluptatem accusantiume doloremque laudantium, totam rem aperiam inventore</p>
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
                                                <p>To take a trivial example which of ever undertakes laborious exerc obtain</p>
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
                                                <h4><a href="room-details.html">Quality Foods & kitchen</a></h4>
                                                <p>Quis autem vel eum iure repreh enderit voluptatey velit esse molestiae</p>
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
                                                <p>Quis autem vel eum iure repreh enderit voluptatey velit esse molestiae</p>
                                                <Link className="read-more" to='./'>Read More <i className="fa fa-angle-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-lines for-bg-white">
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                    </div>
                </section>

            </section>

        </>
    )
}
