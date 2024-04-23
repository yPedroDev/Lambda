import React from "react";

import useTypewriter from "./Type/useTypewrite";

interface Props {
  text: string;
}

const TypewriteContent = (props: Props) => {
  // const typingSpeed = props.typingSpeed != null ? props.typingSpeed : 50;
  const typingText = props?.text != null ? props?.text : "";
  const [text, flags] = useTypewriter({
    words: [typingText],
    loop: 1,
    // typeSpeed: 20,
  });

  return (
    <>
      <h1>{text}</h1>
      {/* <div className="blink">|</div> */}
    </>
  );
};

export default TypewriteContent;
