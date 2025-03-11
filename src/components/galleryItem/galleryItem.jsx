import { Link } from "react-router";
import Image from "../image/image";
import "./galleryItem.css";

const GalleryItem = ({ item }) => {
  const optimizedHeight = (372 * item.height) / item.width;
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <Image path={item.media} alt={item.id} w={372} h={optimizedHeight} />
      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="save">Save</button>
      <div className="overlay-icons">
        <button>
          <Image path="pinterest/general/share.svg" alt="share" />
        </button>
        <button>
          <Image path="pinterest/general/more.svg" alt="more" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
