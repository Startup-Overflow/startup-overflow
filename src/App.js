import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Questions from "./components/pages/Questions";
import Videos from "./components/pages/Videos";
import Services from "./components/pages/Services";
import Blogs from "./components/pages/Blogs";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import AskQuestion from "./components/pages/AskQuestion";
import EditProfile from "./components/pages/EditProfile";
import RegisterStartup from "./components/pages/RegisterStartup";
import CreateBlogs from "./components/pages/createBlogs";
import PostTitle from "./components/pages/PostTitle";
import Mentors from "./components/pages/Mentors";
import CreateIdea from "./components/pages/CreateIdea";
import ViewProfile from "./components/pages/ViewProfile";
import InnovativeIdeas from "./components/pages/InnovativeIdeas";
import AttendForm from "./components/AttendForm";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/askQuestion" element={<AskQuestion />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/registerStartup" element={<RegisterStartup />} />
          <Route path="/postTitle" element={<PostTitle />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/createBlogs" element={<CreateBlogs />} />
          <Route path="/createIdea" element={<CreateIdea />} />
          <Route path="/viewProfile" element={<ViewProfile />} />
          <Route path="/innovativeIdeas" element={<InnovativeIdeas />} />
          <Route path="/attendForm" element={<AttendForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
