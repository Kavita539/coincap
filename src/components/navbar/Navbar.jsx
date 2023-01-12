import { GrSearch } from "react-icons/gr";
import { RiSettings3Fill } from "react-icons/ri";
import "./navbar.css";

const Navbar = () => {
    return(
        <div className="nav-container">
            <nav className="nav-wrapper">
                <ul className="nav-list nav-list-left">
                    <li className="nav-list-item">Coins</li>
                    <li className="nav-list-item">Exchanges</li>
                    <li className="nav-list-item">Charts</li>
                    <li className="nav-list-item">Swap</li>
                </ul>

                <div className="nav-logo">
                    <img src="https://coincap.io/static/logos/black.svg" alt="coincap-logo" />
                </div>

                <ul className="nav-list nav-list-right">
                    <li className="nav-list-item">
                        <GrSearch/>
                    </li>
                    <li className="nav-list-item">
                        <RiSettings3Fill/>
                    </li>
                    <li className="nav-list-item">
                        <button className="connect-wallet-btn">Connect Wallet</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export {Navbar};