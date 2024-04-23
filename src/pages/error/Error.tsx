import * as React from "react";
import { useNavigate } from "react-router-dom";
// const Image = React.lazy(() => import("../../components/utils/image/Image"));
import styled, { keyframes } from "styled-components";

const Typewriter = React.lazy(
  () => import("@/components/utils/typewrite/TypewriterComp")
);

import { NavbarRedu } from "@/reducers/components/Navbar/NavbarRedu";

const Button = React.lazy(() => import("@/components/button/Button"));
const BetterText = React.lazy(() => import("@/components/text/Text"));

const ErrorPage = () => {
  const navigate = useNavigate();
  const [stateNav, dispatchNav] = React.useReducer(NavbarRedu, {
    isMobile: false,
  });
  return (
    <>
      <div className="zcontainer">
        <div className="center">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc/30 backdrop:blur-sm dark:bg-gray-800">
            <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="space-y-2">
                <BetterText
                  text={
                    <Typewriter
                      text={
                        "Um erro desconhecido ocorreu, tente novamente, se o erro persistir então contate com o dono deste website."
                      }
                      typingSpeed={50}
                    />
                  }
                  className="text-2xl font-bold tracking-tighter"
                />
                <Button
                  isMobile={stateNav.isMobile}
                  clickable={true}
                  to={-1}
                  text={"Voltar"}
                />
                {/* <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  <div
                    className={
                      stateNav.isMobile
                        ? "flex-col lg:flex-row justify-center"
                        : "flex flex-wrap justify-center"
                    }
                  >
                    <Button
                      isMobile={stateNav.isMobile}
                      clickable={true}
                      to={-1}
                      text={"Voltar"}
                    />
                  </div>
                </p> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
