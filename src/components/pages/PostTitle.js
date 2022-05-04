import "./PostTitle.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";
function PostTitle() {
  return (
    <div className="post-title-new">
      <div className="post-title-header">
        <div className="header-title">Risk Breaking Concept</div>
        <div className="posted-by">
          Posted by,
          <span className="posted-by-name">
            <Link to="/Login" className="link">
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
        <span className="up-down-vote-btn">
          <Button buttonStyle="btn--outline" buttonSize="btn--large">
            Upvote
          </Button>
          <Button buttonStyle="btn--outline" buttonSize="btn--large">
            Downvote
          </Button>
        </span>
      </div>
    </div>
  );
}
export default PostTitle;
