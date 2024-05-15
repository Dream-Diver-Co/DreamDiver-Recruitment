import React, { useState } from "react";
import logo from "../../assets/images/logo/logo12.png";
import "./form.css";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
const EmployForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    coverLater: "",
    education: "",
    skills: "",
    joinDate: "",
    portfolioLink: "",
    email: "",
    txtEmpPhone: "",
    resume: "",
    possition: "",
    workExperience: "",
    reference: "",
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
        <from onSubmit={handleSubmit} className="col-md-9 register-right">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 style={{ color: "#005025" }} className="register-heading">
                Find A Suitable Job
              </h3>
              <div className="row register-form">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full-Name *"
                      name="fullName"
                      onChange={handleChange}
                      value={formData.fullName}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address  *"
                      onChange={handleChange}
                      name="address"
                      value={formData.address}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Cover later *"
                      onChange={handleChange}
                      name="coverLater"
                      value={formData.coverLater}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Education *"
                      onChange={handleChange}
                      name="education"
                      value={formData.education}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Skills *"
                      onChange={handleChange}
                      name="skills"
                      value={formData.skills}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Join Date *"
                      onChange={handleChange}
                      name="joinDate"
                      value={formData.joinDate}
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Portfolio link *"
                      name="portfolioLink"
                      onChange={handleChange}
                      value={formData.portfolioLink}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email *"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
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
                      onChange={handleChange}
                      value={formData.txtEmpPhone}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Upload/Resume *"
                      onChange={handleChange}
                      name="resume"
                      value={formData.resume}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text-area"
                      className="form-control"
                      placeholder="Possition *"
                      onChange={handleChange}
                      name="possition"
                      value={formData.possition}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Work Experience *"
                      onChange={handleChange}
                      name="workExperience"
                      value={formData.workExperience}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Reference *"
                      onChange={handleChange}
                      name="reference"
                      value={formData.reference}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Expect Salary *"
                      onChange={handleChange}
                      name="expectSalary"
                      value={formData.expectSalary}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Additional Comment *"
                      onChange={handleChange}
                      name="additionalComment"
                      value={formData.additionalComment}
                    />
                  </div>
                </div>
                <ReCAPTCHA
                  className="d-flex justify-content-center  m-2"
                  sitekey="6LftLt0pAAAAAFlhGGN6dSLeey_a2ovjT-freAzU"
                  onChange={(value) => setVerified(value)}
                />
                <input
                  type="submit"
                  className="btnRegister m-auto btn-five"
                  value="Submit now"
                />
              </div>
            </div>
          </div>
        </from>
      </div>
    </div>
  );
};

export default EmployForm;
