import "./PostTitle.css";
import { Button } from "../Button";

import Footer from "../Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
function PostTitle() {
  const [count, setCount] = useState(4);
  const incrementCount = (e) => {
    setCount(count + 1);
    e.preventDefault();
  };
  const decrementCount = (e) => {
    setCount(count - 1);
    e.preventDefault();
  };

  const comments = [
    {
      name: "Sudipta",
      id: 1,
      comment: "Front-End developer of this project",
    },
    { name: "Aritra", id: 2, comment: "Startup website" },
    { name: "Ujjwal", id: 3, comment: "Back-end developer of this project" },
  ];
  const commentItems = comments.map((element) => {
    return (
      <ul type="disc">
        <li
          style={{
            fontSize: "1.2rem",
            color: "#14b8a6",
            listStyleType: "none",
          }}
        >
          {element.id + ". "}
          {element.name}
        </li>
        <li
          style={{
            margin: "10px",
            marginLeft: "20px",
            listStyleType: "none",
            color: "#242424",
            fontStyle: "italic",
          }}
        >
          {"-> " + element.comment}
        </li>
      </ul>
    );
  });

  return (
    <div className="post-title-new">
      <div className="post-title-header">
        <div className="header-title">Risk Breaking Concept</div>
        <div className="posted-by">
          Posted by,
          <span className="posted-by-name">
            <Link to="/Login" className="postTitleLink">
              Aritra
            </Link>
          </span>
          <div className="eventDateTime post-event-date">
            <i class="fa fa-calendar"></i>
            <span className="date">05/04/2022</span>
            <i class="fa fa-clock"></i>
            <span className="time">06:30 am IST</span>
          </div>
        </div>
      </div>
      <div className="post-short-description">
        This is the premier and most popular concept. "entrepreneurship is a
        function of taking unlimited risks." This has revealed that the
        entrepreneur has to bear various types of risks for establishing the new
        enterprise and operating it. Entrepreneurship as the concept capacity
        bear uncertainties. Further, elaborating it they have made a slight
        differentiation between risk and uncertainty. According to this,
        "Uncertainty bear risk, which can neither be predicted nor insured."
      </div>
      <div className="short-description">
        <textarea
          placeholder="Post Description"
          className="short-description-textarea post-title-description"
        ></textarea>
      </div>
      <div className="up-down-vote">
        <span>
          <Button
            onClick={incrementCount}
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Upvote
          </Button>
          <output id="vote-result">{count}</output>
          <Button
            onClick={decrementCount}
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Downvote
          </Button>
        </span>
      </div>
      <div className="comment-heading">Join Discussion!</div>
      <div className="comment-section">
        <div>Name</div>
        <input type="text" id="name-comment" />
        <div>Comment</div>
        <input type="text" id="type-comment" />
      </div>
      <div className="commentBtn">
        <Button>Comment</Button>
      </div>
      <div className="comment-sub-heading">Comments</div>
      <div className="comment-section ">
        <div>{commentItems}</div>
      </div>

      <Footer />
    </div>
  );
}
export default PostTitle;
