
import EmptyCommentDisplay from './EmptyCommentDisplay';
import TicketComment from './TicketComment';
import './TicketContainer.css';

function TicketContainer({
    ticketId,
    data,
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

    // Get Ticket Information:
    const getCurrentProject = data.filter(project => project.id === projectId);
    const getCurrentCategory = ticketCategory;
    let getCurrentTicketList;
    if (getCurrentCategory === 'toDo') {
        getCurrentTicketList = getCurrentProject[0].toDo;
    } else if (getCurrentCategory === 'inProgress') {
        getCurrentTicketList = getCurrentProject[0].inProgress;
    } else if (getCurrentCategory === 'complete') {
        getCurrentTicketList = getCurrentProject[0].complete;
    }
    const getCurrentTicket = getCurrentTicketList.filter(ticket => ticket.id === ticketId);

    console.log(getCurrentTicket[0])

    // Update Colours:
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
                    <input onChange={(e) => updateTicketTitleInput(e)} className="ticket-info__title" value={getCurrentTicket[0].name} placeholder="Add Ticket Name..." type="text" />
                    {/* Author / Date / Time */}
                    <p className="ticket-info__date">Created by <strong className="ticket-info__text--strong">{getCurrentTicket[0].author}</strong> on {getCurrentTicket[0].dateCreated} at 11:45.</p>
                </div>
            </div >
            {/* Tag */}
            < div className="ticket-info__tag-container" >
                <i className="ticket-info__tag-icon fa-solid fa-hashtag"></i>
                <input onChange={(e) => updateTicketTagInput(e)} className="ticket-info__tag-input" value={getCurrentTicket[0].tag} placeholder="Add Tag..." type="text" />
            </div >
            {/* Description */}
            {/* <p className="ticket__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
            <div className="ticket__description-container">
                <textarea onChange={(e) => updateTicketDescriptionInput(e)} className="ticket__description" value={getCurrentTicket[0].description} placeholder="Add Description..." type="text" />
                {/* <div className="ticket__description-resize__container">
                    <i className="ticket__description-resize__icon fa-solid fa-left-right"></i>
                </div> */}
            </div>
            <div className="comments-container">
                <p className="comments-container__header">Comments ({getCurrentTicket[0].comments.length})</p>
                <div className="comments-container__comments">
                    {/* Show Comments: */}
                    {getCurrentTicket[0].comments && getCurrentTicket[0].comments.map(
                        comment => <TicketComment
                            key={comment.id}
                            id={comment.id}
                            author={comment.author}
                            dateCreated={comment.dateCreated}
                            timeCreated={comment.timeCreated}
                            content={comment.content}

                        />
                    )}
                    {/* No Comments: */}
                    {getCurrentTicket[0].comments.length === 0 && <EmptyCommentDisplay />}
                </div>
            </div>
        </div >
    )
}

export default TicketContainer;