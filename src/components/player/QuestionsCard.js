// ********** REACT ********** //
import React from "react";

// ********** COMPONENTS ********** //
import Modal from "../Modal";
import ProgressBar from "./ProgressBar";
import Question from "./Question";

const QuestionsCard = props => (
  <div>
    <ProgressBar />
    <Question
      questions={props.questions}
      subjectName={props.subjectName}
      {...props}
    />
  </div>
);

export default QuestionsCard;
