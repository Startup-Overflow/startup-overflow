import React from "react";
import Footer from "../Footer";
import Post from "../Post";
import "../../components/Post.css";
import HeroSection from "../HeroSection";
import blog1 from '../../components/images/blog1.webp';
 
function Blogs() {
    return(
        <div>
            <HeroSection />
            <h1 className="blogs__heading">Read <span style={{color: "#14b8a6"}}>Blogs</span></h1>
            <div className="wrapper">
            <Post
                img={blog1}
                title="7 Amazing Tips To Grow Your Business Quickly"
                description=""
                button="Read More"
            />
            </div>
            <Footer />
        </div>
    );
}

export default Blogs;