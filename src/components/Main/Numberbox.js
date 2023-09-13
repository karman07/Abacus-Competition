import React, { useState, useEffect, useRef } from "react";

const NumberBox = (props) => {
  const [tip, setTip]= useState(true);
  const [sno, setsno] = useState(props.sno);
  const [numbers, setNumbers] = useState([]);
  const[answer, setanswer] = useState();
  const [displayText, setDisplayText] = useState(props.text); // Initialize with the prop value
  const digit = props.digit
  
  useEffect(() => {
      if (sno != props.sno) {
        generateRandomNumbers();
        setDisplayText("")
      }
     else {
      if (tip) {
        generateRandomNumbers();
      }
    }
  });

  const generateRandomNumbers = () => {
    const newNumbers = [];

    let random = 0
    let answer = 0
    let randomNumber = 0;

    const min = Math.pow(10, digit - 1); // Minimum value (inclusive)
    const max = Math.pow(10, digit) - 1

    let firstNumber = Math.floor(Math.random() * (max - min + 1)) + 1;
    newNumbers.push(firstNumber);

    for (let i = 1; i < props.rows; i++) {
      let randomPositiveNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      let sign = Math.random() < 0.5 ? -1 : 1;
      randomNumber =  randomPositiveNumber * sign

      // Adjust the generated number if needed to ensure positive sum with existing numbers
      while (
        newNumbers.some((num) => num + randomNumber < 0) ||
        randomNumber === 0
      ) {
        let randomPositiveNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        let sign = Math.random() < 0.5 ? -1 : 1;
        randomNumber =  randomPositiveNumber * sign
      }

      answer += randomNumber
      newNumbers.push(randomNumber);
    }
    

    setanswer(answer)
    setNumbers(newNumbers);
    setsno(props.sno);

    setTip(false)

  };

  
  const abort = (event) => {
    if (event.target.value != "") {
      if (parseInt(event.target.value) == answer) {
        localStorage.setItem(
          "correct",
          parseInt(localStorage.getItem("correct")) + 1
        );
        console.log(localStorage.getItem("correct"));
      } else {
        localStorage.setItem(
          "wrong",
          parseInt(localStorage.getItem("wrong")) + 1
        );
        console.log(localStorage.getItem("wrong"));
      }
    }
  };

  const handleDisplayTextChange = (event) => {
    setDisplayText(event.target.value);
  };


  return (
    <div className="mt-3">

      <div className="row justify-content-center">
        <div
          className="col-6 rounded"
          style={{ border: "2px solid rgb(19, 98, 3)" }} 
        >
          <div className="d-flex flex-column align-items-center p-3">
            <div
              className="bg-white d-flex align-items-center justify-content-center mb-2"
              style={{ color: "rgb(19, 98, 3)" }}
            > 
              <b>Sno. {props.number}</b>
            </div>
            {numbers.map((number, index) => (
              <div
                key={index}
                className="bg-white d-flex align-items-center justify-content-center mb-2"
                style={{
                  width: "40px",
                  height: "40px",
                  color: "rgb(19, 98, 3)",
                }}
              >
                <b>{number}</b>
              </div>
            ))}
            <input
              type="number"
              placeholder=""
              value={displayText}
              onChange={handleDisplayTextChange}
              onBlur={abort}
              className="form-control"
              style={{ border: "2px solid rgb(19, 98, 3)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberBox;
