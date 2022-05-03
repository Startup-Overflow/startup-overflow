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
        </Routes>
      </Router>
    </>
  );
}

export default App;
