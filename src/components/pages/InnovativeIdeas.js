import React from "react";
import Footer from "../Footer";
import Post from "../post";
import "../../components/post.css";
import HeroSection from "../HeroSection";
import food from '../../components/images/food.webp';
import { Link } from "react-router-dom";
 
function InnovativeIdeas() {
    return(
        <div>
            <HeroSection />
            <h1 className="blogs__heading"><span style={{color: "#14b8a6"}}>Ideas </span>that predict the future</h1>
            <h4 className="question-ask-link">
            <Link className="registerlink" to="/createIdea">
                Post new ideas
            </Link>
            </h4>
            <div className="wrapper">
            <Post
                img={food}
                title="Create a food waste solution"
                name="Sudipta"
                date="05/05/2022"
                button="View Idea"
            />
            <Post
                img={food}
                title="Create a food waste solution"
                name="Sudipta"
                date="05/05/2022"
                button="View Idea"
            />
            <Post
                img={food}
                title="Create a food waste solution"
                name="Sudipta"
                date="05/05/2022"
                button="View Idea"
            />
            <Post
                img={food}
                title="Create a food waste solution"
                name="Sudipta"
                date="05/05/2022"
                button="View Idea"
            />
            <Post
                img={food}
                title="Create a food waste solution"
                name="Sudipta"
                date="05/05/2022"
                button="View Idea"
            />
            <Post
                img={food}
                title="Create a food waste solution"
                name="Sudipta"
                date="05/05/2022"
                button="View Idea"
            />
            </div>
            <Footer />
        </div>
    );
}

export default InnovativeIdeas;