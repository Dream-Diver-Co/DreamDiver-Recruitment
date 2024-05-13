import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./googleReChaptcha.css";
const GoogleReCaptcha = ({ className }) => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className="googleCaptcha m-2 p-2">
      <ReCAPTCHA
        className={className}
        sitekey="6LeZAKApAAAAADIDKMBS_b0nhKqsNWLQB04fgP9a"
        onChange={onChange}
      />
    </div>
  );
};

export default GoogleReCaptcha;
