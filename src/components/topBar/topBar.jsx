import UserButton from "../userButton/userButton";
import "./topBar.css";
const TopBar = () => {
  return (
    <div className="topBar">
      {/* Search Bar */}
      <div className="searchBar">
        <img src="/general/search.svg" alt="Search" />
        <input type="text" placeholder="Search" />
      </div>
      {/* User Info */}
      <UserButton />
    </div>
  );
};

export default TopBar;
