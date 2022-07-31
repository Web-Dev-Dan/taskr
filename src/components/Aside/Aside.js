
import Dropdown from '../../reusable/dropdown/Dropdown';
import FixedButton from '../../reusable/dropdown/FixedButton';
import NotifyButton from '../../reusable/dropdown/NotifyButton';
import './Aside.css';

function Aside({ data, createNewProject, projectOpened }) {
    // console.log(data.items);

    return (
        <aside className="aside">
            <div className="aside__content">
                <div className="aside__content--top">
                    <FixedButton
                        icon="fa-solid fa-shapes"
                        title="Dashboard"
                    />
                    <Dropdown
                        icon="fa-solid fa-bolt"
                        title="Projects"
                        data={data}
                        createNewProject={createNewProject}
                        projectOpened={projectOpened}
                    />
                    <NotifyButton
                        icon="fa-solid fa-bug"
                        title="Reports"
                        notificationCount={21}
                    />
                    <NotifyButton
                        icon="fa-solid fa-envelope"
                        title="Messages"
                        notificationCount={5}
                    />
                </div>
                <div className="aside__content--bottom">
                    <FixedButton
                        icon="fa-solid fa-gear"
                        title="Settings"
                    />
                    <FixedButton
                        icon="fa-solid fa-arrow-right-from-bracket"
                        title="Logout"
                    />
                </div>
            </div>
        </aside>
    )
}

export default Aside;