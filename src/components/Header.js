import { LOGO_URL } from "../utils/constants";  
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header= () => {
    const onlineStatus=useOnlineStatus();
    return (
        <div className="flex justify-between shadow-2xl  px-2 h-20">
            <div className="logo-container">
                <img className="w-15 h-20 rounded-md pl-[150px]" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 justify-between ">
                    <li className="p-4">
                        Status: {onlineStatus?"🟢":"🔴"}
                    </li>
                    <li className="p-4">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="p-4">
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className="p-4">
                        <Link to='/contact'>ContactUs</Link>
                    </li>
                    <li className="p-4">Cart</li>
                    <li className="p-4">My Account</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;