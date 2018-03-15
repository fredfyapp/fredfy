// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** REDUX ********** //
import { connect } from 'react-redux';

// ********** ACTIONS ********** //
import { setChosenWorld } from '../../actions/navigation';

// ********** COMPONENTS ********** //
import ChallengeCard from './ChallengeCard';
import SectionRanking from './SectionRanking';
import Inventory from './Inventory';
import SectionCard from './SectionCard';

class Section extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     chosenWorld: {}
  //   };
  // }

  componentWillMount() {

    if (sessionStorage.getItem('chosenWorld') === null) {
      this.props.history.push('/');
    }

    let chosenWorld = JSON.parse(sessionStorage.getItem('chosenWorld'));
    console.log(chosenWorld);

    this.props.dispatch(setChosenWorld(chosenWorld));

    // this.setState({
    //   chosenWorld
    // });


    // !user.subjects[subject].character &&
    // this.props.history.push('/choose-a-character');
    //
    // if (!subject && sessionStorage.getItem('chosenWorld') !== null) {
    //   subject = JSON.parse(sessionStorage.getItem('chosenWorld'));
    // } else if (!subject && sessionStorage.getItem('chosenWorld') === null) {
    //   this.props.history.push('/');
    // }

  }

  render() {
    let currentSection = this.props.chosenWorld;
    return (
      <div>
        <h2>{currentSection.subject}</h2>
        <div className='section'>

          <div className='section__map'>
            <div className='section__section-cards'>

              {currentSection.sections.map((section) => {
                return (
                  <SectionCard key={section.sectionName} section={section}/>
                );
              })}

            </div>
            <div className='section__challenge-card'>
              <ChallengeCard />
            </div>
          </div>

          <div className='section__sidepanel'>
            <div className='inventory-panel'>
              <Inventory />
            </div>
            <div className='ranking-panel'>
              <SectionRanking currentSection={currentSection} database={this.props.database} />
            </div>
          </div>

        </div>
      </div>
    );
  }

}

Section.propTypes = {
  // : PropTypes.
};

const mapStateToProps = (state) => ({
  chosenWorld: state.navigation,
  user: state.user
});

export default connect(mapStateToProps)(Section);
