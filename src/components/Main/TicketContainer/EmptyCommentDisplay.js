
import './EmptyCommentDisplay.css';

function EmptyCommentDisplay() {
    return (
        <div className="comment-box--empty">
            <i className="empty-comments__icon fa-solid fa-envelope-open"></i>
            <p className="empty-comments__text">Looks like there are no comments!</p>
        </div>
    )
}

export default EmptyCommentDisplay;