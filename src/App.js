import "./App.css";
import Home from "./Home";
import validator from "validator";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Success from "./Success";
// import { Routes, Route } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showComponent, setShowComponent] = useState(false);

  const notify = () => toast("Please enter a valid email address");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // const checkBtn = (e) => {
  //   e.preventDefault()
  //   const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  //   if(emailPattern.test(email)) {
  //     setButton(true);
  //   } else {
  //     setButton(false);
  //   }
  // };
  const checkBtn = (e) => {
    e.preventDefault();

    if (validator.isEmail(email)) {
      setShowComponent(!showComponent);
    } else {
      notify();
    }
  };

  return (
    <div>
      {showComponent ? (
        <Success 
          email={email}
        />
      ) : (
        <Home
          email={email}
          setEmail={setEmail}
          handleChange={handleChange}
          checkBtn={checkBtn}
          setEmailError={setEmailError}
          emailError={emailError}
          Toaster={Toaster}
        />
      )}
    </div>
  );
}

export default App;
