import React from "react";
import './Testimonials.css';

const Testimonials = (props) => {
    return (
        <div className="testimonials">
            <div className="testimonials__body">
            <img className="testimonials__image" src={props.img} alt="" />
            <h2 className="testimonials__title">{props.title}</h2>
            <div className="testimonials__designation">{props.desg}</div>
            <div className="testimonials__description"><i className='fa fa-quote-left'></i>  {props.desc}  <i className='fa fa-quote-right'></i></div>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            </div>
        </div>
    );
}

export default Testimonials;