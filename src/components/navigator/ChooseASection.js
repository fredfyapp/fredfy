// ********** REACT ********** //
import React from "react";
import { Link } from "react-router-dom";

// ********** REDUX ********** //
import { connect } from "react-redux";

// ********** COMPONENTS ********** //
import ChallengeCard from "../challenge/ChallengeCard";
import SubjectRanking from "./SubjectRanking";
import Inventory from "./Inventory";
import SectionCard from "./SectionCard";

class ChooseASection extends React.Component {
  componentDidMount() {
    const user = this.props.user;

    const subjectName = this.props.subjectObject.subjectName;

    !user.subjects[subjectName].character &&
      this.props.history.push(`/choose-a-character-for/${subjectName}`);
    // console.log(this.props.subjectObject);
    // console.log(this.props.user);
    console.log(this.props);
  }

  render() {
    const subjectName = this.props.subjectObject.subjectName;
    const sections = this.props.subjectObject.sections;
    let sectionsArray = [];
    for (let [key, value] of Object.entries(sections)) {
      sectionsArray.push(value);
    }
    // console.log(sectionsArray);
    return (
      <div>
        <h2>{subjectName}</h2>
        <div className="section">
          <div className="section__map">
            <div className="section__section-cards">
              {sectionsArray.map(section => {
                const sectionName = section.sectionName;
                return (
                  <Link
                    to={`/teaches-you/${subjectName}/${sectionName}`}
                    key={subjectName + sectionName}
                  >
                    <SectionCard
                      subjectName={subjectName}
                      sectionName={sectionName}
                    />
                  </Link>
                );
              })}
            </div>
            <div className="section__challenge-card">
              <ChallengeCard />
            </div>
          </div>

          <div className="section__sidepanel">
            <div className="inventory-panel">
              <Inventory />
            </div>
            <div className="ranking-panel">
              {/* <SubjectRanking
                database={this.props.database}
                subjectObject={subjectObject}
                user={this.props.user}
              /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const subjectName = props.match.params.subject;
  return {
    subjectObject: props.database[subjectName],
    user: state.user
  };
};

export default connect(mapStateToProps)(ChooseASection);
