import { LOGO_URL } from "../utils/constants";  
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header= () => {
    const onlineStatus=useOnlineStatus();
    return (
        <div className="flex justify-between bg-gray-200 shadow-lg m-2 px-2">
            <div className="logo-container">
                <img className="w-25 h-40" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 justify-between ">
                    <li className="bg-gray-100 p-4">
                        Status: {onlineStatus?"🟢":"🔴"}
                    </li>
                    <li className="bg-gray-100 p-4">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="bg-gray-100 p-4">
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className="bg-gray-100 p-4">
                        <Link to='/contact'>ContactUs</Link>
                    </li>
                    <li className="bg-gray-100 p-4">Cart</li>
                    <li className="bg-gray-100 p-4">My Account</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;