
import './NotificationBar.css';

function NotificationBar({ handleClick }) {
    return (
        <div className="notification-bar">
            <p className="notification-bar__text">Welcome to <strong className="text-bold">taskr v.1.0.0</strong>! This application is currently in beta-stage production.</p>
            <button onClick={() => handleClick()} className="notification-bar__button btn btn-transparent" >
                <i className="fa-solid fa-xmark"></i>
            </button >
        </div >
    )
}

export default NotificationBar;