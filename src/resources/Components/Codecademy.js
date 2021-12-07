import React from 'react';
import '../css/codecademy.css';
import { personalProjects } from '../data/data';
import { joke } from '../old code/mixedMessages';

export default class Codecademy extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { joke: null };
  }

  handleClick() {
    const newJoke = joke();
    this.setState({ joke: this.state.random = newJoke });
  }

  render() {
    const codecademyProject = Object.values(personalProjects);
    
    return (
      <div className="itemContent">
        {codecademyProject.map(item =>
          <div className="codecademy">
            <div className="itemPic">
              
            {item.website ? 
              <a href={item.path} target={item.target}><img src={item.picture} alt={item.alt} /></a> 
              :
              <button onClick={this.handleClick.bind(this)}>
                {this.state.random}
                </button>
            }
            </div>
            <div className="itemInfo">
              <div className="itemInfoLeft">
                <p>{item.title}</p>
                <p>{item.intro}</p>
              </div>
              <div className="itemInfoRight">
                <p>{item.source}</p>
                <p>{item.date}</p>
              </div>
            </div>
            <div className="description">
              <p>{item.description}</p>
            </div>
          </div>
        )}
      </div>
    );
  };
};
