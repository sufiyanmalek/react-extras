import React from "react";
import { Link } from "react-router-dom";

const ExamStartPage = () => {
  return (
    <div className=" examStartPage border border-dark border-5 d-flex flex-column justify-content-center">
      <h1 className="text-center ">
        Click The Button Below to Start The Exam{" "}
      </h1>
      <div className="text-center">
        <Link to={"/exam"} className="btn btn-block btn-success">
          Start Exam
        </Link>
      </div>
    </div>
  );
};

export default ExamStartPage;
