
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
    const getCurrentProject = data.items.filter(project => project.id === projectId);
    const currentProject = getCurrentProject[0];

    return (
        <main className="main">
            {projectIsShown &&
                <ProjectContainer
                    projectName={currentProject.name}
                    projectDateCreated={currentProject.dateCreated}
                    projectTimeCreated={currentProject.timeCreated}
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