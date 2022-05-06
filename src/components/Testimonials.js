import React from "react";
import './Testimonials.css';

const Testimonials = (props) => {
    return (
        <div className="testimonials">
            <div className="testimonials__body">
            <img className="testimonials__image" src={props.img} alt="" />
            <h2 className="testimonials__title">{props.title}</h2>
            <div className="testimonials__designation">{props.desg}</div>
            <div className="testimonials__description"><i class='fa fa-quote-left'></i>  {props.desc}  <i class='fa fa-quote-right'></i></div>
            <i class='fa fa-star'></i>
            <i class='fa fa-star'></i>
            <i class='fa fa-star'></i>
            <i class='fa fa-star'></i>
            <i class='fa fa-star'></i>
            </div>
        </div>
    );
}

export default Testimonials;