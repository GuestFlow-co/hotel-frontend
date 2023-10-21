import React from 'react'
import { Link } from "react-router-dom";



export default function PageNotFound() {
    return (
        <div>
            <section className="page-banner-area pt-195 rpt-135 pb-190 rpb-125 rel z-1 bgs-cover bgc-black text-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/453201/pexels-photo-453201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                <div className="container">
                    <div className="banner-inner text-white rpb-25">
                        <h2 className="page-title wow fadeInUp delay-0-2s p-10">404</h2>
                        <h2 className="page-title wow fadeInUp delay-0-2s p-10">Page Not Found</h2>

                        <Link className="theme-btn" to='/'>Back to Home <i className="fa fa-angle-right"></i></Link>

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
        </div>
    )
}
