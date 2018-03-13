// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// ********** REDUX ********** //
import { connect } from 'react-redux';

// ********** COMPONENTS ********** //
import WorldCard from './WorldCard';

class ChooseAWorld extends React.Component {
  handleChosenWorld(chosenWorld) {
    console.log('clicked from outside');
    console.log(chosenWorld);
  }

  render() {
    return (
      <div>
        <h2>ChooseAWorld</h2>
        <div>
          {this.props.database.learning.map((subject) => {
            // return (
            //   <Link
            //     to='/choose-a-world'
            //     key={subject.subject}
            //     onClick={this.handleChosenWorld}
            //   >
            //     <WorldCard subject={subject} />
            //   </Link>
            // );
            return (
              <WorldCard
                subject={subject}
                key={subject.subject}
                handleChosenWorld={this.handleChosenWorld}
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

const mapDispatchToProps = (dispatch) => ({
  chosenWorld: (chosenWorld) => dispatch(chosenWorld(chosenWorld))
});

export default connect(undefined, mapDispatchToProps)(ChooseAWorld);
