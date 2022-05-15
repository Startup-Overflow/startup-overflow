import React from "react";
import Footer from "../Footer";
import Post from "../post";
import "../../components/post.css";
import HeroSection from "../HeroSection";
import blog1 from "../../components/images/blog1.webp";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <div>
      <HeroSection />
      <h1 className="blogs__heading">
        Read <span style={{ color: "#14b8a6" }}>Blogs</span>
      </h1>
      <h4 className="question-ask-link">
        <Link className="registerlink" to="/createBlogs">
          Create new blog
        </Link>
      </h4>
      <div className="wrapper">
        <Post
          img={blog1}
          title="7 Amazing Tips To Grow Your Business Quickly"
          name="Aritra"
          date="05/05/2022"
          button="Read More"
        />
        <Post
          img={blog1}
          title="7 Amazing Tips To Grow Your Business Quickly"
          name="Aritra"
          date="05/05/2022"
          button="Read More"
        />
        <Post
          img={blog1}
          title="7 Amazing Tips To Grow Your Business Quickly"
          name="Aritra"
          date="05/05/2022"
          button="Read More"
        />
        <Post
          img={blog1}
          title="7 Amazing Tips To Grow Your Business Quickly"
          name="Aritra"
          date="05/05/2022"
          button="Read More"
        />
        <Post
          img={blog1}
          title="7 Amazing Tips To Grow Your Business Quickly"
          name="Aritra"
          date="05/05/2022"
          button="Read More"
        />
        <Post
          img={blog1}
          title="7 Amazing Tips To Grow Your Business Quickly"
          name="Aritra"
          date="05/05/2022"
          button="Read More"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;
