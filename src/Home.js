import React from "react";
import iconList from "./images/icon-list.svg";
import illustrate from "./images/illustration-sign-up-desktop.svg";

const Home = ({ email, Toaster, setEmail, emailError, handleChange, setEmailError, checkBtn }) => {
    
 
    return (
    <div>
      <div className="container">
        <div className="first-section">
          <h1>Stay Updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="options">
            <img src={iconList} alt="icon" />
            <span>Product discovery and building what matters</span>
          </div>
          <div className="options">
            <img src={iconList} alt="icon" />
            <span>Measuring to ensure updates are a success</span>
          </div>
          <div className="options">
            <img src={iconList} alt="icon" />
            <span> And much more!</span>
          </div>

          <form>
            <p>Email address</p>
            <input
              placeholder="email@company.com"
              type="text"
              onChange={handleChange}
              value={email}
            />
            <button onClick={checkBtn}>Subscribe to monthly newsletter</button>
            {emailError}
          </form>
        </div>
        <div className="second-section">
          <img src={illustrate} alt="side" />
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Home;
