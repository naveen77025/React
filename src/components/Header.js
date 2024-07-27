import { LOGO_URL } from "../utils/constants";  
import { Link } from "react-router-dom";

const Header= () => {
    return (
        <div className="Header-component">
            <img className="logo" src={LOGO_URL}/>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li>
                    <Link to='/contact'>ContactUs</Link>
                </li>
                <li>Cart</li>
                <li>My Account</li>
            </ul>
        </div>
    )
};

export default Header;