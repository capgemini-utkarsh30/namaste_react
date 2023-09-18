import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const changeBtnName = () => {
    return btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };
  return (
    <div className="flex justify-between shadow-lg m-2 bg-gray-200">
      <div className="logo-container">
        <img className="w-60 rounded-3xl" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Offline Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocerry">Grocerry</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <button onClick={changeBtnName}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
