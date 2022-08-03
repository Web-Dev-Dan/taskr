
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
                    <h2 className="head-info__title">{projectName}</h2>
                    <p className="head-info__date">Created on {projectDateCreated} at {projectTimeCreated}.</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer;