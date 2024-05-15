import React, { useState } from "react";
import "../signup/signup.css";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
const SignIn = () => {
  const [Verified, setVerified] = useState(false);
  console.log(Verified + " successful");
  return (
    <div className="container my-5">
      <form action="index.html" method="post">
        <h1>Sign In</h1>

        <fieldset>
          <label for="name">Username/Email:</label>
          <input type="text" id="name" name="user_name" />
          <label for="password">Password:</label>
          <input type="password" id="password" name="user_password" />
        </fieldset>
        <fieldset>
          <input
            className="text-white"
            type="checkbox"
            id="design"
            value="interest_design"
            name="user_interest"
          />
          <label class="light" for="Are you agree to save password">
            Are you agree to save password
          </label>
          <br />
          <Link className="text-white" to="/signup">
            Don't Have account SignUp here
          </Link>
        </fieldset>
        <ReCAPTCHA
          className="d-flex justify-content-center  m-2"
          sitekey="6LftLt0pAAAAAFlhGGN6dSLeey_a2ovjT-freAzU"
          onChange={(value) => setVerified(value)}
        />
        <button className="btn-five" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignIn;
