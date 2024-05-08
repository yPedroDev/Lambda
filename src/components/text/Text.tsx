import React from "react";
import styled, { keyframes } from "styled-components";
var Text = styled.section`
  background-color: transparent;
  width: auto;
  height: auto;
  // margin: 38px;
  overflow: hidden;
  // content: "";

  // display: flex;
  // flex-direction: column;
  // justify-content: space-around;
  // align-items: center;
  // padding: 1em;
  transition: all 0.2s linear;
  &:hover {
    // box-shadow: 0 -1vmin 2vmin orange inset, 0 1vmin 2vmin orange inset,
    //   0 -1vmin 5vmin orange inset;

    filter: drop-shadow(0 0 1vmin DarkOrange)
      drop-shadow(0 1vmin 2vmin DarkOrange)
      drop-shadow(2vmin -1vmin 1vmin DarkOrange) drop-shadow(0 0 7vmin orange);
  }
  // &:before{
  //   position: absolute;
  //   background: conic-gradient(transparent 270deg, white, transparent);
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   aspect-ratio: 1;
  //   width: 100%;
  // }
  // &:after{
  //   content: '';
  //   background: inherit;
  //   border-radius: inherit;
  //   position: absolute;
  //   inset: var(--offset);
  //   height: calc(100% - 2 * var(--offset));
  //   width: calc(100% - 2 * var(--offset));

  // }
`;
type Props = React.ComponentProps<"p"> & {
  text: React.ReactElement;
};

const BetterText = ({ text, ...props }: Props) => {
  return (
    <>
      <Text {...props}>{text}</Text>
    </>
  );
};

export default BetterText;
