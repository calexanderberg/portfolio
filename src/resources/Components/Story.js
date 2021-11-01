import React from 'react';
import '../css/story.css';
import { biography } from '../data/data';

export default class Story extends React.Component {
  render() {
    return (
      <div>
      <body>
        <div className="story">
          <div className="story_Intro">
            <p>What's my story?</p>
            <p></p>
          </div>
          
            <div>
              {sectionsContent()}
            </div>

          <div className="story_Outro">
            <div className="story_Question">
              <p>Next Chapter?</p>
              <p>You think suitable for your organization?</p>
              <p>or can I help you in other ways?</p>
            </div>
            <div className="story_Answer">
              <p>Send me an email!</p>
              <p>All my information is below:</p>
            </div>
          </div>
        </div>
      </body>
    </div>
    )
  };
};

const sectionsContent = () => {
  const bioItems = Object.values(biography);
  let section = [];
  let j = 0;

  for(var i=0; i < Object.keys(biography).length; i++)
    if (i % 2 === 0) section[i] = "story_Section_Right";
    else section[i] = "story_Section_Left";
  
  return(
    <div>
      {bioItems.map(item =>
      <div className={`${"story_Section"} ${section[j] + "_Head"}`}>
        <div className={section[j]}>
          <div className={section[j] + "_Top"}>
            <p className="story_Section_Date">{item.date}</p>
            <p>{item.location}</p>
          </div>
          <div>
            <p>{item.event}</p>
          </div>
        </div>
        <img id={j++} src={item.picture} alt={item.alt}/>
      </div>
      )}
    </div>
  )
};