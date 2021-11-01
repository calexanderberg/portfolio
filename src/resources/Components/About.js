import React from 'react';
import '../css/about.css';
import { Link } from 'react-router-dom';
import { experience, education } from '../data/data';
import ReactPlayer from "react-player";

export default class About extends React.Component { 
  render(){
    return(
      <div className="about">
        <div className="aboutIntro">
          <h1 className="aboutTitle">Who?</h1>
          <p className="aboutText">
            I am a Swedish (grown up in the USA) computer science student at KTH, The Royal Institute of Technology.
          </p>
          <p className="aboutText">
            My ambitions are within technology and engineering, which were heavily focused during my time at the International Baccalaureate (IB).
          </p>
          <p className="aboutText">
            With previous experience in design and programming, I have designed and built multiple web pages while working at RE-DO. I have also built this online portfolio using React.
          </p>
        </div>
        <div className="aboutVideo">
         <ReactPlayer
              className="reactPlayer"
              url="https://youtu.be/40VrdOuLXgw"
              width='100%'
              height='100%'
          />
        </div>
        <div className="aboutQuestions">
          <div className="aboutQuestionSection">
            <h3 className="aboutQuestion">
              Could you rank the technologies you know, from best to worst?
            </h3>
            <p className="aboutAnswer">
              Javascript, React, HTML, CSS(SCSS), Java,  C, Typescript, Node.js.
            </p>
          </div>
          <div className="aboutQuestionSection">
            <h3 className="aboutQuestion">
              Where do you see yourself in 5 years?
            </h3>
            <p className="aboutAnswer">
              I want to create code that helps users. I hope to have some kind of position where I am able to contribute to a role for a company I believe in.
            </p>
          </div>
          <div className="aboutQuestionSection">
            <h3 className="aboutQuestion">
              What are your strengths & weaknesses?
            </h3>
            <p className="aboutAnswer">
              I know I can always make my code more efficient. I consider this to be both a good and a bad thing. I will always find a way to write it better. However in that journey, I will learn, I will grow, and I will be ready for the next challenge.
            </p>
          </div>
          <div className="aboutQuestionSection">
            <h3 className="aboutQuestion">
              Why are you our candidate?
            </h3>
            <p className="aboutAnswer">
              I may not have the most experience, but I am dedicated and driven to technologies. I'm willing to work extra, after hours, on weekends, I just want to work within IT.
            </p>
          </div>
        </div>
        <div className="aboutExperience">
          <h1 className="aboutTitles">What's your experience?</h1>
          {about_Experience(experience)}
        </div>
        <div className="aboutEducation">
          <h1 className="aboutTitles">What's your education?</h1>
          {about_Experience(education)}
        </div>
        <div className="aboutOther">
          <h1 className="aboutTitles">
            Any other information?
          </h1>
          <div className="aboutOtherSection">
            <p className="aboutOtherTitle">
              Languages: 
            </p>
            <p className="aboutOtherText">
              Native Swedish & English.
            </p>
          </div>
          <div className="aboutOtherSection">
            <p className="aboutOtherTitle">
              Interests:
            </p>
            <p className="aboutOtherText">
              Tech, economy, hockey, golf, tennis, health.
            </p>
          </div>
          <div className="aboutOtherSection">
            <p className="aboutOtherTitle">
              Other:
            </p>
            <p className="aboutOtherText">
              Swedish driver license, barista.
            </p>
          </div>
        </div>
        <div className="aboutStory">
          <Link to={"/story"}>
            <h1>
              Click To Read My Full Story.
            </h1>
          </Link>
        </div>
        <div className="aboutContact">
          <h1>
            I'm interested! 
            <br></br>
            How do we contact you?
          </h1>
          <p>
            My information is below. Let's talk!
          </p>
        </div>
      </div>
    )
  }
}

const about_Experience = (experience_Type) => {
  const aboutItems = Object.values(experience_Type);

  return (
    <div>
     {aboutItems.map(item => 
      <div className="aboutItem">
        <div className="aboutItemLeft">
          <div className="aboutItemPlace">
            {item.place}
          </div>
          <div className="aboutItemTitle">
            {item.title}
          </div>
        </div>
        <div className="aboutItemRight">
          <div className="aboutItemLocation">
            {item.location}
          </div>
          <div className="aboutItemTime">
            {item.time}
          </div>
        </div>
      </div>
     )}
    </div>
  )
}

