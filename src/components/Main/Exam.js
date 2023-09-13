import React, { useEffect, useState, lazy, Suspense } from "react";
import Countdown from "../../actions/Countdown";
import NumberBox from "./Numberbox";
import Page from "./Page";
import Button from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import Format from "../Multiplication/Format";
import Division from "../Division/Format";
import axios from "axios";

const Exam = (props) => {
  const s_level = localStorage.getItem("level");
  const name = localStorage.getItem("name")
  const [done, setDone] = useState(true);
  const [p_digit, setdigit] = useState(0);
  const [p_rows, setrows] = useState(0);
  const [target, setTarget] = useState(0);

  const [multiplication, setMultiplication] = useState(false);
  const [division, setDivision] = useState(false);

  const [a, seta] = useState(0);

  const { type } = useParams();
  const navigate = useNavigate();
  const [questionsCompleted, setQuestionsCompleted] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  
  const [data, setData] = useState([]);

  const final = "level" + s_level;
  let total;
  let dataModule;
  const [apiUrl, setapiUrl] = useState("");
  

  const generate = (value) => {
    total = data[final]?.Total || 0;
    console.log("total : " + total == numbers[9])
    console.log("done : " + done)

    if (done) {
      for (const level in data) {
        if (data.hasOwnProperty(level)) {
          const levelInfo = data[level];
          let b = 0;

          for (const itemKey in levelInfo) {
            if (levelInfo.hasOwnProperty(itemKey) && itemKey !== "Total") {
              const item = levelInfo[itemKey];

              let digit = item.Digit;
              let rows = item.Rows;
              const questions = item.Questions;
              let multi = item.multiplication;
              let divi = item.division;

              if (digit == null) {
                digit = item.Multi1;
                if (digit == null) {
                  digit = item.Div1;
                }
              }

              if (rows == null) {
                rows = item.Multi2;
                if (rows == null) {
                  rows = item.Div2;
                }
              }

              if (level === "level" + s_level) {
                if (a == parseInt(value)) {
                  if (a == b) {
                    if (done) {
                      seta(a + 1);
                      setdigit(digit);
                      setrows(rows);
                      setTarget(questions + target);
                      setDone(false);
                      // console.log(digit)
                      // console.log(rows)
                      // console.log(apiUrl)
                      //console.log(questions + target);
                      //break
                      // console.log(multiplication);
                    }
                  }
                }
              }

              if (multi) {
                seta(a + 1);
                setDone(false);
              }

              if (divi) {
                seta(a + 1);
                setDone(false);
              }

              setMultiplication(multi);
              setDivision(divi);
            }

            if (b == value) {
              break;
            }

            b = b + 1;
            //console.log(a)
          }
        }
      }
    }
  };

  const next = async() => {
    if (total == numbers[9]) {

      console.log("It's Over")

      navigate("/home");
      localStorage.setItem(type, true);
      setResetTimer(true);

      await fetch('http://localhost:3000/api/result', {
      method: 'POST',
      body: {name: name, type: type, correct: localStorage.getItem("correct"), total: localStorage.getItem("wrong"), left: target - parseInt(localStorage.getItem("correct")) + parseInt(localStorage.getItem("wrong"))},
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data received:', data);
        // Handle the response data as needed
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors
      });
    }
    setNumbers(numbers.map((number) => number + 10));
  };


  const [numbers, setNumbers] = useState(
    Array.from({ length: 10 }, (_, index) => index + 1)
  );

  useEffect(() => {
    if (type === "Speed Examination 2023") {
      setapiUrl("http://localhost:3000/api/format/speed");
    } else if (type === "Accuracy Exam 2023 (Abacus)") {
      setapiUrl("http://localhost:3000/api/format/aa");
    } else {
      setapiUrl("http://localhost:3000/api/format/am");
    }

    if (done) {
      axios
        .get(apiUrl)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

        generate(a)
    }

    if (total + 10 == numbers[9] && done && total != 0) {

      console.log("It's Over")

      const response = fetch('http://localhost:3000/api/result', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          type: type,
          correct: localStorage.getItem("correct"),
          wrong: localStorage.getItem("wrong"),
          left: target - (parseInt(localStorage.getItem("correct")) + parseInt(localStorage.getItem("wrong")))
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data received:', data);
        // Handle the response data as needed
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors
      });

      navigate("/home");
      localStorage.setItem(type, true);
      setResetTimer(true);
    }
  


    const handleBeforeUnload = (event) => {
      if (!questionsCompleted) {
        event.preventDefault();
        event.returnValue =
          "You have questions to complete. Are you sure you want to leave this page?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // if (target == numbers[9]) {
    //   setDone(true);
    //   generate(a);
    // }

    if (target >= total) {
      setQuestionsCompleted(true);
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  });

  const handleNext = () => {
    next();

    if (target == numbers[9]) {
      setDone(true);
      generate(a);
      console.log("hi");
    }
  };

  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center">
        <Page value={numbers[9]} data={data}/>
        <Countdown questionsCompleted={questionsCompleted} name={name} type={type} target={target}/>
      </div>

      <div className="d-flex flex-wrap">
        {!multiplication && !division && !done && total+10 != numbers[9]
          ? numbers.map((number, index) => (
              <NumberBox
                key={index}
                number={number}
                style={{ flex: "15%" }}
                sno={numbers[9] / 10}
                digit={p_digit}
                rows={p_rows}
              />
            ))
          : ""}

        {multiplication && !done && total + 10 != numbers[9]
          ? numbers.map((number, index) => (
              <Format
                key={index}
                number={number}
                sno={numbers[9] / 10}
                multi1={p_digit}
                multi2={p_rows}
              />
            ))
          : ""}

        {division && !done && total + 10 != numbers[9]
          ? numbers.map((number, index) => (
              <Division
                key={index}
                number={number}
                sno={numbers[9] / 10}
                multi1={p_digit}
                multi2={p_rows}
              />
            ))
          : ""}
      </div>
      <div className="d-flex justify-content-end mt-3">
        <button
          className="btn btn-success"
          style={{ background: "rgb(19, 98, 3" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Exam;
