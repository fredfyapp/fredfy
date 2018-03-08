import React from 'react';
import { connect } from 'react-redux';

export const Section = (props) => {
  return (
    <div>
      section
      {console.log(props.subject.sections)}
      {

      }
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    subject: state.questions.find((section) => section.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(Section);
