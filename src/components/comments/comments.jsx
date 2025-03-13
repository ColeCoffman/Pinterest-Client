import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import Image from "../image/image";
import "./comments.css";

const Comments = () => {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">5 comments</span>
        <div className="comment">
          <Image path="pinterest/general/noAvatar.png" alt="user" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <span className="commentTime">1h ago</span>
          </div>
        </div>
        <div className="comment">
          <Image path="pinterest/general/noAvatar.png" alt="user" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <span className="commentTime">1h ago</span>
          </div>
        </div>
        <div className="comment">
          <Image path="pinterest/general/noAvatar.png" alt="user" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <span className="commentTime">1h ago</span>
          </div>
        </div>
        <div className="comment">
          <Image path="pinterest/general/noAvatar.png" alt="user" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <span className="commentTime">1h ago</span>
          </div>
        </div>
      </div>
      <form action="" className="commentForm">
        <input type="text" placeholder="Add a comment..." />
        <div className="emoji">
          <div onClick={() => setOpenEmojiPicker(!openEmojiPicker)}>😄</div>
          {openEmojiPicker && (
            <div className="emojiPicker">
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Comments;
