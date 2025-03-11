import { IKImage } from "imagekitio-react";

const Image = ({ path, alt, className, w, h }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={path}
      loading="lazy"
      lqip={{ active: true, quality: 10 }}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
      alt={alt}
      className={className}
    />
  );
};

export default Image;
