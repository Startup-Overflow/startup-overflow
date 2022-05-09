import React from "react";
import "./Card.css";
import { Button } from "./Button";

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img className="card__image" src={props.img} alt="" />
        <h2 className="card__title">{props.title}</h2>
        <div className="card__description">{props.desc}</div>
        <div className="mentors__rating">
        <i class='fa fa-star'></i>
        <i class='fa fa-star'></i>
        <i class='fa fa-star'></i>
        <i class='fa fa-star'></i>
        <i class='fa fa-star'></i>
        </div>
        <Button buttonStyle="btn--outline">Request Appointment</Button>
        <Button buttonStyle="btn--outline">View Profile</Button>
      </div>
    </div>
  );
}

export default Card;
