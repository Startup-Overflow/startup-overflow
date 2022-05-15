import React from "react";
import { Button } from "./Button";

function Post(props) {
  const PostEventhandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="post">
      <div className="post__body">
        <img className="post__image" src={props.img} alt="Img not Found" />
        <h2 className="post__title">{props.title}</h2>
        <div className="post__description">{props.desc}</div>
      </div>
      <Button
        buttonStyle="btn--outline"
        className="blog__button"
        onClick={PostEventhandler}
      >
        {props.button}
      </Button>
    </div>
  );
}

export default Post;
