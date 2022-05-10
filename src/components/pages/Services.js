import React from 'react';
import '../../App.css';

export default function Services() {
  return(
    <div>
      <h1 className='services_heading'>Our <span style={{color:'#14b8a6'}}>Services</span></h1>
      <div className='box-container'>
      <div class="box">
            <i class="fa fa-calendar"></i>
            <h3>Events</h3>
            <p>We are back in the post-pandemic world with a bouquet of hotels across Indian cities ranging from leisure to business ones with a new outlook.</p>
        </div>
        <div class="box">
            <i class="fa fa-calendar"></i>
            <h3>Workshops & Sessions
            </h3>
            <p>we offer a range of shelves displaying glassware and bottles. A dining system where the guests serve themselves.</p>
        </div>
        <div class="box">
            <i class="fa fa-user-plus"></i>
            <h3>Mentorship</h3>
            <p>Nothing can be better than looking at the world in a different way with our world tour packages from Indian cities.</p>
        </div>
        <div class="box">
            <i class="fa fa-users"></i>
            <h3>Partnership</h3>
            <p>We provide patient transportation to a medical centre is no less challenging than treatment or checkup.</p>
        </div>
        <div class="box">
            <i class="fa fa-usd" aria-hidden="true"></i>
            <h3>Investment</h3>
            <p>We provide Adventurous travel which is a leisure activity that takes place in an unusual, exotic, remote or wilderness destination.</p>
        </div>
        <div class="box">
            <i class="fa fa-lightbulb"></i>
            <h3>Innovative ideas</h3>
            <p>We provide Adventurous travel which is a leisure activity that takes place in an unusual, exotic, remote or wilderness destination.</p>
        </div>
      </div>
    </div>
  );
}