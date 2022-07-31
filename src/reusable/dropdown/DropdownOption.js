
import './DropdownOption.css';

function DropdownOption({ id, title, dateCreated, timeCreated, projectOpened }) {
    // function dropdownClicked() {
    //     console.log(`Option "${title}" clicked! ID: ${id}`);
    //     console.log(`Created at ${timeCreated} on ${dateCreated}.`);
    // }

    function dropdownOptionsClicked() {
        console.log(`Options button for "${title}" clicked!`);
    }

    return (
        <div className="dropdown-content__inner">
            <button onClick={() => projectOpened(id)} className="dropdown-content__button btn-transparent">
                <i className="dropdown-content__button--icon fa-solid fa-file"></i>
                <h4 className="dropdown-content__button--text">{title}</h4>
            </button>
            <button onClick={() => dropdownOptionsClicked()} className="dropdown-content__options btn-transparent">
                <i className="fa-solid fa-ellipsis"></i>
            </button>
        </div>
    )
}

export default DropdownOption;