
import './EmptyListDisplay.css';

function EmptyListDisplay() {
    return (
        <div className="list-item--empty">
            <i className="empty-list__icon fa-solid fa-box-open"></i>
            <p className="empty-list__text">Looks like this list is empty!</p>
        </div>
    )
}

export default EmptyListDisplay;