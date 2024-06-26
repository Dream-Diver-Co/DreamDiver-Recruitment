import React from "react";
import "./signup.css";
import GoogleReCaptcha from "../googleReCaptcha/GoogleReCaptcha";
const SignUp = () => {
  return (
    <div>
      <form action="index.html" method="post">
        <h1>Sign Up</h1>

        <fieldset>
          <legend>
            <span class="number">1</span> Your basic info
          </legend>

          <label for="name">User Name:</label>
          <input type="text" id="name" name="user_name" />

          <label for="mail">Email:</label>
          <input type="email" id="mail" name="user_email" />

          <label for="password">Password:</label>
          <input type="password" id="password" name="user_password" />
          <label for="password">Confirm Password:</label>
          <input type="password" id="password" name="user_password" />
        </fieldset>

        <fieldset>
          <legend>
            <span class="number">2</span> Your profile
          </legend>

          <label for="bio">Biography:</label>
          <textarea id="bio" name="user_bio"></textarea>

          <label for="job">Job role:</label>
          <select id="job" name="user_job">
            <optgroup label="Web">
              <option value="frontend_developer">Front-End Developer</option>
              <option value="php_developer">PHP Developer</option>
              <option value="python_developer">Python Developer</option>
              <option value="rails_developer">Rails Developer</option>
              <option value="web_designer">Web Designer</option>
              <option value="wordpress_developer">WordPress Developer</option>
            </optgroup>
            <optgroup label="Mobile">
              <option value="android_developer">Android Developer</option>
              <option value="ios_developer">iOS Developer</option>
              <option value="mobile_designer">Mobile Designer</option>
            </optgroup>
            <optgroup label="Business">
              <option value="business_owner">Business Owner</option>
              <option value="freelancer">Freelancer</option>
            </optgroup>
          </select>

          <label>Interests:</label>
          <input
            type="checkbox"
            id="development"
            value="interest_development"
            name="user_interest"
          />
          <label class="light" for="development">
            Development
          </label>
          <br />
          <input
            type="checkbox"
            id="design"
            value="interest_design"
            name="user_interest"
          />
          <label class="light" for="design">
            Design
          </label>
          <br />
          <input
            type="checkbox"
            id="business"
            value="interest_business"
            name="user_interest"
          />
          <label class="light" for="business">
            Business
          </label>
        </fieldset>
        <GoogleReCaptcha className="p-2 m-2 d-flex justify-content-center" />
        <button className="btn-five mt-2" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
