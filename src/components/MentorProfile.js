import "./MentorProfile.css";
import { Button } from "./Button";

function MentorProfile(props) {
  const elements = props.specialization;
  const items = [];
  for (const [index, value] of elements.entries()) {
    items.push(<li key={index}>{value}</li>);
  }
  const bookEventHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="mentorContainer">
        <img
          className="card__image mentorImage"
          src={props.img}
          alt="Img not Found"
        />
        <div className="mentorName">
          <h1>{props.name}</h1>
          <h5>{props.desc}</h5>
        </div>

        <div className="availability">Availability: {props.availability}</div>
        <div className="experience">Experience:{props.experience}</div>
        <hr />
        <div className="specialization">Mentor Specialization:</div>
        <div className="specializationItems">{items}</div>
        <div className="mentorBio">Mentor Bio:</div>
        <div className="bio">{props.bio}</div>
        <div className="mentorBtn">
          <Button
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={bookEventHandler}
          >
            {props.btnName}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MentorProfile;
