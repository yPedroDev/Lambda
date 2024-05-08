import React, { ComponentProps } from "react";
import { LazyLoadComponentProps, LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export type Props = LazyLoadComponentProps & ComponentProps<"img"> & {
  src: string;
  alt?: string;
  theClass?: string;
  width?: number;
  height?: number;
};
const Image = ({ src, alt, theClass, width, height, ...props }: Props) => {
  return (
    <>
      <LazyLoadImage
        alt={alt}
        height={height}
        className={theClass}
        effect="blur"
        wrapperProps={{
          // If you need to, you can tweak the effect transition using the wrapper style.
          style: { transitionDelay: "1s" },
        }}
        style={{ borderRadius: 10 }}
        draggable="false"
        src={src} // use normal <img> attributes as props
        width={width}
        {...props}
      />
    </>
  );
};

export default Image;
