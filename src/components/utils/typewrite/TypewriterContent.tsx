import React, { ComponentProps } from "react";

import useTypewriter from "./Type/useTypewrite";

interface Props {
  content: string;
}

const TypewriteContent = ({content, ...props}: Props) => {
  // const typingSpeed = props.typingSpeed != null ? props.typingSpeed : 50;
  const [text, flags] = useTypewriter({
    words: [content],
    loop: 1,
    // typeSpeed: 20,
  });

  return (
    <>
      <h1 {...props}>{text}</h1>
      {/* <div className="blink">|</div> */}
    </>
  );
};

export default TypewriteContent;
