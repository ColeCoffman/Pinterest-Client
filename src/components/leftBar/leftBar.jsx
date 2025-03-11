import Image from "../image/image";
import "./leftBar.css";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="/" className="menuIcon">
          <Image
            path="pinterest/general/logo.png"
            alt="Logo"
            className="logo"
          />
        </a>
        <a href="/" className="menuIcon">
          <Image path="pinterest/general/home.svg" alt="Home" />
        </a>
        <a href="/" className="menuIcon">
          <Image path="pinterest/general/create.svg" alt="Create" />
        </a>
        <a href="/" className="menuIcon">
          <Image path="pinterest/general/updates.svg" alt="Updates" />
        </a>
        <a href="/" className="menuIcon">
          <Image path="pinterest/general/messages.svg" alt="Messages" />
        </a>
      </div>
      <a href="/" className="menuIcon">
        <Image path="pinterest/general/settings.svg" alt="Settings" />
      </a>
    </div>
  );
};

export default LeftBar;
