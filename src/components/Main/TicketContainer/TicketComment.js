
import './TicketComment.css';

function TicketComment() {
    return (
        <div className="comment-box">
            <i className="comment-box__icon fa-solid fa-message"></i>
            <div className="comment-box__content">
                <div className="comment-box__content--top">
                    <p>Daniel Healy</p>
                    <p>Monday 14 August, 2022 | 10:45</p>
                </div>
                <p className="comment-box__comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}

export default TicketComment;