
import { useState, useEffect } from 'react';
import './Main.css';
import ProjectContainer from './ProjectContainer/ProjectContainer';
import TicketContainer from './TicketContainer/TicketContainer';

function Main({
    data,
    projectIsShown,
    projectId,
    ticketIsShown,
    ticketId,
    ticketOpened
}) {
    // Get Current Project:
    const getCurrentProject = data.items.filter(project => project.id === projectId);
    const currentProject = getCurrentProject[0];
    console.log(currentProject);

    console.log(`Project ID: ${projectId} (${ticketId})`)


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
                    ticketOpened={ticketOpened}
                />
            }

            {ticketIsShown &&
                <TicketContainer />
            }
        </main>
    )
}

export default Main;