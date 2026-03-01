import { Image as IKImage } from '@imagekit/react';

const Image = ({ src, className = '', w = null, h = null, alt = '' }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      src={src}
      className={className}
      alt={alt}
      loading="lazy"
      lgip={{ active: true, quality: 20 }}
      width={w}
      height={h}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default Image;
