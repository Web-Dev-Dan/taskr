
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
    ticketOpened,
    ticketCategory,
    updateProjectTitleInput,
    updateTicketTitleInput,
    updateTicketTagInput,
    updateTicketDescriptionInput
}) {
    // Get Current Project:
    const getCurrentProject = data.items.filter(project => project.id === projectId);
    const currentProject = getCurrentProject[0];
    console.log(currentProject);

    console.log(`Project ID: ${projectId} (${ticketId})`);
    console.log(`Ticket category is ${ticketCategory}`)


    return (
        <main className="main">
            {projectIsShown &&
                <ProjectContainer
                    key={projectId}
                    projectId={projectId}
                    projectName={currentProject.name}
                    projectDateCreated={currentProject.dateCreated}
                    projectTimeCreated={currentProject.timeCreated}
                    projectToDo={currentProject.toDo}
                    projectInProgress={currentProject.inProgress}
                    projectComplete={currentProject.complete}
                    ticketOpened={ticketOpened}
                    updateProjectTitleInput={updateProjectTitleInput}
                />
            }

            {ticketIsShown &&
                <TicketContainer
                    key={ticketId}
                    data={data.items}
                    ticketId={ticketId}
                    projectId={projectId}
                    // currentProject={currentProject}
                    projectName={currentProject.name}
                    ticketCategory={ticketCategory}
                    updateTicketTitleInput={updateTicketTitleInput}
                    updateTicketTagInput={updateTicketTagInput}
                    updateTicketDescriptionInput={updateTicketDescriptionInput}
                />
            }
        </main>
    )
}

export default Main;