
import { useState } from 'react';
import './Main.css';
import ProjectContainer from './ProjectContainer/ProjectContainer';

function Main({
    data,
    projectIsShown,
    projectId,
    ticketIsShown,
    ticketId
}) {
    // Get Current Project:
    const getCurrentProject = data.items.filter(project => project.id === projectId);
    const currentProject = getCurrentProject[0];
    console.log(currentProject);

    return (
        <main className="main">
            {projectIsShown &&
                <ProjectContainer
                    projectName={currentProject.name}
                    projectDateCreated={currentProject.dateCreated}
                    projectTimeCreated={currentProject.timeCreated}
                    projectToDo={currentProject.toDo}
                    projectInProgress={currentProject.inProgress}
                    projectComplete={currentProject.complete}
                />
            }

            {ticketIsShown &&
                <div className="ticket-container">
                    ticket
                </div>
            }
        </main>
    )
}

export default Main;