import React, { useEffect } from "react";

const Signin = () => {
    useEffect(()=>{
        document.title = "Sign In"
    })
  return (
    <>
      <main>
        <div className="signin-container">

        <h1>SignIn</h1>
        </div>
      </main>
    </>
  );
};

export default Signin;
