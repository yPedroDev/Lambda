import * as React from "react";
import { useNavigate } from "react-router-dom";
const Image = React.lazy(() => import("@/components/utils/image/Image"));
const Typewriter = React.lazy(
  () => import("@/components/utils/typewrite/TypewriterComp")
);

import { NavbarRedu } from "@/reducers/components/Navbar/NavbarRedu";

const BetterText = React.lazy(() => import("@/components/text/Text"));
const Btn = React.lazy(() => import("@/components/button/Button"));

const NoPageFound = () => {
  const navigate = useNavigate();
  const [stateNav, dispatchNav] = React.useReducer(NavbarRedu, {
    isMobile: false,
  });
  return (
    <>
      <div className="zcontainer">
        <div className="center">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
            <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="space-y-2">
                <h1 className="avatar w-16">
                  <Image
                    alt={'"Detetive melhor que sherlock holmes"'}
                    src="https://media.discordapp.net/attachments/1028750792640954368/1227244324358586429/image-removebg-preview.png?ex=6627b358&is=66153e58&hm=fa468cdf734e5db096fffaf2c51176cbf77134044c1199e18b4fcb69a8c7bbba&=&format=webp&quality=lossless&width=572&height=582"
                    width={58}
                    height={58}
                  />
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  <div
                    className={
                      stateNav.isMobile
                        ? "flex-col lg:flex-row justify-center"
                        : "flex-row justify-center"
                    }
                  >
                    <BetterText
                      text={
                        <Typewriter
                          text={"🔎..Oops, está pagina não foi encontrada!"}
                          typingSpeed={50}
                        />
                      }
                      className="text-2xl font-bold tracking-tighter"
                    />
                  </div>
                  <Btn
                    isMobile={stateNav.isMobile}
                    clickable={true}
                    to={-1}
                    text={"Voltar"}
                  />
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default NoPageFound;
