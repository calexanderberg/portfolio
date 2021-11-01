import React from 'react';
import '../css/work.css';
import { kthProjects } from '../data/data';
import { experience } from './experience';

export default class KTH extends React.Component {
  render() {
    return (
      <div className="itemContent">
        {experience(kthProjects)}
      </div>
    )
  };
};