import React from "react";
import "../../App.css";
import HeroSection from "../../components/HeroSection";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import "../../components/Card.css";
import Brajesh from "../../components/images/Brajesh_Maheshwari.jpg";
import Vinay from "../../components/images/Vinay-kumar-reddy.jpg";
import Prasant from "../../components/images/Dr P Prasant.jpg";
import Chandan from "../../components/images/Chandan_Aggarwal.jpg";
import Durga from "../../components/images/Dhana-Durga.jpeg";
import Karan from "../../components/images/Karan Shah.jpg";
// import MentorProfile from '../MentorProfile'

function Mentors(props) {
  return (
    <div>
      <HeroSection />
      <h1 className="card__heading">
        Find Your <span style={{ color: "#14b8a6" }}>Mentors</span>
      </h1>
      <div className="wrapper">
        <Card
          img={Brajesh}
          title="Brajesh Maheshwari"
          desc="Co-Founder Director of Allen Career Institute"
        />
        <Card
          img={Vinay}
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
        />
        <Card
          img={Prasant}
          title="Dr P Prasant"
          desc="Speaker, Educator and Administrator in teaching Cyber Security IT, Computer Applications, and Management Courses"
        />
        <Card
          img={Chandan}
          title="Dr Chandan Agarwal"
          desc="Chairperson of G.D. Goenka School, Kanpur & Bareilly"
        />
        <Card
          img={Durga}
          title="Dhana Durga"
          desc="Founder and Principal, Sree Vivekananda Educational Society"
        />
        <Card
          img={Karan}
          title="Karan Shah"
          desc="Founder & CEO of IIDE of India's Leading Digital Marketing Edtech"
        />
        <Card
          img={Brajesh}
          title="Brajesh Maheshwari"
          desc="Co-Founder Director of Allen Career Institute"
        />
        <Card
          img={Vinay}
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
        />
        <Card
          img={Prasant}
          title="Dr P Prasant"
          desc="Speaker, Educator and Administrator in teaching Cyber Security IT, Computer Applications, and Management Courses"
        />
        <Card
          img={Chandan}
          title="Dr Chandan Agarwal"
          desc="Chairperson of G.D. Goenka School, Kanpur & Bareilly"
        />
        <Card
          img={Durga}
          title="Dhana Durga"
          desc="Founder and Principal, Sree Vivekananda Educational Society"
        />
        <Card
          img={Karan}
          title="Karan Shah"
          desc="Founder & CEO of IIDE of India's Leading Digital Marketing Edtech"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Mentors;
