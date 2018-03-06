import React from 'react';
import { connect } from 'react-redux';
import MCQ from './MCQ';

export default class AddQuestion extends React.Component {

  render() {
    return (
      <div>
        <MCQ />
      </div>
    );
  }
}
