import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import database from '../firebase/firebase';
import SectionCard from './SectionCard';

export class Section extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [],
      subject: this.props.match.params.subject
    };
  }

  componentWillMount() {
    console.log('parsing');
    let sections = [];

    // for (var key in this.props.subjectName.sections[0]) {
    //   sections.push({
    //     id: key
    //   });
    // }
    this.setState({ sections });
    console.log('component updated');
    this.props.subjectName ? console.log('yyyyesss') : console.log('nooo');
  }

  componentWillReceiveProps() {
    console.log('will receive props');
    console.log(this.props.subjectName);
    let sections = [];

    this.props.subjectName ? console.log('yes') : console.log('no');

    // for (var key in this.props.subjectName.sections[0]) {
    //   sections.push({
    //     id: key
    //   });
    // }
    this.setState({ sections });
    console.log('component updated');
  }

  parseToArray() {
    // console.log('parsing');
    // let sections = [];
    //
    // for (var key in this.props.subjectName.sections[0]) {
    //   sections.push({
    //     id: key
    //   });
    // }
    // this.setState({ sections });

  }


  render() {
    // this.props.subjectName ? this.parseToArray() : console.log('not parsed');
    // console.log('state', this.state.sections);

    const subject = this.state.subject;
    return (
      <div className='page-container'>
        <h1>{subject}</h1>
        {/* {
          this.state.sections.map((section) => {
            return (
              <Link key={section.id} to={`/answering/${subject}/${section.id}`}>
                <SectionCard { ...section } />
              </Link>
            )
          })
        } */}
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    subjectName: state.questions.find((section) => section.id === props.match.params.subject),
  };
};

export default connect(mapStateToProps)(Section);
