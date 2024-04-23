import React from "react";
// import styled, { keyframes } from "styled-components";
import { useDarkMode } from "@/context/theme/ThemeContext";
import { twMerge } from "tailwind-merge";
import { Switch } from "@/components/ui/switch";

import { NavbarRedu, NavTypes } from "@/reducers/components/Navbar/NavbarRedu";
import { useToast } from "@/components/ui/use-toast";

const Btn = React.lazy(() => import("@/components/button/Button"));
const Typewriter = React.lazy(
  () => import("@/components/utils/typewrite/TypewriterComp")
);

const Image = React.lazy(() => import("@/components/utils/image/Image"));

// const cardKeyfr = keyframes`
//   from{
//     transform: rotate(0deg);
//   }
//   to{
//     transform: rotate(360deg);
//   }
// `

// var Projectsection = styled.section`
//   background-color: #191919;
//   width: 300px;
//   height: 200px;
//   border-radius: 25px;
//   margin: 38px;
//   overflow: hidden;
//   content: "";

//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   padding: 1em;
//   transition: all 0.2s linear;
//   &:hover {
//     box-shadow: 0 -1vmin 2vmin orange inset, 0 1vmin 2vmin orange inset,
//       0 -1vmin 5vmin orange inset;

//     filter: drop-shadow(0 0 1vmin DarkOrange)
//       drop-shadow(0 1vmin 2vmin DarkOrange)
//       drop-shadow(2vmin -1vmin 1vmin DarkOrange) drop-shadow(0 0 7vmin orange);
//   }
//   // &:before{
//   //   position: absolute;
//   //   background: conic-gradient(transparent 270deg, white, transparent);
//   //   top: 50%;
//   //   left: 50%;
//   //   transform: translate(-50%, -50%);
//   //   aspect-ratio: 1;
//   //   width: 100%;
//   // }
//   // &:after{
//   //   content: '';
//   //   background: inherit;
//   //   border-radius: inherit;
//   //   position: absolute;
//   //   inset: var(--offset);
//   //   height: calc(100% - 2 * var(--offset));
//   //   width: calc(100% - 2 * var(--offset));

//   // }
// `;

const Home = () => {
  const sectionsArrayCount = ["A", "B", "C", "D"];
  const [stateNav, dispatchNav] = React.useReducer(NavbarRedu, {
    isMobile: false,
  });
  const { darkMode, toggleDark } = useDarkMode();
  const { toast } = useToast();

  // const [stateHome, dispatchHome] = React.useReducer(HomeRedu, {
  //   count: 0,
  // });

  return (
    <>
      <div className="zcontainer">
        <div className="center">
          <div className="relative overflow-hidden py-24 lg:py-32">
            {/* Gradients */}
            {/* <div
              aria-hidden="true"
              className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
            >
              <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
              <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
            </div> */}
            {/* End Gradients */}
            <div className="relative z-10">
              <div className="container flex flex-col items-center text-center justify-center sm:justify-center py-10 lg:py-16">
                <div className="max-w-2xl text-center mx-auto">
                  <div className="avatar">
                    <div className="w-24 rounded floatingImage">
                      <Image
                        alt="Logo do servidor."
                        src="https://media.discordapp.net/attachments/1028750792640954368/1229857104601284618/Sem_titulo.png?ex=663134af&is=661ebfaf&hm=1541752fa06135541f141132d9aefcc105e0e7ba0a4d285e357abce459fac918&=&format=webp&quality=lossless&width=464&height=477"
                      />
                    </div>
                  </div>

                  <div className="md-5" />
                  <div className="m-1" />

                  <div className="title">
                    <Typewriter text={"Lambda"} typingSpeed={50} />
                  </div>
                  <p style={{ color: "black" }} className="py-6">
                    <a>
                      <div className="divider" />
                      <span className="text-white-500">
                        Servidor{" "}
                        <span className="text-orange-500">confortavel</span>{" "}
                        para,
                      </span>
                      <div className="m-1" />
                      <b>
                        <span className="text-red-500">construir</span>,{" "}
                        <span className="text-yellow-400">aventurar</span> e
                        fazer <span className="text-emerald-400">amigos</span>.
                      </b>
                    </a>
                  </p>
                  {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
                <div>
                  <h5 style={{ userSelect: "none", fontSize: 50 }}>↜</h5>
                  <div
                    className={
                      "bg-transparent rounded border-transparent transition-all border-white/35 hover:border-2 sm:justify-center justify-center items-center duration-4 w-22 text-center"
                    }
                  >
                    <div className="dark:border-zinc-800 rounded-full">
                      IP: lambda.bed.ovh Port: 25697
                    </div>
                  </div>
                  <div className="m-5">
                    <div id="darkToggle">
                      <p>DarkMode</p>
                      <Switch
                        checked={darkMode}
                        onCheckedChange={() => {
                          toggleDark();
                          toast({
                            title: "Toggled dark mode!",
                            description: "Friday, February 10, 2023 at 5:57 PM",
                          });
                        }}
                        id="theme-changer"
                      />
                    </div>
                  </div>
                </div>

                {/* End Buttons */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
