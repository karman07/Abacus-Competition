import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { decrementCountdown } from "./actions";
import "./Countdown.css";

const Countdown = ({
  countdownInSeconds,
  decrementCountdown,
  resetTimer,
  name,
  target,
  type,
}) => {
  const navigate = useNavigate();

  const clear = () => {
    clearInterval(intervalId);
    decrementCountdown();
  };

  const save = async () => {
    clearInterval(intervalId);
    decrementCountdown();

    try {
      const response = await fetch("http://62.72.56.187:3001/api/result", {
        method: "POST",
        body: {
          name: name,
          type: type,
          correct: localStorage.getItem("correct"),
          total: localStorage.getItem("wrong"),
          left:
            target -
            parseInt(localStorage.getItem("correct")) +
            parseInt(localStorage.getItem("wrong")),
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }else{
        navigate("/home");
        localStorage.setItem(type, true);
        window.location.reload(true); 
      }

      const data = await response.json();
      console.log("Data received:", data);
      // Handle the response data as needed
    } catch (error) {
      console.error("Error:", error);
      // Handle errors
    }
  };

  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (countdownInSeconds > 0 && !intervalId) {
      const id = setInterval(() => {
        decrementCountdown();
      }, 1000);
      setIntervalId(id);
    } else if (countdownInSeconds === 0 && intervalId) {
      clearInterval(intervalId);
      if (minutes === 0 && seconds === 0) {
        clear();
        save();
      }
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [countdownInSeconds, decrementCountdown, intervalId]);

  useEffect(() => {
    if (resetTimer) {
      clear();
    }
  }, [resetTimer, intervalId, decrementCountdown]);

  const minutes = Math.floor(countdownInSeconds / 60);
  const seconds = countdownInSeconds % 60;

  return (
    <div className="countdown-container">
      {countdownInSeconds > 0 ? (
        <div className="countdown-text">
          Time:{" "}
          <span className="time-text">
            {minutes} minute{minutes !== 1 ? "s" : ""} {seconds} second
            {seconds !== 1 ? "s" : ""}
          </span>
        </div>
      ) : (
        <div className="countdown-text">
          Time: <span className="time-text">0 minutes 0 seconds</span>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  countdownInSeconds: state.countdownInSeconds,
});

const mapDispatchToProps = {
  decrementCountdown,
};

export default connect(mapStateToProps, mapDispatchToProps)(Countdown);
