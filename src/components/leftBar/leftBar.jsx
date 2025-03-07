import "./leftBar.css";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="/" className="menuIcon">
          <img src="/general/logo.png" alt="Logo" className="logo" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/home.svg" alt="Home" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/create.svg" alt="Create" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/updates.svg" alt="Updates" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/messages.svg" alt="Messages" />
        </a>
      </div>
      <a href="/" className="menuIcon">
        <img src="/general/settings.svg" alt="Settings" />
      </a>
    </div>
  );
};

export default LeftBar;
