
import './ListItem.css';

function ListItem({ title, author, timeCreated, description, tag, comments }) {
    return (
        <div className="list-item">
            <button className="list-item__button btn btn-transparent">
                <h4 className="list-item__title">{title}</h4>
                <p className="list-item__info">{author}, {timeCreated}</p>
                <p className="list-item__description">{description}</p>
            </button>
            <div className="list-item__footer">
                <p className="list-item__tag">#{tag}</p>
                <button className="list-item__comments-btn btn btn-transparent">
                    <i className="fa-solid fa-message"></i>
                    <p>{comments.length}</p>
                </button>
            </div>
        </div>
    )
}

export default ListItem;