import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Logo from './images/logo.png';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Event newsletter to receive news about our upcoming events or workshops
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>Innovative Ideas</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Questions</Link>
            <Link to='/'>Startups</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Mentorship</Link>
            <Link to='/'>Partnership</Link>
            <Link to='/'>Investments</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Motivations</Link>
            <Link to='/'>Events</Link>
            <Link to='/'>Workshops</Link>
            <Link to='/'>Sessions</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src={Logo} id='logo' alt='text'/>
              Startup Overflow
            </Link>
          </div>
          <small className='website-rights'>Startup Overflow © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;