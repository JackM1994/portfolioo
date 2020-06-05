import React from 'react';

import './PersonalInfo.css';
import LinkedIn from '../../assests/icons/linkedin.png';
import Github from '../../assests/icons/logo.png';
import Twitter from '../../assests/icons/twitter.png';

const  personalInfo = () => {
    return(
        
        <div className="PersonalInfo">
            <div className="snippet">
                <h1 className="name-title">Hi, I am Jack Morris</h1>
                <p className="brand-statement">
                    I am a Front-End Developer that creates small web applications for smaller businesses 
                    and freelancers who want to showcase thier product/ideas.
                    I like to be constant with the customer so that we are both on
                    the same page and the finalised product is exactly what is needed to suit their needs.
                </p>
            </div>
            <span className="social-media-icon">{LinkedIn}</span>
            <span className="social-media-icon">{Twitter}</span>
            <span className="social-media-icon">{Github}</span>
        </div>
    );
}

export default personalInfo;