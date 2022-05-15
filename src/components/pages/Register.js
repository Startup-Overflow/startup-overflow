import "./Register.css";
import { useState } from "react";
import Footer from "../Footer";
import registerImg from "../images/registerImg.svg";
import { Link } from "react-router-dom";
import { Button } from "../Button";

function Register() {
  const [regFName, setregFName] = useState("");
  const [regLName, setregLName] = useState("");
  const [regEmail, setregEmail] = useState("");
  const [regUser, setregUser] = useState("");
  const [regPassword, setregpassword] = useState("");
  const [regConfirmPassword, setregConfirmPassword] = useState("");

  const registerHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="main-register">
        <div className="left-register-side">
          <div className="body-register">
            <img src={registerImg} alt="img not found" id="register-img-id" />
          </div>
          <p className="register-description">
            Startup Overflow is a platform for building entrepreneurs and
            entrepreneurship enthusiasts. It is a one stop solution for all your
            queries related to buisness, entrepreneurship ans startups.
            Entrepreneurs and Startup enthusiasts both can ask questions in the
            open forum which will be answered by the mentors.
          </p>
        </div>
        <div className="right-register-side">
          <div className="top-right-register">
            Already have an Account ?
            <Link id="link-signIn" to="/login">
              <b>Sign In</b>
            </Link>
          </div>
          <div className="body-right-register">
            <div className="container-register">
              <h1 className="register-header">Create Account !</h1>
              <form onSubmit={registerHandler}>
                <div className="input-group-register">
                  <label>First name</label>
                  <input
                    type="text"
                    name="regFName"
                    id="regFName"
                    value={regFName}
                    onChange={(e) => {
                      setregFName(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group-register">
                  <label>Last name</label>
                  <input
                    type="text"
                    name="regLName"
                    id="regLName"
                    value={regLName}
                    onChange={(e) => {
                      setregLName(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group-register">
                  <label>Email ID</label>
                  <input
                    type="Email"
                    name="regEmail"
                    id="regEmail"
                    value={regEmail}
                    onChange={(e) => {
                      setregEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group-register">
                  <label>Username</label>
                  <input
                    type="text"
                    name="regUser"
                    id="regUser"
                    value={regUser}
                    onChange={(e) => {
                      setregUser(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group-register">
                  <label>Password</label>
                  <input
                    type="password"
                    name="regpassword"
                    id="regPassword"
                    value={regPassword}
                    onChange={(e) => {
                      setregpassword(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group-register">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="regConfirmPassword"
                    id="regConfirmPassword"
                    value={regConfirmPassword}
                    onChange={(e) => {
                      setregConfirmPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="registerBtn">
                  <Button
                    onClick={registerHandler}
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                  >
                    Register
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Register;
