import React, {
  ComponentProps,
  FunctionComponent,
  ReactElement,
  ReactNode,
} from "react";
// import { button } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { tv, VariantProps } from "tailwind-variants";
import { Button } from "@/components/ui/button"

const button = tv({
  base: "w-auto m-1",
  variants: {
    btnType: {
      default: "ghost",
      outline: "outline",
      ghost: "ghost",
    },
    rounded:{
      default: "rounded-full"
    },
    size: {
      default: "h-8",
      icon: "h-9 w-9",
      sm: "",
      lg: ""
    },
    color: {
      default: "bg-orange/30",
      warning: "bg-orange-500",
      success: "bg-emerald-300",
      error: "bg-red-200",
    },
  },
});

const BtnContent = styled.div`
  font-size: 15px;
`;
export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {
    text?: ReactElement | string;
    className?: string;
    to?: string | number;
    isMobile: boolean;
    clickable?: boolean;
    //   icon: String;
  };

const Btn = ({ text, to, clickable, isMobile, ...props }: ButtonProps) => {
  const navigate = useNavigate();
  const btnRef = React.useRef<React.ElementRef<"button">>(null);
  const [btnRenderer, setBtnRenderer] = React.useState(
    <Button
      variant="outline"
      onClick={(e) => {
        if (clickable) {
          if (to != "") {
            if (typeof to === "number") navigate(to);
            else navigate("/" + to);
          }
        }
      }}
      ref={btnRef}
      className={button({ color: "default", size: "default", rounded: "default" })}
      {...props}
    >
      <BtnContent>{text}</BtnContent>
    </Button>
  );

  return (
    <>
      {!isMobile ? <>{btnRenderer}</> : ""}{" "}
      {/*Se não estiver mobile vai mostrar o butão, caso ocontrario não vai mostrar. */}
    </>
  );
};

export default Btn;
