import React, { useEffect } from "react";
import pzLogo from "../assets/Group 9283.svg";
import googleIcon from "../assets/🦆 icon _google_.svg";
import { Link } from "react-router-dom";
const SignUp = () => {
  useEffect(() => {
    document.title = "Sign Up";
  });
  return (
    <>
      <main>
        <div className="signin-container ">
          <div className="container d-flex gap-5 justify-content-center pt-5">
            <div className="d-flex gap-2 perfume-logo ">
              <img src={pzLogo} alt="pz-logo" className="pz-logo" />
              <h2 className="perf">Perfumrye</h2>
            </div>
            <form className="p-5">
              <h1>Get Started</h1>
              <p>Lets get started by filling out the information below</p>
              <div className="d-flex ">
                <div className=" first-last ">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" placeholder="Enter Name" className="name-space" />
                </div>
                <div className=" first-last">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" placeholder="Enter Name" className="name-space " />
                </div>
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="email-add">Email</label>
                <input type="email" id="email-add" placeholder="Enter your Email" className="other-space" />
                <label htmlFor="pass-word">Password</label>
                <input type="password" id="pass-word" placeholder="Enter your Password" className="other-space" />
                <label htmlFor="confirm-pass">Confirm Password</label>
                <input
                  type="password"
                  name=""
                  id="confirm-pass"
                  placeholder="Confirm your Password"
                  className="other-space"
                />
              </div>
              <div className="d-flex gap-2">

                <input type="checkbox" name="" id="check" />
              <p className="check-text">
                I agree to{" "}
                <span className="text-term">
                  Terms of Service and Privacy Policies
                </span>
              </p>
              </div>
              <button className="btn auth-signup">Sign Up</button>
              <hr/>
              <p className="or-to-hr">or</p>
              <button className="google-btn">
                <img src={googleIcon} alt="" /> Continue with Google
              </button>
              <h6>Already have an account? <span className="text-term"><Link className="text-decoration-none" to={"/auth/signin"}>Sign in</Link> </span> </h6>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
