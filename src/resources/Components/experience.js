import React from 'react';
import { Link } from 'react-router-dom';
import { joke } from '../old code/mixedMessages';

/*
export class experience {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { joke: null };
  }

  handleClick() {
    const newJoke = joke();
    this.setState({ joke: this.state.random = newJoke });
  }
}
*/

export function experience(type_Of_Work){
  const workItems = Object.values(type_Of_Work);
  return (
    <div>
    {workItems.map(item =>
      <div className="item">
          <div className="itemPic">
            {interaction(item.type, item.path, item.picture, item.alt, item.target)}
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
  )
  
  function interaction(type, path, picture, alt, target){
    switch (type){
      case `web`: return (<a href={path} target={target}><img src={picture} alt={alt} /></a>);             // Link to a website
      case `page`: return (<Link to={path}><img src={picture} alt={alt} /></Link>);                        // Link to a page
      case `button`: return(<button onClick={this.handleClick.bind(this)}> {this.state.random} </button>); // Interactive button instead of image
      default: return(<img src={picture} alt={alt} />);                                                    // No link nor button
    }
  }
}
