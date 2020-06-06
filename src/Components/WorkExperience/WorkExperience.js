import React from 'react';
import './WorkExperience.css';
import  WorkExperienceTemplate from './WorkExperienceTemplate';
const workExperience = () => {
    return(
        <div className="work-experience">
            <h2 className="w-title">Work Experience</h2>
            <div className="block"></div>
            <WorkExperienceTemplate 
                title="The Patrick's Well"
                role="Bartender"
                date="June 2019 - Present"
                description="Bartender in The Patrick's Well, taking drink orders from other staff or from the customer. Using different drinks and ingredients to make a cocktail. Being organised, controlled and prepared behind the bar.
                Skills
                .Increased productivity and overall work efficiency since date of employment.
                .Changing Kegs and cleaning the lines.
                .Improving communication skills"
            
            />

            <WorkExperienceTemplate 
                title="Land Tec Landscaping"
                role="Landscaper"
                date="May 2017 - May 2019"
                description="Construction responsibilities mainly consisted of reading blueprints, marking and planting for trees and shrubs. Organizing the work area for tools, fabric and essential equipment. Delegating work at the start of each shift to eliminate confusion and better productivity.
                Office responsibilities mainly consisted of using Excel to keep track of machine equipment hours and employee hours. Experience using software such as Sage 50 to print and keep track of employees wages."

            />
            
        </div>
    );
}

export default workExperience;