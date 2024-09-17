import React from "react";
import PZ from "../assets/Group 9283.svg";
import OffCanvas from "../lib/OffCanvas";

const Navbar = () => {
  return (
    <>
      <nav className="container py-4 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <img src={PZ} alt="pz" />
          <h2 className="d-none d-lg-block">Perfume House</h2>
        </div>
        <div className="d-none d-md-flex gap-4">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
        <div className="d-md-none">
          {["top"].map((placement, idx) => (
            <OffCanvas key={idx} placement={placement} name={placement} />
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
