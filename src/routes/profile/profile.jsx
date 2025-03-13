import { useState } from "react";
import Collections from "../../components/collections/collections";
import Gallery from "../../components/gallery/gallery";
import Image from "../../components/image/image";
import "./profile.css";

const Profile = () => {
  const [active, setActive] = useState("saved");

  return (
    <div className="profile">
      <Image
        path="pinterest/general/noAvatar.png"
        alt="user"
        className="profileAvatar"
        w={100}
        h={100}
      />
      <h1 className="profileName">John Doe</h1>
      <span className="profileUsername">@johnDoe</span>
      <div className="profileInfo">10 followers · 20 followings</div>
      <div className="profileActions">
        <Image path="pinterest/general/share.svg" alt="share" />
        <div className="profileButtons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path="pinterest/general/more.svg" alt="more" />
      </div>
      <div className="profileOptions">
        <span
          className={active === "created" ? "active" : ""}
          onClick={() => setActive("created")}
        >
          Created
        </span>
        <span
          className={active === "saved" ? "active" : ""}
          onClick={() => setActive("saved")}
        >
          Saved
        </span>
      </div>
      {active === "created" ? <Gallery /> : <Collections />}
    </div>
  );
};

export default Profile;
