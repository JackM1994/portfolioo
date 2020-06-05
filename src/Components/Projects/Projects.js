import React from 'react';
import Thumbnail from './ProjectThumbnail';



function Projects(props){
    return(
        <div>
            <h1>Projects</h1>
            <Thumbnail
                link="https://jackm1994.github.io/4.opp_game_show/"
                image=""
                title="Friends Quote Game"
                category="Trivia, Word search"
            />

            <Thumbnail
                link="https://jackm1994.github.io/treehouse_project5/"
                image=""
                title="Photo Gallery"
                category="Arts"
            />  

            <Thumbnail
                link="https://jackm1994.github.io/treehouse_project4.1/"
                image=""
                title="CSS Guide"
                category="Educational"
            />  
        </div>
    );
}

export default Projects;