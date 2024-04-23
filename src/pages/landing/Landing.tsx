import React, { Suspense, useEffect } from "react";

import { Outlet } from "react-router";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { NavbarRedu, NavTypes } from "@/reducers/components/Navbar/NavbarRedu";
import { DarkModeProvider, useDarkMode } from "@/context/theme/ThemeContext";

import { useLocalStorage } from "@/hooks/storage";

const Top = React.lazy(() => import("@/components/bottomtop/Top"));
const Bottom = React.lazy(() => import("@/components/bottomtop/Bottom"));
const Loader = React.lazy(() => import("@/components/loader/Loader"));

const LandingPageLayout = () => {
  const [stateNav, dispatchNav] = React.useReducer(NavbarRedu, {
    isMobile: false,
  });
  const { darkMode } = useDarkMode();
  return (
    <>
      <LazyLoadComponent>
        <div
          className={
            darkMode
              ? "dark text-foreground bg-background"
              : "light text-foreground bg-background"
          }
        >
          <Suspense
            fallback={
              <Loader
                failureMessage="Falha ao carregar!"
                canRetry={true}
                onComplete={() => console.log("Completo o carregamento!")}
                onErrored={() =>
                  console.log("Erro ao completar o carregamento!")
                }
              ></Loader>
            }
          >
            <Top />
          </Suspense>
          <div
            className={
              darkMode
                ? "bg-no-repeat bg-cover bg-[url('https://media.discordapp.net/attachments/1028750792640954368/1230247127347757087/image.png?ex=66329fec&is=66202aec&hm=9a1a8477a33b0a4f442f803551a3c423ca1ac24e4d39ee5dceb44032dad59cd7&=&format=webp&quality=lossless&width=750&height=421')]"
                : "bg-no-repeat bg-cover bg-[url('https://media.discordapp.net/attachments/1028750792640954368/1229923397304324097/wMyC7HNgJWbgAAAABJRU5ErkJggg.png?ex=6631726c&is=661efd6c&hm=8eac2d4798b14703d8c0caac9e424c4532d2736c054ebf4126ebbafb022efe50&=&format=webp&quality=lossless&width=688&height=380')]"
            }
          >
            <Outlet />
            <Suspense
              fallback={
                <Loader
                  failureMessage="Falha ao carregar!"
                  canRetry={true}
                  onComplete={() => console.log("Completo o carregamento!")}
                  onErrored={() =>
                    console.log("Erro ao completar o carregamento!")
                  }
                ></Loader>
              }
            >
              <Bottom />
            </Suspense>
          </div>
        </div>
      </LazyLoadComponent>
    </>
  );
};

export default LandingPageLayout;
