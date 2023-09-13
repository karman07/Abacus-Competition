import React from "react";
import Login from "./components/Login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Entry from "./components/Main/Entry.js";
import Exam from "./components/Main/Exam.js";
import store from "./store.js";
import { Provider } from "react-redux";
import Format from "./components/Multiplication/Format.js";

function App() {
  const steps = [
    "This will be of 15 minutes",
    "Do as much questions as possible",
    "The exam can't be paused",
    "You have to type your answer in the answer box",
    "Best of luck!",
  ];

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={localStorage.getItem("token") ? <Home /> : <Login />} />
          <Route exact path="/home" element={localStorage.getItem("token") ? <Home /> : <Login />} />
          <Route path="/entry/:type" steps={steps} element={<Entry />} />
          <Route exact path="/exam/:type" element={localStorage.getItem("token") ? <Exam /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
