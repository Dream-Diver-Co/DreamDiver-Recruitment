import React from "react";
import logo from "../../assets/images/logo/logo.webp";
import "./form.css";
import { Link } from "react-router-dom";
const EmployForm = () => {
  return (
    <div className="container register">
      <div className="row">
        <div className="col-md-3 register-left">
          <img src={logo} alt="" />
          <h3>Welcome</h3>
          <p>You are 30 seconds away from earning your own money!</p>
          <Link className="btn-five" to="/login" value="Login">
            Login
          </Link>
          <br />
        </div>
        <div className="col-md-9 register-right">
          <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Employee
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Buyer
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 style={{ color: "#005025" }} className="register-heading">
                Apply as a Employee
              </h3>
              <div className="row register-form">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full-Name *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address  *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password *"
                      value=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      minlength="10"
                      maxlength="10"
                      name="txtEmpPhone"
                      className="form-control"
                      placeholder="Your Phone *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <select className="form-control">
                      <option className="hidden" selected disabled>
                        Please select your Sequrity Question
                      </option>
                      <option>What is your Birthdate?</option>
                      <option>What is Your old Phone Number</option>
                      <option>What is your Pet Name?</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Answer *"
                      value=""
                    />
                  </div>
                  <input
                    type="submit"
                    className="btnRegister btn-five"
                    value="Submit now"
                  />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade show"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <h3 className="register-heading">Apply as a Hirer</h3>
              <div className="row register-form">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      maxlength="10"
                      minlength="10"
                      className="form-control"
                      placeholder="Phone *"
                      value=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <select className="form-control">
                      <option className="hidden" selected disabled>
                        Please select your Sequrity Question
                      </option>
                      <option>What is your Birthdate?</option>
                      <option>What is Your old Phone Number</option>
                      <option>What is your Pet Name?</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="`Answer *"
                      value=""
                    />
                  </div>
                  <input
                    className="btnRegister btn-five"
                    type="submit"
                    value="Submit Now"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployForm;
