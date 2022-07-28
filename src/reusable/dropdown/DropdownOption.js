
import './DropdownOption.css';

function DropdownOption({ id, title }) {
    return (
        <div className="dropdown-content__inner">
            <button className="dropdown-content__button btn-transparent">
                <i className="dropdown-content__button--icon fa-solid fa-file"></i>
                <h4 className="dropdown-content__button--text">{title}</h4>
            </button>
            <button className="dropdown-content__options btn-transparent">
                <i className="fa-solid fa-ellipsis"></i>
            </button>
        </div>
    )
}

export default DropdownOption;