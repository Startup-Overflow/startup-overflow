import { useState } from "react";
import "./Login.css";
import logo from "../images/logo.png";
import welcomeImg from "../images/welcomeImg.svg";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import HOST from "../../Host";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [msg, setMsg] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`${HOST}/users/login/`,{
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify({
          username,
          password,
      })
    })
    // .then(res =>{
    //   return res.json()
    // })
    // .then(data => console.log(data))
    // .catch(error => console.log('ERROR'))

    const content = await response.json()
    if (typeof content.token !== 'undefined') {
        localStorage.setItem("token",content.token)
        console.log("token type",content.token)
        setRedirect(true);
    }
    else{
        setMsg("Invalid Username or Password");
    }
  };

  return (
    <div className="main-login">
      <div className="login-container">
        <div className="left-side">
          <div className="logo-header">
            <img src={logo} alt="img not found" id="img-id" />
          </div>
          <form onSubmit={submitHandler}>
            <label htmlFor="username">Username</label>
            <input
              placeholder="enter username"
              type="text"
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
              id="username"
            />
            <div style={{color:"red"}}>{msg}</div>
            <label htmlFor="password">Password</label>
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
