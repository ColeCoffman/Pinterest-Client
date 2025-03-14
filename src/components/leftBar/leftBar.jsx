import { Link } from "react-router";
import Image from "../image/image";

import "./leftBar.css";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <Link to="/" className="menuIcon">
          <Image
            path="pinterest/general/logo.png"
            alt="Logo"
            className="logo"
          />
        </Link>
        <Link to="/" className="menuIcon">
          <Image path="pinterest/general/home.svg" alt="Home" />
        </Link>
        <Link to="/create" className="menuIcon">
          <Image path="pinterest/general/create.svg" alt="Create" />
        </Link>
        <Link to="/" className="menuIcon">
          <Image path="pinterest/general/updates.svg" alt="Updates" />
        </Link>
        <Link to="/" className="menuIcon">
          <Image path="pinterest/general/messages.svg" alt="Messages" />
        </Link>
      </div>
      <Link to="/" className="menuIcon">
        <Image path="pinterest/general/settings.svg" alt="Settings" />
      </Link>
    </div>
  );
};

export default LeftBar;
