
import './Dropdown.css';
import { useState } from 'react';

function Dropdown({ icon, title }) {
    const [dropdownContentIsShown, setDropdownContentIsShown] = useState(false);

    function openDropdown() {
        console.log(`Toggled ${title}!`);
        setDropdownContentIsShown(!dropdownContentIsShown);
    }

    return (
        <div className={dropdownContentIsShown ? "dropdown-selected" : "dropdown"}>
            <button onClick={() => openDropdown()} className="dropdown-btn btn-transparent">
                <i className={icon}></i>
                <h3 className="dropdown-btn__title">{title}</h3>
                {dropdownContentIsShown ? <i className="dropdown-btn__icon fa-solid fa-caret-up"></i> : <i className="dropdown-btn__icon fa-solid fa-caret-down"></i>}
            </button>
            {dropdownContentIsShown && <div className="dropdown-content">
                <div className="dropdown-content__inner">
                    <button className="dropdown-content__button btn-transparent">
                        <i className="dropdown-content__button--icon fa-solid fa-file"></i>
                        <h4 className="dropdown-content__button--text">Portfolio</h4>
                    </button>
                    <button className="dropdown-content__options btn-transparent">
                        <i className="fa-solid fa-ellipsis"></i>
                    </button>
                </div>

                <div className="dropdown-content__inner">
                    <button className="dropdown-content__button btn-transparent">
                        <i className="dropdown-content__button--icon fa-solid fa-file"></i>
                        <h4 className="dropdown-content__button--text">Bug Tracker</h4>
                    </button>
                    <button className="dropdown-content__options btn-transparent">
                        <i className="fa-solid fa-ellipsis"></i>
                    </button>
                </div>

                <div className="dropdown-content__inner">
                    <button className="dropdown-content__button btn-transparent">
                        <i className="dropdown-content__button--icon fa-solid fa-file"></i>
                        <h4 className="dropdown-content__button--text">Wordle Clone and something else...</h4>
                    </button>
                    <button className="dropdown-content__options btn-transparent">
                        <i className="fa-solid fa-ellipsis"></i>
                    </button>
                </div>
            </div>}
        </div>
    )
}

export default Dropdown;