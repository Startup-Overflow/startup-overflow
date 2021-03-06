import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Query from "../Query";
import Card from "../Card";
import SessionCard from "../SessionCard";
import "../../components/Card.css";
import "../../components/SessionCard.css";
import Brajesh from "../../components/images/Brajesh_Maheshwari.jpg";
import Vinay from "../../components/images/Vinay-kumar-reddy.jpg";
import Prasant from "../../components/images/Dr P Prasant.jpg";
import Chandan from "../../components/images/Chandan_Aggarwal.jpg";
import Durga from "../../components/images/Dhana-Durga.jpeg";
import Karan from "../../components/images/Karan Shah.jpg";
import Session1 from "../../components/images/session1.webp";
import Session2 from "../../components/images/session2.png";
import Session3 from "../../components/images/session3.webp";
import Video from "../Video";
import "../../components/Video.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testimonials from "../Testimonials";

function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <HeroSection />
      <Query />
      <h1 className="card__heading">Our Top Mentors</h1>
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
      </div>
      <h1 className="sessions__heading">Upcoming Live Sessions</h1>
      <div className="wrapper">
        <SessionCard
          img={Session1}
          title="Innovation & Entrepreneurship"
          date="18/01/22 - 10/05/22"
          time="05:30 am IST"
        />
        <SessionCard
          img={Session2}
          title="Academy for Women Entrepreneurs"
          date="26/09/22"
          time="12:00 pm IST - 02:00 pm IST"
        />
        <SessionCard
          img={Session3}
          title="Entrepreneur Business Accelerator"
          date="14/03/22 - 23/03/22"
          time="08:00 am IST - 05:00 pm IST"
        />
      </div>
      <h1 className="video__heading">Motivational Videos</h1>
      <Carousel responsive={responsive}>
        <div>
          <Video url="https://youtu.be/4HhYjeluSak" />
        </div>
        <div>
          <Video url="https://youtu.be/wbkpaA6LH80" />
        </div>
        <div>
          <Video url="https://youtu.be/jfeYsRZkTi8" />
        </div>
        <div>
          <Video url="https://youtu.be/4HhYjeluSak" />
        </div>
        <div>
          <Video url="https://youtu.be/wbkpaA6LH80" />
        </div>
        <div>
          <Video url="https://youtu.be/jfeYsRZkTi8" />
        </div>
      </Carousel>
      <h1 className="testimonials__heading">Testimonials</h1>
      <Carousel responsive={responsive}>
        <div>
          <Testimonials
            img={Brajesh}
            title="Brajesh Maheshwari"
            desg="Co-Founder Director of Allen Career Institute"
            desc="Awesome"
          />
        </div>
        <div>
          <Testimonials
            img={Vinay}
            title="Vinay Kumar Reddy Nuvvuru"
            desg="Founder & Chairman of Indian Academy of Competitive Exams"
            desc="The work you are doing and the effort you are making to improve the startup scenario for India is really commendable"
          />
        </div>
        <div>
          <Testimonials
            img={Prasant}
            title="Dr P Prasant"
            desg="Speaker, Educator and Administrator"
            desc="Great events are being organised"
          />
        </div>
        <div>
          <Testimonials
            img={Brajesh}
            title="Brajesh Maheshwari"
            desg="Co-Founder Director of Allen Career Institute"
            desc="Awesome"
          />
        </div>
        <div>
          <Testimonials
            img={Vinay}
            title="Vinay Kumar Reddy Nuvvuru"
            desg="Founder & Chairman of Indian Academy of Competitive Exams"
            desc="The work you are doing and the effort you are making to improve the startup scenario for India is really commendable"
          />
        </div>
        <div>
          <Testimonials
            img={Prasant}
            title="Dr P Prasant"
            desg="Speaker, Educator and Administrator"
            desc="Great events are being organised"
          />
        </div>
      </Carousel>
      <Footer />
    </>
  );
}

export default Home;
