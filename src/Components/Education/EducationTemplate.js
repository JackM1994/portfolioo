import React from 'react';
import '../WorkExperience/WorkExperienceTemplate.css';


function educationTemplate(props){
    return(
        <div className="work-info">
                <div className="work-title">{props.title}</div>
                <span className="role-date">{props.role}.<br></br> {props.date}</span>
                <p className="description">{props.description}</p>
        </div>
    );
}

export default educationTemplate;