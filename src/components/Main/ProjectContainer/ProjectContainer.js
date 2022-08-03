
import { useState } from 'react';
import './ProjectContainer.css';

function ProjectContainer({
    projectName,
    projectDateCreated,
    projectTimeCreated
}) {

    return (
        <div className="project-container">
            <div className="main__head">
                <div className="main__head-info">
                    <input className="head-info__title" value={projectName} placeholder="Add Project Name..." type="text" />
                    <p className="head-info__date">Created on {projectDateCreated} at {projectTimeCreated}.</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer;