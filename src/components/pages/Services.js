import React from 'react';
import '../../App.css';

export default function Services() {
  return(
    <div>
      <h1 className='services_heading'>Our <span style={{color:'#14b8a6'}}>Services</span></h1>
      <div className='services-container'>
      <div class="services">
            <i class="fa fa-calendar"></i>
            <h3>Events</h3>
        </div>
        <div class="box">
            <i class="fa fa-calendar"></i>
            <h3>Workshops</h3>
        </div>
        <div class="box">
            <i class="fa fa-calendar"></i>
            <h3>Sessions</h3>
        </div>
        <div class="box">
            <i class="fa fa-user-plus"></i>
            <h3>Mentorship</h3>
        </div>
        <div class="box">
            <i class="fa fa-users"></i>
            <h3>Partnership</h3>
        </div>
        <div class="box">
            <i class="fa fa-usd"></i>
            <h3>Investment</h3>
        </div>
        <div class="box">
            <i class="fa fa-lightbulb"></i>
            <h3>Innovative ideas</h3>
        </div>
      </div>
    </div>
  );
}