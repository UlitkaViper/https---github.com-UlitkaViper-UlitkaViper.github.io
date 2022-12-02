import React from 'react';
import bottomImg1 from '../static/images/bottom-img-1.png';
import bottomImg2 from '../static/images/bottom-img2.png';
import bottomImg3 from '../static/images/bottom-img3.png';
import bottomImg4 from '../static/images/bottom-img4.png';
import bottomImg5 from '../static/images/bottom-img5.png';
import bottomImg6 from '../static/images/bottom-img6.png';

import fbLogo from '../static/images/fb-logo.png';
import pinLogo from '../static/images/pinterest-logo.png';
import googleLogo from '../static/images/google-logo.png';
import instLogo from '../static/images/instagram-logo.png';
import twitterLogo from '../static/images/twitter-logo.png';
import beLogo from '../static/images/be-logo.png';


export function Footter() {
  return (
    <div className="Footter">
        <div className="bottom-instagram">
        Follow our @instagram_name
    </div>

    <div className="bottom-images-container">
        <div className="bottom-image">
            <img src={bottomImg1} alt="" />
        </div>
        <div className="bottom-image">
            <img src={bottomImg2} alt="" />
        </div>
        <div className="bottom-image">
            <img src={bottomImg3} alt="" />
        </div>
        <div className="bottom-image">
            <img src={bottomImg4} alt="" />
        </div>
        <div className="bottom-image">
            <img src={bottomImg5} alt="" />
        </div>
        <div className="bottom-image">
            <img src={bottomImg6} alt="" />
        </div>

    </div>

    <div className="bottom-title">
        NOT-FASHION
    </div>
    <div className="bottom-navbar">
        <div className="bottom-nav-item">
            Home
        </div>
        <div className="bottom-nav-item">
            Recipes
        </div>
        <div className="bottom-nav-item">
            Article
        </div>
        <div className="bottom-nav-item">
            Contact
        </div>
        <div className="bottom-nav-item">
            Purchase
        </div>
    </div>
    
    <div className="bottom-link-container">
        <div className="bottom-link">
            <img src={fbLogo} alt="" />
        </div>
        <div className="bottom-link">
            <img src={twitterLogo} />
        </div>
        <div className="bottom-link">
            <img src={pinLogo} />
        </div>
        <div className="bottom-link">
            <img src={googleLogo} alt="" />
        </div>
        <div className="bottom-link">
            <img src={beLogo} alt="" />
        </div>
        <div className="bottom-link">
            <img src={instLogo} alt="" />
        </div>
    </div>

    <div className="ultra-bottom-container">
        @2019, Dickcock. All Right Reserved
    </div>
    
    </div>
  );
}

// export default App;
