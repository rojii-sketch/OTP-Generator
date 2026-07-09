import { useState, useEffect, useRef }from 'react';


export const OTPGenerator = () => {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false)

  const handleGenerate = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(newOtp);
    setTimeLeft(5); 
    setIsActive(true);
  };
  useEffect(()=> {
    let intervalId;

    if(isActive && timeLeft > 0){
      intervalId = setInterval(()=> {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);  
    }else if (timeLeft === 0){
      setIsActive(false);
    }
    return ()=> clearInterval(intervalId);
  }, [isActive, timeLeft]);
  return (
    <div className="container">
    <h1 id="otp-title">OTP Generator</h1>
    <h2 id="otp-display">{otp && timeLeft > 0 ? otp :"Click 'Generate OTP' to get a code"}</h2>
    <p id="otp-timer" aria-live="polite">{isActive && timeLeft > 0 ? `Expires in: ${timeLeft} seconds`: otp && timeLeft === 0 ? "OTP expired. Click the button to generate a new OTP.": ""}</p>
    <div className="btn">
    <button onClick={handleGenerate} id="generate-otp-button" disabled={isActive}>Generate OTP</button>
    </div>
    </div>
  )
};