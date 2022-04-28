import "./About.css";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
function About() {
  return (
    <div>
      <HeroSection />
      <div className="about-heading">
        About <span className="about-highlight">Startup Overflow</span>
      </div>
      <p className="about-content">
        A startup or start-up is a company or project undertaken by an
        entrepreneur to seek, develop, and validate a scalable business model.
        While entrepreneurship refers to all new businesses, including
        self-employment and businesses that never intend to become
        registered,startups refer to new businesses that intend to grow large
        beyond the solo founder. At the beginning, startups face high
        uncertainty and have high rates of failure, but a minority of them do go
        on to be successful and influential.Because of the lack of information,
        high uncertainty, the need to make decisions quickly, founders of
        startups use many heuristics and exhibit biases in their startup
        actions. Biases and heuristics are parts of our cognitive toolboxes in
        the decision-making process. They help us decide quickly as possible
        under uncertainty but sometimes become erroneous and fallacious.
      </p>
      <Footer />
    </div>
  );
}
export default About;
