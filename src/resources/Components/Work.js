import React from 'react';
import '../css/work.css';
import { work_Types } from '../data/data';
import { experience } from './experience';

export default class Work extends React.Component {
  render() {
    return (
      <div className="itemContent">
        {experience(work_Types)}
      </div>
    )
  };
};