// ********** REACT ********** //
import React from "react";

// ********** COMPONENTS ********** //
import Modal from "../Modal";
import ProgressBar from "./ProgressBar";
import Question from "./Question";

const QuestionsCard = props => (
  <div>
    <ProgressBar />
    <Question questions={props.questions} {...props} />
  </div>
);

export default QuestionsCard;
