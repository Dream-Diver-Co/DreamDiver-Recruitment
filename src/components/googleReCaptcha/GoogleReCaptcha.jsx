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
        sitekey="6LftLt0pAAAAAFlhGGN6dSLeey_a2ovjT-freAzU"
        onChange={onChange}
      />
    </div>
  );
};

export default GoogleReCaptcha;
