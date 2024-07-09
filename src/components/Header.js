import { LOGO_URL } from "../utils/constants";  

const Header= () => {
    return (
        <div className="Header-component">
            <img className="logo" src={LOGO_URL}/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
                <li>My Account</li>
            </ul>
        </div>
    )
};

export default Header;