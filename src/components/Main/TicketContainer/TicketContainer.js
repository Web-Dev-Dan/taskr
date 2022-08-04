
import './TicketContainer.css';

function TicketContainer() {
    return (
        <div className="ticket-container">
            {/* Ticket Title Information */}
            <div className="ticket__head">
                <div className="ticket__head-info">
                    <div className="ticket-info__info">
                        <i className="ticket-info__icon fa-solid fa-ticket"></i>
                        <p className="ticket-info__subtitle">Opened a task for <strong className="ticket-info__subtitle--strong">Portfolio</strong>.</p>
                    </div>
                    <input className="ticket-info__title" value="Create New Wireframe" placeholder="Add Ticket Name..." type="text" />
                    {/* <p className="head-info__date">Created on {projectDateCreated} at {projectTimeCreated}.</p> */}
                </div>
            </div>
        </div>
    )
}

export default TicketContainer;