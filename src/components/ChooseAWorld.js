import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import WorldCard from './WorldCard';

export const ChooseAWorld = (props) => {
  return (
    <div className='page-container'>
      {/* {console.log('choose a ChooseAWorld', props.subjects)} */}
      <h1>Choose a world</h1>
      <div>
        {
          props.subjects.map((subject) => {
            return (
              <Link key={subject.id} to={`/section/${subject.id}`}>
                <WorldCard {...subject} />
              </Link>
            )
          })
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    subjects: state.questions
  };
};

export default connect(mapStateToProps)(ChooseAWorld);
