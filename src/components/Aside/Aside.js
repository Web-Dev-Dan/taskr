
import Dropdown from '../../reusable/dropdown/Dropdown';
import './Aside.css';

function Aside({ data }) {
    console.log(data.items);

    return (
        <aside className="aside">
            <div className="aside__content">
                <Dropdown
                    icon="fa-solid fa-shapes"
                    title="Dashboard"
                />
                <Dropdown
                    icon="fa-solid fa-bolt"
                    title="Projects"
                />
                <Dropdown
                    icon="fa-solid fa-bug"
                    title="Reports"
                />
                <Dropdown
                    icon="fa-solid fa-envelope"
                    title="Messages"
                />
                <Dropdown
                    icon="fa-solid fa-gear"
                    title="Settings"
                />
            </div>
        </aside>
    )
}

export default Aside;