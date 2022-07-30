
import './Dropdown.css';
import { useEffect, useState } from 'react';
import DropdownOption from './DropdownOption';

function Dropdown({ icon, title, data, createNewProject }) {
    // Toggle Project Dropdown:
    const [dropdownContentIsShown, setDropdownContentIsShown] = useState(false);

    function openDropdown() {
        console.log(`Toggled ${title}!`);
        setDropdownContentIsShown(!dropdownContentIsShown);
    }

    // Add New Project Input Form:
    const [inputValue, setInputValue] = useState('');

    function updateInputValue(e) {
        setInputValue(e.target.value);
    }

    function submitInputValue(e) {
        e.preventDefault();
        console.log(inputValue);
        createNewProject(inputValue);
        setInputValue('');
    }

    return (
        <div className={dropdownContentIsShown ? "dropdown-selected" : "dropdown"}>
            <button onClick={() => openDropdown()} className="dropdown-btn btn-transparent">
                <i className={icon}></i>
                <h3 className="dropdown-btn__title">{title}</h3>
                {dropdownContentIsShown ? <i className="dropdown-btn__icon fa-solid fa-caret-up"></i> : <i className="dropdown-btn__icon fa-solid fa-caret-down"></i>}
            </button>
            {dropdownContentIsShown && <div className="dropdown-content">
                <form className="dropdown-content__input-form">
                    <input onChange={updateInputValue} value={inputValue} className="input-form__input" type="text" placeholder="Add Project..." />
                    <button onClick={(e) => submitInputValue(e)} className="input-form__button btn btn-transparent" type="submit">
                        <div role="img" alt="Plus symbol to add new project">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </button>
                </form>
                {data.items.map(item => {
                    // console.log(item.name)
                    return (
                        <DropdownOption
                            key={item.id}
                            id={item.id}
                            title={item.name}
                            dateCreated={item.dateCreated}
                            timeCreated={item.timeCreated}
                        />
                    )
                })}
            </div>}
        </div>
    )
}

export default Dropdown;