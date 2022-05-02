import "./EditProfile.css";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
function EditProfile() {
  return (
    <div className="edit-profile">
      <HeroSection />
      <div className="edit-profile-heading">
        Edit
        <span className="edit-profile-heading-selected"> Profile</span>
      </div>
      <div className="name-input">
        <span>
          <input type="text" id="fname-edit" placeholder="First Name" />
          <input type="text" id="lname-edit" placeholder="Last Name" />
        </span>
      </div>
      <div className="short-description">
        <textarea
          placeholder="Enter Bio"
          className="short-description-textarea textarea-edit"
        ></textarea>
      </div>
      <div className="name-input">
        <span>
          <input type="text" id="hobbies-edit" placeholder="Hobbies" />
          <input type="text" id="skills-edit" placeholder="Skills" />
          <input type="text" id="interest-edit" placeholder="Interest" />
        </span>
      </div>
      <Footer />
    </div>
  );
}

export default EditProfile;
