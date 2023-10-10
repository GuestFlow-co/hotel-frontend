import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroContactUs() {
  return (
    <div>
        <section className="page-banner-area pt-170 rpt-110 pb-190 rpb-125 rel z-1 bgs-cover bgc-black text-center" style={ {backgroundImage: 'url(https://cdn1.tablethotels.com/media/ecs/global/email/assets/20200402_Zoom/TabletHotels_Public-Mirrored.jpg)'}}>
    <div className="container">
      <div className="banner-inner text-white">
        <h1 className="page-title wow fadeInUp delay-0-2s">Guest Flow</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
            <li className="breadcrumb-item"><Link to="/">home</Link></li>
            <li className="breadcrumb-item active">Contact</li>
          </ol>
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
    </div>
  )
}
