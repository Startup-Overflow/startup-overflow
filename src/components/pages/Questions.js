import "./Question.css";
import { useState } from "react";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import { Link } from "react-router-dom";
function Question() {
  const [like, setLike] = useState(100);
  const [disLike, setDisLike] = useState(4);
  const [likeActive, setLikeActive] = useState(false);
  const [disLikeActive, setDisLikeActive] = useState(false);

  function likef() {
    if (likeActive) {
      setLikeActive(false);
      setLike(like - 1);
    } else {
      setLikeActive(true);
      setLike(like + 1);
      if (disLikeActive) {
        setDisLikeActive(false);
        setLike(like + 1);
        setDisLike(disLike - 1);
      }
    }
  }
  function disLikef() {
    if (disLikeActive) {
      setDisLikeActive(false);
      setDisLike(disLike - 1);
    } else {
      setDisLikeActive(true);
      setDisLike(like + 1);
      if (likeActive) {
        setLikeActive(false);
        setDisLike(disLike + 1);
        setLike(like - 1);
      }
    }
  }
  const questionSet = [
    "HOW DO YOU START A STARTUP?",
    "WHAT DO STARTUPS NEED TO KNOW?",
    "WHY DO STARTUPS FAIL?",
    "WHY DO STARTUPS SUCCEED?",
    "HOW TO OBTAIN STARTUP FUNDING/CAPITAL?",
    "HOW TO DEVELOP A START-UP TO A SCALE-UP?",
  ];
  const answerSet = [
    "The three necessary components to start a startup are an idea, investment and time. You will need to be working on all fronts simultaneously, find the right contacts and the support systems necessary to secure funding or be able to bootstrap your startup yourself. (bootstrapping = using your own savings or those of close friends and family and not relying on outside investment)",
    "When it comes to what you need to know, basic business principles apply. From a business-centric viewpoint you will need to know your target audience, conduct market research, find investors, register and pick a location (you can also choose to be location independent), and develop a product that stands out from the market. As a startup, you will also need to develop your company's culture, stay passionate and true to your focus and learn when to take feedback and when to ignore it. Overall, what you need to know is that startups are a lot of hard work and require patience and determination to succeed in.",
    "There are myriad reasons why startups fail and most of them can be prevented. The reason is simply that not all startups develop a product the market needs or wants to reward financially. We also see the same “traditional” problems affecting other businesses such as lack of money, ineffective team management, bad marketing, pricing or better competitors.",
    "Startups that manage to become successful are prepared, have a sensible business model and can position themselves within a market that offers long term exponential growth.",
    "There are a few different ways to get funding for your startup: bootstrapping (your own savings, friends and family), angel investors, venture capital, government loans, government subsidies and crowdfunding. You will need to pick an option based on the maturity of your business, the initiatives or grants available in your location and whether or not you want to rely on outside investors.",
    "Let's assume that you already have a startup going and now you are looking to “scale up”. The first thing to keep in mind is that the foundations that determine whether a startup is even scalable, are set in the very beginning. The plan to scale-up should be in place from the start with the basics: launching an MVP (minimum viable product), market research, a solid team, and a product that fits the market. Scaling is more than just growing though, it is about adding value, products and services to make your customer's life easier, without increasing costs. The right time to scale up and the way each startup will do it is unique and based on what you have built so far, cash flow, team dynamics and what your concrete goals are for the near future.",
  ];
  return (
    <div>
      <HeroSection />
      <div className="question">
        <h1 className="question-heading">Questions</h1>
        <h4 className="question-ask-link">Ask a Question</h4>
        <p className="question-question">
          <span className="q">Q</span> {questionSet[0]}
        </p>
        <div className="answer-block">
          <p className="question-answer-block">{answerSet[0]}</p>
        </div>
        <div className="answer-name">
          Answered by:
          <span>
            <Link className="answer-personal-link" to="/Login">
              Aritra
            </Link>
          </span>
          <span className="vote">
            <button onClick={likef}>Like {like}</button>
            <button onClick={disLikef}>Dislike {disLike}</button>
          </span>
        </div>
        <p className="question-question">
          <span className="q">Q</span> {questionSet[1]}
        </p>
        <div className="answer-block">
          <p className="question-answer-block">{answerSet[1]}</p>
        </div>
        <div className="answer-name">
          Answered by:
          <span>
            <Link className="answer-personal-link" to="/Login">
              Aritra
            </Link>
          </span>
        </div>
        <p className="question-question">
          <span className="q">Q</span> {questionSet[2]}
        </p>
        <div className="answer-block">
          <p className="question-answer-block">{answerSet[2]}</p>
        </div>
        <div className="answer-name">
          Answered by:
          <span>
            <Link className="answer-personal-link" to="/Login">
              Aritra
            </Link>
          </span>
        </div>
        <p className="question-question">
          <span className="q">Q</span> {questionSet[3]}
        </p>
        <div className="answer-block">
          <p className="question-answer-block">{answerSet[3]}</p>
        </div>
        <div className="answer-name">
          Answered by:
          <span>
            <Link className="answer-personal-link" to="/Login">
              Aritra
            </Link>
          </span>
        </div>
        <p className="question-question">
          <span className="q">Q</span> {questionSet[4]}
        </p>
        <div className="answer-block">
          <p className="question-answer-block">{answerSet[4]}</p>
        </div>
        <div className="answer-name">
          Answered by:
          <span>
            <Link className="answer-personal-link" to="/Login">
              Aritra
            </Link>
          </span>
        </div>
        <p className="question-question">
          <span className="q">Q</span> {questionSet[5]}
        </p>
        <div className="answer-block">
          <p className="question-answer-block">{answerSet[5]}</p>
        </div>
        <div className="answer-name">
          Answered by:
          <span>
            <Link className="answer-personal-link" to="/Login">
              Aritra
            </Link>
          </span>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Question;
