// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// const WorldCard = (props) => {
//   return (
//       <div>
//         <h2>{props.subject.subject}</h2>
//       </div>
//   );
// }

class WorldCard extends React.Component {

handleChosenWorld = () => {
    // e.preventDefault();
    console.log('clicked');
    // this.props.handler;
    this.props.handleChosenWorld(this.props.subject);
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

export default WorldCard;
