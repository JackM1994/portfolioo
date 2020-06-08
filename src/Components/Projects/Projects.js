import React from 'react';
import './Projects.css';
import Thumbnail from './ProjectThumbnail';
import FriendsImage from '../../assests/friends-main.png';
import PhotoGallery from '../../assests/moraine-lake.png';
import CssGuide from '../../assests/css-guide.png';


function Projects(props){
    return(
        <div className ="project-work">
            <h1 className="project-title">Projects</h1>
            <Thumbnail
                link="https://jackm1994.github.io/4.opp_game_show/"
                image={FriendsImage}
                title="Friends Quote Game"
                category="Trivia, Word search"
            />

            <Thumbnail
                link="https://jackm1994.github.io/treehouse_project5/"
                image={PhotoGallery}
                title="Photo Gallery"
                category="Arts"
            />  

            <Thumbnail
                link="https://jackm1994.github.io/treehouse_project4.1/"
                image={CssGuide}
                title="CSS Guide"
                category="Educational"
            />  
        </div>
    );
}

export default Projects;