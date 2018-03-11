import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import WorldCard from './WorldCard';

export const ChooseAWorld = (props) => {
  return (
    <div className='page-container'>
      <h1>Choose a world</h1>
      <div>
        {
          props.subjects.map((subject) => {
            return (
              <Link key={subject.id} to={`/${subject.id}/sections`}>
                <WorldCard {...subject} />
              </Link>
            )
          })
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    subjects: state.questions
  };
};

export default connect(mapStateToProps)(ChooseAWorld);
