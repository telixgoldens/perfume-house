import React, { useEffect } from "react";
import pzLogo from "../assets/Group 9283.svg";
import googleIcon from "../assets/🦆 icon _google_.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signUpSchema } from "../lib/ValidationSchema";

const onSubmit = (data) => console.log(data);

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  useEffect(() => {
    document.title = "Sign Up";
  });

  return (
    <>
      <main>
        <div className="signin-container ">
          <div className="container d-flex gap-lg-5 justify-content-center pt-5">
            <div className="d-flex gap-lg-2 perfume-logo ">
              <Link to={"/"}>
                <img
                  src={pzLogo}
                  alt="pz-logo"
                  className="pz-logo d-none d-md-block"
                />
              </Link>
              <h2 className="perf d-none d-lg-block">Perfumrye</h2>
            </div>
            <form className="p-md-5 mb-5" onSubmit={handleSubmit(onSubmit)}>
              <h1>Get Started</h1>
              <p>Lets get started by filling out the information below</p>
              <div className="d-flex gap-2">
                <div className=" first-last">
                  <label htmlFor="first-name">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="Enter Name"
                    className="name-space"
                    {...register("firstName")}
                  />
                  <p className="text-danger ">{errors.firstName?.message}</p>
                </div>
                <div className=" first-last">
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Enter Name"
                    className="name-space "
                    {...register("lastName")}
                  />
                  <p className="text-danger">{errors.lastName?.message}</p>
                </div>
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="email-add">Email</label>
                <input
                  type="email"
                  id="email-add"
                  placeholder="Enter your Email"
                  className="other-space"
                  {...register("email")}
                />
                <p className="text-danger">{errors.email?.message}</p>
                <label htmlFor="pass-word">Password</label>
                <input
                  type="password"
                  id="pass-word"
                  placeholder="Enter your Password"
                  className="other-space"
                  {...register("password")}
                />
                <p className="text-danger ">{errors.password?.message}</p>
                <label htmlFor="confirm-pass">Confirm Password</label>
                <input
                  type="password"
                  name=""
                  id="confirm-pass"
                  placeholder="Confirm your Password"
                  className="other-space"
                  {...register("confirmpassword")}
                />
                <p className="text-danger">{errors.confirmPassword?.message}</p>
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
              <hr />
              <p className="or-to-hr">or</p>
              <button className="google-btn">
                <img src={googleIcon} alt="" /> Continue with Google
              </button>
              <h6>
                Already have an account?{" "}
                <span className="text-term">
                  <Link className="text-decoration-none" to={"/auth/signin"}>
                    Sign in
                  </Link>{" "}
                </span>{" "}
              </h6>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
