
import './Dropdown.css';
import { useState } from 'react';
import DropdownOption from './DropdownOption';

function Dropdown({ icon, title, data }) {
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
                {data.items.map(item => {
                    // console.log(item.name)
                    return (
                        <DropdownOption
                            key={item.id}
                            id={item.id}
                            title={item.name}
                        />
                    )
                })}
            </div>}
        </div>
    )
}

export default Dropdown;