import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./form.css";
import logo from "../../assets/images/logo/logo12.png";
import { Link } from "react-router-dom";
const BuyerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    possition: "",
    description: "",
    location: "",
    joinDate: "",
    salaryRange: "",
    email: "",
    educationalRequirement: "",
    skills: "",
    applicationsDeadline: "",
    recruitmentProcess: "",
    contactInformation: "",
    companyCulture: "",
  });
  const [Verified, setVerified] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Verified) {
      alert("Please verify the reCAPTCHA.");
      return;
    }
    // Your submit logic here, like sending formData to the server
    console.log("Form submitted:", formData);
  };
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
              <from onSubmit={handleSubmit} className="row register-form">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Recruiter's Name *"
                      onChange={handleChange}
                      value={formData.name}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="companyName"
                      className="form-control"
                      placeholder="Company Name  *"
                      onChange={handleChange}
                      value={formData.companyName}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="possition"
                      className="form-control"
                      placeholder="Job Title/Possition *"
                      onChange={handleChange}
                      value={formData.possition}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      placeholder="Job Description *"
                      onChange={handleChange}
                      value={formData.description}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="location"
                      className="form-control"
                      placeholder="Location *"
                      onChange={handleChange}
                      value={formData.location}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="joinDate"
                      className="form-control"
                      placeholder="Join Date *"
                      onChange={handleChange}
                      value={formData.joinDate}
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="text"
                      name="salaryRange"
                      className="form-control"
                      placeholder="Salary Range *"
                      onChange={handleChange}
                      value={formData.salaryRange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Recruiter's Email *"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      minlength="10"
                      maxlength="10"
                      name="educationalRequirement"
                      className="form-control"
                      placeholder="Educational Requirement *"
                      onChange={handleChange}
                      value={formData.educationalRequirement}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="skills"
                      className="form-control"
                      placeholder="Skills / Qualifications*"
                      onChange={handleChange}
                      value={formData.skills}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="applicationsDeadline"
                      className="form-control"
                      placeholder="Applications deadline *"
                      onChange={handleChange}
                      value={formData.applicationsDeadline}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="recruitmentProcess"
                      placeholder="Recruitment Process *"
                      onChange={handleChange}
                      value={formData.recruitmentProcess}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="ContactInformation"
                      placeholder="Contact Information *"
                      onChange={handleChange}
                      value={formData.contactInformation}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="companyCulture"
                      className="form-control"
                      placeholder="Company Culture/Value *"
                      onChange={handleChange}
                      value={formData.companyCulture}
                    />
                  </div>
                </div>
                <ReCAPTCHA
                  className="d-flex justify-content-center"
                  sitekey="6LfDstkpAAAAAOJKaEQw9sgvSySi24oqIx7ig-0T"
                  onChange={(value) => setVerified(value)}
                />
                <input
                  type="submit"
                  className="btnRegister m-auto btn-five"
                  value="Submit now"
                />
              </from>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerForm;
