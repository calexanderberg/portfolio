import React from 'react';
import '../css/footer.css'; 

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
  
        <div className="footer_Content">
          <div className="footer_Logo">
              <h1>C. Alexander Berg</h1>
          </div>
          
          <div className="footer_Main_Content">         
            <div className="footer_Contact">
              <a href="tel:+46708128516">+46 708 12 85 16</a>
              <a href="mailto:Alexander@re-do.nu">Alexander@re-do.nu</a>
              <a href="https://www.google.com/maps/place/Midsommarv%C3%A4gen+10,+126+35+H%C3%A4gersten/@59.3005222,18.0106135,17z/data=!4m5!3m4!1s0x465f77b048ab8c5f:0xf57ca7bbf9784a16!8m2!3d59.3005195!4d18.0128022" target="_blank">
              Midsommarvägen 10, <br></br> 126 35 Hägersten, Sweden</a>
              </div>
            <div className="footer_Medias">
            <a href="https://www.linkedin.com/in/calexanderberg/" target="_blank">
              Linkedin
            </a>
            <a href="https://www.instagram.com/calexanderberg/" target="_blank">
              Instagram
              </a>
            <a href="https://www.facebook.com/calexanderberg/" target="_blank">
              Facebook
              </a>
          </div>
          </div>
  
          <div className = "footer_Disclaimer">
            <p>Copyright © 2021. All rights reserved.</p>
            <p>I do not track or collect any information</p>
          </div>
        </div>
      </div>
    )
  };
};