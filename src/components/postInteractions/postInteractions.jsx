import Image from "../image/image";
import "./postInteractions.css";

const PostInteractions = () => {
  return (
    <div className="postInteractions">
      <div className="interactionIcons">
        <Image path="pinterest/general/react.svg" alt="react" />
        <span>123</span>
        <Image path="pinterest/general/share.svg" alt="share" />
        <Image path="pinterest/general/more.svg" alt="more" />
      </div>
      <button>Save</button>
    </div>
  );
};

export default PostInteractions;
