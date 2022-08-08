import "./Register.css";
import { useState } from "react";
import Footer from "../Footer";
import registerImg from "../images/registerImg.svg";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import HOST from '../../Host';

function Register() {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const [redirect, setRedirect] = useState(false);

  const registerHandler = async (e) => {
    e.preventDefault();

    if (password===confirm_password){
      const response = await fetch(`${HOST}/users/register/`,{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({
            first_name,
            last_name,
            email,
            username,
            password,
            confirm_password
        })
    })
    setRedirect(true)
    const content = await response.json()
    console.log(content)
  }
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
                    name="first_name"
                    id="first_name"
                    value={first_name}
                    onChange={(e) => {
                      setfirst_name(e.target.value);
                    }}
                  required/>
                </div>
                <div className="input-group-register">
                  <label>Last name</label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    value={last_name}
                    onChange={(e) => {
                      setlast_name(e.target.value);
                    }}
                  required/>
                </div>
                <div className="input-group-register">
                  <label>Email ID</label>
                  <input
                    type="Email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  required/>
                </div>
                <div className="input-group-register">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => {
                      setusername(e.target.value);
                    }}
                  required/>
                </div>
                <div className="input-group-register">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  required/>
                </div>
                <div className="input-group-register">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    value={confirm_password}
                    onChange={(e) => {
                      setconfirm_password(e.target.value);
                    }}
                  required/>
                </div>
                <div className="registerBtn">
                  <Button
                    type="submit"
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
