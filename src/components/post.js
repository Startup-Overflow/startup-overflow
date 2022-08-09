import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HOST from '../Host';

function Post(props) {
  const PostEventhandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="post">
      <div className="post__body">
        <img className="post__image" src={props.img} alt="Img not Found" />
        <h2 className="post__title">{props.title}</h2>
        <div className="posted__by">Posted by, <span className="posted-by-name">
            <Link to="/Login" className="postTitleLink">
              {props.name}
            </Link></span> on 
            <span className="date">{props.date}</span>
        </div>
      </div>
      <div className="blog__button">
      <Button
        buttonStyle="btn--outline"
        onClick={PostEventhandler}
      >
        {props.button}
      </Button>
      </div>
    </div>
  );
}

export default Post;
