import React from "react";
import { Link, useLocation } from "react-router-dom";
import ContactUsPage from "./Contact";
import Card from "./Card";
import Cardhome from "./Cardhome";
import NoData from "./NoData";

const Navbar = () => {
  return (
    <div className="container my-5">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active text-success"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link text-success"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Previous
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link text-success"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Contact
          </button>
        </li>
      </ul>
      <div className="tab-content bg-light p-3" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
            {localStorage.getItem("Speed Examination 2023")?"" :<Cardhome heading="Exam 2023" title="Speed Examination 2023" description="This is speed examination for your level it will contain 250 questions and a timer of 15 minutes you have to attend the maximum number of quetions as soon as possible"/>}
            {localStorage.getItem("Accuracy Exam 2023 (Abacus)")?"":<Cardhome heading="Exam 2023" title="Accuracy Exam 2023 (Abacus)" description="This is a accuracy exam in which there are 50 questions that you have to attend in 15 minutes with accuracy"/>}
            {localStorage.getItem("Accuracy Exam 2023 (Mentally)")?"":<Cardhome heading="Exam 2023" title="Accuracy Exam 2023 (Mentally)" description="This is a accuracy exam in which there are 50 questions that you have to attend in 15 minutes with accuracy"/>}
            {localStorage.getItem("Speed Examination 2023") && localStorage.getItem("Accuracy Exam 2023 (Abacus)") && localStorage.getItem("Accuracy Exam 2023 (Mentally)")?<NoData/>:""}
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
           {localStorage.getItem("Speed Examination 2023")?<Card heading="Exam 2023" title="Speed Examination 2023" description="This is speed examination for your level it will contain 250 questions and a timer of 15 minutes you have to attend the maximum number of quetions as soon as possible"/>:""}
           {localStorage.getItem("Accuracy Exam 2023 (Abacus)")?<Card heading="Exam 2023" title="Accuracy Exam 2023 (Abacus)" description="This is a accuracy exam in which there are 50 questions that you have to attend in 15 minutes with accuracy"/>:""}
           {localStorage.getItem("Accuracy Exam 2023 (Mentally)")?<Card heading="Exam 2023" title="Accuracy Exam 2023 (Mentally)" description="This is a accuracy exam in which there are 50 questions that you have to attend in 15 minutes with accuracy"/>:""}
           {!localStorage.getItem("Speed Examination 2023") && !localStorage.getItem("Accuracy Exam 2023 (Abacus)") && !localStorage.getItem("Accuracy Exam 2023 (Mentally)")?<NoData/>:""}
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <ContactUsPage/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
