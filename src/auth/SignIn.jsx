import React, { useEffect } from "react";
import logoPZ from "../assets/Group 9283.svg";
import iconGoogle from "../assets/🦆 icon _google_.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signInSchema } from "../lib/ValidationSchema";

const onSubmit = (data) => console.log(data);
const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  useEffect(() => {
    document.title = "Sign In";
  });
  return (
    <>
      <main>
        <div className="signup-container">
          <div className="container d-flex gap-lg-5 justify-content-center pt-5">
            <div className="d-flex gap-lg-2 perfume-logo ">
              <Link to={"/"}>
                <img
                  src={logoPZ}
                  alt="pz-logo"
                  className="pz-logo d-none d-md-block"
                />
              </Link>
              <h2 className="perf d-none d-lg-block">Perfumrye</h2>
            </div>
            <form className="p-md-5 mb-5" onSubmit={handleSubmit(onSubmit)}>
              <h1>Welcome Back</h1>
              <p>Fill in your information to access your account.</p>
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
              </div>
              <div className="d-flex gap-2">
                <input type="checkbox" name="" id="check" />
                <p className="check-text">
                  Remember Me
                  <span className="forget-pass"></span>
                </p>
              </div>
              <button className="btn auth-signup">Sign In</button>
              <hr />
              <p className="or-to-hr">or</p>
              <button className="google-btn">
                <img src={iconGoogle} alt="" /> Continue with Google
              </button>
              <h6>
                Don’t have an account?{" "}
                <span className="text-term">
                  <Link className="text-decoration-none" to={"/auth/signup"}>
                    Sign Up
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

export default Signin;
