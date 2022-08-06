import "./AttendForm.css";
import { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { Button } from "./Button";
function AttendForm() {
  const data = [
    { profile: "Entrepreneur", id: 1 },
    { profile: "Mentor", id: 2 },
    { profile: "Investor", id: 3 },
    { profile: "Partner", id: 4 },
  ];
  const [options] = useState(data);

  const data2 = [
    { interest: "Paid Single Session", id: 1 },
    { interest: "First free 30min Session", id: 2 },
  ];
  const [interests] = useState(data2);
  return (
    <div className="attend-page">
      <div className="attend-form">
        <label id="modallblName">First Name</label>
        <input type="text" id="modalName" placeholder="First Name" />
        <label id="modallblName">Last Name</label>
        <input type="text" id="modalName" placeholder="Last Name" />
        <label id="modallblMail">Email (Buisness Email Preferred)</label>
        <input type="Email" id="modalMail" placeholder="Enter Email ID" />
        <label id="modallblNumber">Phone</label>
        <input type="number" id="modalNumber" />
        <label id="modallblLink">Website / LinkedIn</label>
        <input type="url" id="modalLink" />
        <label id="modallblJob">Are You </label>
        <div id="modalJob">
          <Multiselect
            placeholder="Select job profile"
            id="modalJob"
            options={options}
            displayValue="profile"
          />
        </div>
        <label id="modallblJob">I am Interested In</label>
        <div id="modalInterest">
          <Multiselect
            placeholder="Select your Interest "
            id="modalInterest"
            options={interests}
            displayValue="interest"
          />
        </div>
        <Button buttonStyle="btn--outline" buttonSize="btn--large">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default AttendForm;
