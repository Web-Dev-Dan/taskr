
import './Navbar.css';

function Navbar() {
    return (
        <nav className="nav">
            <div className="inner">
                <div className="nav__logo">
                    <div className="nav__logo--icon">
                        <i className="fa-solid fa-layer-group"></i>
                    </div>
                    <p className="nav__logo--text">taskr</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;