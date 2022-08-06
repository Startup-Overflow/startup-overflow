import React from "react";
import "./Card.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Card(props) {
  const requestEventHandler = (event) => {
    event.preventDefault();
  };
  const profileEventhandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="card">
      <div className="card__body">
        <img className="card__image" src={props.img} alt="" />
        <h2 className="card__title">{props.title}</h2>
        <div className="card__description">{props.desc}</div>
        <div className="mentors__rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <Button onClick={requestEventHandler} buttonStyle="btn--outline">
          Request Appointment
        </Button>
        <Button buttonStyle="btn--outline" onClick={profileEventhandler}>
          <Link to="/viewProfile" className="button-link">
            View Profile
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Card;
