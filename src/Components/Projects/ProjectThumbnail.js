import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectTemplate.css';


function Thumbnail(props){
    return(
        <div className="project">
            <Link to="{props.link}">
                <div className="project-image">
                    <img className="p-image" src={props.image} alt="Project" />
                </div>
                <div className="project-border">
                <div className="project-titles">{props.title}</div>
                <div className="project-category">{props.category}</div>
                </div>
               
            </Link>
        </div>
    );
}

export default Thumbnail;