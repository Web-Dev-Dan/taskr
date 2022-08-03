
import './ListItem.css';

function ListItem() {
    return (
        <div className="list-item">
            <button className="list-item__button btn btn-transparent">
                <h4 className="list-item__title">Create New Wireframe</h4>
                <p className="list-item__info">Dan, 6h ago</p>
                <p className="list-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </button>
            <div className="list-item__footer">
                <p className="list-item__tag">#UIDesign</p>
                <button className="list-item__comments-btn btn btn-transparent">
                    <i className="fa-solid fa-message"></i>
                    <p>12</p>
                </button>
            </div>
        </div>
    )
}

export default ListItem;