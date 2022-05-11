import { useState } from "react";
import "./Login.css";
import logo from "../images/logo.png";
import welcomeImg from "../images/welcomeImg.svg";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import Footer from "../Footer";
function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-login">
      <div className="login-container">
        <div className="left-side">
          <div className="logo-header">
            <img src={logo} alt="img not found" id="img-id" />
          </div>
          <form onSubmit={submitHandler}>
            <label for="username">Username</label>
            <input
              placeholder="enter username"
              type="text"
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
              id="username"
            />

            <label for="password">Password</label>
            <input
              placeholder="enter password"
              type="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              id="password"
            />
            <div className="submitBtn">
              <Button
                onClick={submitHandler}
                buttonStyle="btn--outline"
                buttonSize="btn--large"
              >
                Login
              </Button>
            </div>
          </form>
          <div className="register-link">
            Don't have an Account ?
            <Link className="registerlink" to="/register">
              Register Now
            </Link>
          </div>
        </div>
        <div className="right-side">
          <div className="welcomeNote">
            <h3>Welcome Back!</h3>
          </div>
          <div className="welcomeImg">
            <img src={welcomeImg} alt="img not found" id="welcome-img" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Login;
