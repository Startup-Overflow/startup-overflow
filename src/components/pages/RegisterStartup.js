import "./RegisterStartup.css";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import { Button } from "../Button";
function RegisterStartup() {
  function registerStartupSubmitHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="register-startup">
      <HeroSection />
      <div className="edit-profile-heading">
        Register
        <span className="edit-profile-heading-selected"> Startup</span>
      </div>
      <input placeholder="Startup Name" type="text" className="startup-title" />
      <div className="short-description">
        <textarea
          placeholder="Short Description"
          className="short-description-textarea-register-startup"
        ></textarea>
      </div>
      <input
        placeholder="Add Some Hashtags"
        type="text"
        className="startup-title register-hashtag"
      />
      <div className="register-startup-button">
        <Button
          onClick={registerStartupSubmitHandler}
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Submit
        </Button>
      </div>
      <Footer />
    </div>
  );
}
export default RegisterStartup;
