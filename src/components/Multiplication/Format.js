import React, { useState, useEffect } from "react";

const Format = (props) => {
  const [tip, setTip] = useState(true);
  const [text, settext] = useState("");
  const [sno, setsno] = useState(props.sno);
  const [multi1, setmulti1] = useState(props.multi1);
  const [multi2, setmulti2] = useState(props.multi2);
  const [number1, setnumber1] = useState("");
  const [number2, setnumber2] = useState("");
  const [answer, setanswer] = useState("");

  function generateRandomNumbersAndProduct(mul1, mul2) {
    // if (digit <= 0) {
    //   throw new Error("Digit must be a positive integer");
    // }

    let min = Math.pow(10, mul1 - 1);
    let max = Math.pow(10, mul1) - 1;

    const number1 = Math.floor(Math.random() * (max - min + 1)) + min;

    min = Math.pow(10, mul2 - 1);
    max = Math.pow(10, mul2) - 1;

    let number2 = Math.floor(Math.random() * (max - min + 1)) + min;

    if (number2 == 1) {
      number2 = 2;
    }

    //console.log(number1 % number2 === 0)

    const product = number1 * number2;

    setanswer(product);
    setnumber1(number1);
    setnumber2(number2);
    setsno(props.sno);
    setTip(false);
  }

  useEffect(() => {
    if (sno != props.sno) {
      setmulti1(props.multi1);
      setmulti2(props.multi2);
      generateRandomNumbersAndProduct(multi1, multi2);
      settext("");
    } else {
      if (tip) {
        setmulti1(props.multi1);
        setmulti2(props.multi2);
        generateRandomNumbersAndProduct(multi1, multi2);
      }
    }
  });

  const handleDisplayTextChange = (event) => {
    settext(event.target.value);
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

            <div
              className="bg-white d-flex align-items-center justify-content-center mb-2"
              style={{
                width: "40px",
                height: "40px",
                color: "rgb(19, 98, 3)",
              }}
            >
              <b>{number1}</b>
            </div>

            <div
              className="bg-white d-flex align-items-center justify-content-center mb-2"
              style={{ color: "rgb(19, 98, 3)" }}
            >
              <b>x {number2}</b>
            </div>

            <input
              type="number"
              placeholder=""
              value={text}
              onChange={handleDisplayTextChange}
              onBlur={abort}
              className="form-control mt-3"
              style={{ border: "2px solid rgb(19, 98, 3)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Format;
