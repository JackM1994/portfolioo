import React from 'react';
import './About.css';
import ProfileImage from '../../assests/profile-image.jpeg';


function About(props){
    return(
        <div className="About">
            <h1 className="header-about">About</h1>
            <div>
                <img className="profiler" src={ProfileImage} alt="profileImage" />
                <p className="basic-info">
                From a small rural town in the West of Ireland. 
                I like to stay active with the gym and team sports like Soccer, Gaelic and Rugby. 
                After spending 2.5 years abroad in Canada, 
                I decided to come home to take a course in Front-End Development. 
                Since then I have completed my Front-End Development course along with a FullStack JavaScript course too. 
                I have made several projects, all which can be viewed on my Github account. 
                I am currently working on a webpage for fitness and another for education.
                </p>
            </div>
        </div>
    );
}

export default About;