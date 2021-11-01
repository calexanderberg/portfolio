import React from 'react';
import '../css/contact.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="contact_Intro">
          <p>Want to know more?</p>
          <p>All my information is shown below:</p>
        </div>
        <div className="contact_Sections">
          <div className="contact_Section">
            <div className="contact_Section_Title">
            <p>Swedish Locations:</p>
          </div>
            <div className="contact_Section_Info ">
            <p>Rosenvägen 30<br></br>254 82 Helsingborg</p>
            <br></br>
            <br></br>
            <p>Midsommarvägen 10<br></br>126 35 Hägersten</p>
            <br></br>
            <br></br>
            <a href="tel:+46708128516">+46 708-12 85 16</a>
          </div>
          </div>
  
          <div className="contact_Section">
            <div className="contact_Section_Title">
            <p>USA Location:</p>
          </div>
            <div className="contact_Section_Info ">
              <p>3572 Antarctic Circle <br></br>34112 Naples, Florida</p>
              <br></br>
              <br></br>
              <a href="tel:+18552243287">+1 (855) 224-3287</a>
              <br></br>
              <br></br>
              <p className="contact_Disclaimer">I am a legal resident of the United States.<br></br>Willing to fly over to the U.S and/or relocate.</p>
            </div>
          </div>
  
          <div className="contact_Section">
            <div className="contact_Section_Title">
            <p>Social Medias:</p>
          </div>
            <div className="contact_Section_Info ">
            <a href="https://www.instagram.com/calexanderberg/" target="_blank">Instagram: @calexanderberg</a>
            <br></br>
            <a href="https://www.joinclubhouse.com/@calexanderberg" target="_blank">Clubhouse: @calexanderberg </a>
            <br></br>
            <a href="https://twitter.com/CAlexanderBerg" target="_blank">Twitter: @calexanderberg </a>
            <br></br>
            <a href="https://www.linkedin.com/in/calexanderberg/" target="_blank">LinkedIn: /calexanderberg</a>
            <br></br>
            <a href="https://www.facebook.com/calexanderberg/" target="_blank">Facebook: /calexanderberg</a>
          </div>
          </div>
  
          <div className="contact_Section"> 
            <div className="contact_Section_Title">
              <p>Other info:</p>
            </div>
            <div className="contact_Section_Info ">
              <a href="mailto:Alexander@re-do.nu">Professional: Alexander@re-do.nu</a>
              <br></br>
              <a href="mailto:Alexberg@kth.se">School: Alexberg@kth.se</a>
              <br></br>
              <a href="mailto:Carlalexanderberg@gmail.com">Personal: Carlalexanderberg@gmail.com</a>
            </div>
          </div>
  
        </div>
      </div>
    )
  };
};