import React from 'react';
import '../WorkExperience/WorkExperience.css';
import EducationTemplate from './EducationTemplate';
const workExperience = () => {
    return(
        <div className="work-experience">
            <h2 className="w-title">Education</h2>
            <div className="block"></div>
            <EducationTemplate 
                title="National University of Ireland, Galway"
                role="Bachelor of Arts Degree in Information Technology"
                date="Sep 2013 - May 2016"
                description=
                    "Course I took while attending this degree were: Database Systems, Object Oriented Programming, Web Application Development and Web Based Information Systems. As part of a group, for my final year project, we build a tourism mobile application. The app served as a way to promote the East side of Ireland."
            
            />

            
        </div>
    );
}

export default workExperience;