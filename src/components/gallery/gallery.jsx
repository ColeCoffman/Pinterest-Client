import GalleryItem from "../galleryItem/galleryItem";
import "./gallery.css";

// TEMP
const items = [
  {
    id: 1,
    media: "/pinterest/pins/pin1.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 2,
    media: "/pinterest/pins/pin2.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 3,
    media: "/pinterest/pins/pin3.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 4,
    media: "/pinterest/pins/pin4.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 5,
    media: "/pinterest/pins/pin5.jpeg",
    width: 1260,
    height: 1243,
  },
  {
    id: 6,
    media: "/pinterest/pins/pin6.jpeg",
    width: 1260,
    height: 1568,
  },
  {
    id: 7,
    media: "/pinterest/pins/pin7.jpeg",
    width: 1260,
    height: 1234,
  },
  {
    id: 8,
    media: "/pinterest/pins/pin8.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 9,
    media: "/pinterest/pins/pin9.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 10,
    media: "/pinterest/pins/pin10.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 11,
    media: "/pinterest/pins/pin11.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 12,
    media: "/pinterest/pins/pin12.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 13,
    media: "/pinterest/pins/pin13.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 14,
    media: "/pinterest/pins/pin14.jpeg",
    width: 1260,
    height: 1600,
  },
  {
    id: 15,
    media: "/pinterest/pins/pin15.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 16,
    media: "/pinterest/pins/pin16.jpeg",
    width: 1260,
    height: 1260,
  },
  {
    id: 17,
    media: "/pinterest/pins/pin17.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 18,
    media: "/pinterest/pins/pin18.jpeg",
    width: 1260,
    height: 1260,
  },
  {
    id: 19,
    media: "/pinterest/pins/pin19.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 20,
    media: "/pinterest/pins/pin20.jpeg",
    width: 1260,
    height: 1260,
  },
  {
    id: 21,
    media: "/pinterest/pins/pin21.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 22,
    media: "/pinterest/pins/pin22.jpeg",
    width: 1260,
    height: 1890,
  },
  {
    id: 23,
    media: "/pinterest/pins/pin23.jpeg",
    width: 1260,
    height: 1260,
  },
  {
    id: 24,
    media: "/pinterest/pins/pin24.jpeg",
    width: 1260,
    height: 1260,
  },
  {
    id: 25,
    media: "/pinterest/pins/pin25.jpeg",
    width: 1260,
    height: 1260,
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      {items.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Gallery;
