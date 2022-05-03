import "./EditProfile.css";
import { useState } from "react";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import { Button } from "../Button";
import { Multiselect } from "multiselect-react-dropdown";
function EditProfile() {
  function editProfileHandler(e) {
    e.preventDefault();
  }
  const data = [
    { profile: "Entrepreneur", id: 1 },
    { profile: "Mentor", id: 2 },
    { profile: "Investor", id: 3 },
    { profile: "Partner", id: 4 },
  ];
  const [options] = useState(data);
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
      <div className="multiple-select">
        <Multiselect
          options={options}
          className="multi-profile"
          displayValue="profile"
        />
      </div>
      <div className="edit-profile-btn">
        <Button
          onClick={editProfileHandler}
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

export default EditProfile;
