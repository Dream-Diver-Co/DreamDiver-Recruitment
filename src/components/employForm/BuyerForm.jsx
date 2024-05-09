import React from "react";
import "./form.css";
import logo from "../../assets/images/logo/logo12.png";
import { Link } from "react-router-dom";
import GoogleReCaptcha from "../googleReCaptcha/GoogleReCaptcha";
const BuyerForm = () => {
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
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 style={{ color: "#005025" }} className="register-heading">
                Post A Job: Find Skilled Employee
              </h3>
              <div className="row register-form">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Recruiter's Name *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name  *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Job Title/Possition *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Job Description *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Join Date *"
                      value=""
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Salary Range *"
                      value=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Recruiter's Email *"
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
                      placeholder="Educational Requirement *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Skills / Qualifications*"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Applications deadline *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Recruitment Process *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Contact Information *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Culture/Value *"
                      value=""
                    />
                  </div>
                </div>
                <GoogleReCaptcha />
                <input
                  type="submit"
                  className="btnRegister m-auto btn-five"
                  value="Submit now"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerForm;
