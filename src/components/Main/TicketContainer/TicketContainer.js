
import TicketComment from './TicketComment';
import './TicketContainer.css';

function TicketContainer({
    ticketId,
    projectId,
    projectName,
    // currentProject, 
    ticketCategory,
    updateTicketTitleInput,
    updateTicketTagInput,
    updateTicketDescriptionInput
}) {
    console.log('-------')
    console.log(`ProjectID: ${projectId} | Ticket ID: ${ticketId}`)

    let ticketColour;

    if (ticketCategory === 'toDo') {
        ticketColour = 'ticket-container--primary';
    } else if (ticketCategory === 'inProgress') {
        ticketColour = 'ticket-container--yellow';
    } else if (ticketCategory === 'complete') {
        ticketColour = 'ticket-container--green';
    }

    return (
        <div className={`ticket-container ${ticketColour}`}>
            {/* Ticket Title Information */}
            < div className="ticket__head" >
                <div className="ticket__head-info">
                    {/* Header */}
                    <div className="ticket-info__info">
                        <i className="ticket-info__icon fa-solid fa-ticket"></i>
                        <p className="ticket-info__subtitle">Opened a task for <strong className="ticket-info__text--strong">{projectName}</strong>.</p>
                    </div>
                    <input onChange={(e) => updateTicketTitleInput(e)} className="ticket-info__title" value="Create New Wireframe" placeholder="Add Ticket Name..." type="text" />
                    {/* Author / Date / Time */}
                    <p className="ticket-info__date">Created by <strong className="ticket-info__text--strong">Dan</strong> on Friday 5 August 2022 at 11:45.</p>
                </div>
            </div >
            {/* Tag */}
            < div className="ticket-info__tag-container" >
                <i className="ticket-info__tag-icon fa-solid fa-hashtag"></i>
                <input onChange={(e) => updateTicketTagInput(e)} className="ticket-info__tag-input" value="UIDESIGN" placeholder="Add Tag..." type="text" />
            </div >
            {/* Description */}
            {/* <p className="ticket__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
            <div className="ticket__description-container">
                <textarea onChange={(e) => updateTicketDescriptionInput(e)} className="ticket__description" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." type="text" />
                {/* <div className="ticket__description-resize__container">
                    <i className="ticket__description-resize__icon fa-solid fa-left-right"></i>
                </div> */}
            </div>
            <div className="comments-container">
                <p className="comments-container__header">Comments (3)</p>
                <div className="comments-container__comments">
                    <TicketComment />
                    <TicketComment />
                    <TicketComment />
                </div>
            </div>
        </div >
    )
}

export default TicketContainer;