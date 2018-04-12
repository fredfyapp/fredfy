// ********** REACT ********** //
import React from "react";

// ********** COMPONENTS ********** //
import ProgressBar from "./ProgressBar";
import Question from "./Question";

const QuestionsCard = props => (
  <div className="opacity-toggle-fast">
    <ProgressBar />
    <Question questions={props.questions} {...props} />
  </div>
);

export default QuestionsCard;
