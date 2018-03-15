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
    // sessionStorage.setItem('chosenWorld', JSON.stringify(this.props.subject));
    this.props.dispatch(setChosenWorld(this.props.subject));
  }

  render() {
    const subject = this.props.subject.subject;
    return (
      <div>
        <Link
          to={`/teaches-you/${subject}`}
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

export default connect()(WorldCard);
