import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

interface Props {
  src: string;
  alt?: string;
  class?: string;
  width?: number;
  height?: number;
}
const Image = (props: Props) => {
  if (props == null) return (<><h1>Props are null</h1></>);
  else {
    return (
      <>
        <LazyLoadImage
          alt={props?.alt}
          height={props?.height}
          className={props?.class}
          effect="blur"
          wrapperProps={{
            // If you need to, you can tweak the effect transition using the wrapper style.
            style: { transitionDelay: "1s" },
          }}
          style={{borderRadius: 10}}
          draggable="false"
          src={props?.src} // use normal <img> attributes as props
          width={props?.width}
        />
      </>
    );
  }
};

export default Image;