import React from "react";
import iconSuccess from "./images/icon-success.svg";

const Success = ({ email }) => {
  return (
    <div className="container-two">
      <img src={iconSuccess} alt="success" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <span>{email}</span>. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button className="dismiss-btn"><a href="/">Dismiss message</a></button>
    </div>
  );
};

export default Success;
