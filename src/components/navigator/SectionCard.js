// ********** REACT ********** //
import React from "react";

// ********** REDUX ********** //
import { connect } from "react-redux";

const SectionCard = props => {
  const subjectName = props.subjectName;
  const sectionName = props.sectionName;

  return (
    <div>
      <h2>
        {sectionName}
        {props.user.subjects[subjectName].finishedSections[sectionName] &&
          " - done!"}
      </h2>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(SectionCard);
