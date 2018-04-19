// ********** REACT ********** //
import React from "react";
import { Link } from "react-router-dom";

// ********** REDUX ********** //
import { connect } from "react-redux";

// ********** DATABASE ********** //
import { subjectsDB } from "../../firebase/database";

// ********** COMPONENTS ********** //
import ChallengeCard from "../navigator/ChallengeCard";
import SubjectRanking from "./SubjectRanking";
import Inventory from "./Inventory";
import SectionCard from "./SectionCard";

// ********** SELECTORS ********** //
import objectToArray from "../../selectors/objectToArray";

class ChooseASection extends React.Component {
  constructor(props) {
    super(props);

    const subjectName = props.match.params.subject;
    this.subjectObject = subjectsDB[subjectName];
  }

  componentDidMount() {
    // CHECK IF THERE IS A CHARACTER FOR THE SUBJECT
    const user = this.props.user;

    const subjectName = this.props.match.params.subject;

    // IF USER DOESN'T HAVE CURRENT SUBJECT
    if (user.subjects) {
      if (!user.subjects[subjectName]) {
        this.props.history.push(`/choose-a-character-for/${subjectName}`);
      }
    }

    // !user.subjects[subjectName].character &&
    //   this.props.history.push(`/choose-a-character-for/${subjectName}`);
  }

  render() {
    const subjectName = this.subjectObject.subjectName;
    const sectionsObject = this.subjectObject.sections;
    const sections = objectToArray(sectionsObject);
    console.log("subjectname", subjectName);
    console.log("props.user", this.props.user);
    return (
      <div className="opacity-toggle-fast">
        <h2>{subjectName}</h2>
        <div className="section">
          <div className="section__map">
            <div className="section__section-cards">
              {sections.map(section => {
                const sectionName = section.sectionName;
                return (
                  <Link
                    to={`/teaches-you/${subjectName}/${sectionName}`}
                    key={subjectName + sectionName}>
                    {/* <SectionCard
                      subjectName={subjectName}
                      sectionName={sectionName}
                    /> */}
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
                subjectName={subjectName}
                user={this.props.user}
              /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: state.user
});

export default connect(mapStateToProps)(ChooseASection);
