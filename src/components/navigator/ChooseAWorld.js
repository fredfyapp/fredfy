// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// ********** COMPONENTS ********** //
import WorldCard from './WorldCard';

class ChooseAWorld extends React.Component {

  render() {
    return (
      <div id="world" className="block-content">
        <h2>Choose a World</h2>
        <div>
          {this.props.database.learning.map((subject) => {
            return (
              <WorldCard
                key={subject.subject}
                subject={subject}
              />
            );
          })}
        </div>
      </div>
    );
  }

}

ChooseAWorld.propTypes = {
  // : PropTypes.
};


export default ChooseAWorld;
