import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import database from '../firebase/firebase';
import SectionCard from './SectionCard';

export class Section extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: []
    };
  }

  componentWillMount() {
    const sections = [];
    for (var key in this.props.subject.sections[0]) {
      sections.push({
        id: key,
        questions: this.props.subject.sections[0].colors
      });
    }
    this.setState({ sections });
  }

  render() {
    const subject = this.props.subject;
    return (
      <div className='page-container'>
        <h1>{subject.id}</h1>
        {
          this.state.sections.map((section) => {
            return (
              <Link key={section.id} to={`/answering/${subject.id}/${section.id}`}>
                <SectionCard { ...section } />
              </Link>
            )
          })
        }
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    subject: state.questions.find((section) => section.id === props.match.params.id),
  };
};

export default connect(mapStateToProps)(Section);
