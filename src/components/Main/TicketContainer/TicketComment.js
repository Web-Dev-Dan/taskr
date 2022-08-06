
import './TicketComment.css';

function TicketComment({ id, author, dateCreated, timeCreated, content }) {
    return (
        <div className="comment-box">
            <i className="comment-box__icon fa-solid fa-message"></i>
            <div className="comment-box__content">
                <div className="comment-box__content--top">
                    <p>{author}</p>
                    <p>{dateCreated} | {timeCreated}</p>
                </div>
                <p className="comment-box__comment">{content}</p>
            </div>
        </div>
    )
}

export default TicketComment;