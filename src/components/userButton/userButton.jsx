import { useState } from "react";
import "./userButton.css";
const UserButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const currentUser = true;
  const TEMP_USER = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/general/noAvatar.png",
  };

  return currentUser ? (
    <div className="userButton">
      <img src={TEMP_USER.avatar} alt="User" />
      <img
        src="/general/arrow.svg"
        alt="Arrow Down"
        className="arrowDown"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Settings</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/login" className="loginButton">
      Login / Sign Up
    </a>
  );
};

export default UserButton;
