import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import WorldCard from './WorldCard';

export const ChooseAWorld = (props) => {
  return (
    <div className='page-container'>
      {console.log(props.worlds)}
      <h1>Choose a world</h1>
      <div>
        {
          props.worlds.map((world) => {
            return (
              <Link key={world.id} to={`/section/${world.id}`}>
                <WorldCard {...world} />
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
    worlds: state.questions
  };
};

export default connect(mapStateToProps)(ChooseAWorld);
