// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// ********** REDUX ********** //
import { connect } from 'react-redux';

// ********** ACTIONS ********** //
import { setChosenWorld } from '../../actions/navigation';

class WorldCard extends React.Component {

handleChosenWorld = () => {
    console.log('clicked');
    // this.props.setChosenWorld(this.props.subject);
    this.props.dispatch(setChosenWorld(this.props.subject));
  }

  render() {
    return (
      <div>
        <Link
          to='/choose-a-world'
          onClick={this.handleChosenWorld}
        >
          <h2>{this.props.subject.subject}</h2>
        </Link>
      </div>
    );
  }

}

WorldCard.propTypes = {
  // : PropTypes.
};

const mapDispatchToProps = (dispatch) => ({
  // setChosenWorld: (chosenWorld) dispatch(chosenWorld(chosenWorld))
  // setChosenWorld: dispatch(chosenWorld())
});

export default connect()(WorldCard);
