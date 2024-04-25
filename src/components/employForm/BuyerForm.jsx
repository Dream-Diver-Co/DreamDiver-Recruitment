import React from "react";
import "./form.css";
const BuyerForm = () => {
  return (
    <div className="container px-1 py-5 mx-auto">
      <div className="row justify-content-center">
        <div className="col-xl-4 col-lg-8 col-md-9 col-11 text-center">
          <h3>Find Your Dream job</h3>
          <p className="blue-text">
            find a suitable job
            <br /> bast on your skills and experience
          </p>
          <div className="card p-2">
            <h5 className="text-center mb-4">Provide your information</h5>
            <form className="form-card">
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    Full name<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Enter your first name"
                  />
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-2 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    Email<span className="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder=""
                    onblur="validate(3)"
                  />{" "}
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    Address<span className="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Enter your last name"
                    onblur="validate(2)"
                  />{" "}
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    Phone number<span className="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="mob"
                    name="mob"
                    placeholder=""
                    onblur="validate(4)"
                  />{" "}
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    Job title<span className="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="job"
                    name="job"
                    placeholder=""
                    onblur="validate(5)"
                  />{" "}
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-12 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    Job positions
                    <span className="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="ans"
                    name="ans"
                    placeholder=""
                    onblur="validate(6)"
                  />{" "}
                </div>
                <div className="form-group col-12 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    salary expectation
                    <span className="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="ans"
                    name="ans"
                    placeholder=""
                    onblur="validate(6)"
                  />{" "}
                </div>
                <div className="form-group col-12 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    Skills
                    <span className="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="ans"
                    name="ans"
                    placeholder=""
                    onblur="validate(6)"
                  />{" "}
                </div>
                <div className="form-group col-12 flex-column d-flex">
                  <label class="form-label" for="customFile">
                    upload resume
                  </label>
                  <input type="file" class="form-control" id="customFile" />
                </div>
                <div className="form-group col-12 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    Cover latter
                    <span className="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text-area"
                    id="ans"
                    name="ans"
                    placeholder=""
                    onblur="validate(6)"
                  />{" "}
                </div>
              </div>
              <div className="row mt-2 justify-content-end">
                <div className="form-group col-sm-6">
                  {" "}
                  <button type="submit" className="btn-five">
                    Submit now
                  </button>{" "}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerForm;
