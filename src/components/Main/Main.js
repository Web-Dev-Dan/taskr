
import { useState } from 'react';
import './Main.css';

function Main({ projectIsShown, projectId, ticketIsShown, ticketId, currentProject }) {
    console.log('---IN MAIN---')
    console.log(currentProject);

    return (
        <main className="main">
            {projectIsShown &&
                <div className="project-container">
                    <div className="main__head">
                        <div className="main__head-info">
                            <h2 className="head-info__title">{currentProject.name}</h2>
                            <p className="head-info__date">Created on {currentProject.dateCreated} at {currentProject.timeCreated}.</p>
                        </div>
                    </div>
                </div>
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