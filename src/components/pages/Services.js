import React from 'react';
import '../../App.css';
import event from '../../components/images/icons8-event-64 (1).png';
import workshop from '../../components/images/icons8-workshop-64.png';
import session from '../../components/images/icons8-session-64.png';
import mentorship from '../../components/images/icons8-mentorship-64.png';
import partnership from '../../components/images/icons8-partnership-64.png';
import investment from '../../components/images/icons8-investment-60.png';
import ideas from '../../components/images/icons8-innovation-50.png';

export default function Services() {
  return(
    <div>
    <h1 className='services_heading'>Our <span style={{color:'#14b8a6'}}>Services</span></h1>
      <div className='services-container'>
      <div class="services">
            <img src={event} alt="img not found"></img>
            <h3>Events</h3>
        </div>
        <div class="services">
            <img src={workshop} alt="img not found"></img>
            <h3>Workshops</h3>
        </div>
        <div class="services">
        <img src={session} alt="img not found"></img>
            <h3>Sessions</h3>
        </div>
        <div class="services">
        <img src={mentorship} alt="img not found"></img>
            <h3>Mentorship</h3>
        </div>
        <div class="services">
        <img src={partnership} alt="img not found"></img>
            <h3>Partnership</h3>
        </div>
        <div class="services">
        <img src={investment} alt="img not found"></img>
            <h3>Investment</h3>
        </div>
        <div class="services">
        <img src={ideas} alt="img not found"></img>
            <h3>Innovative ideas</h3>
        </div>
      </div>
    </div>
  );
}