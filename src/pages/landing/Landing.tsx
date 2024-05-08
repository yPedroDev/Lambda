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
              ? "dark text-foreground bg-background bg-no-repeat bg-cover bg-[url('https://firebasestorage.googleapis.com/v0/b/lambda-5409b.appspot.com/o/website%2Fdarkbg.webp?alt=media&token=40769c2d-b33d-4eb8-aab0-875d90c335dd')]"
              : "light text-foreground bg-background bg-no-repeat bg-cover bg-[url('https://firebasestorage.googleapis.com/v0/b/lambda-5409b.appspot.com/o/website%2Flightbg.webp?alt=media&token=2acd2f6e-4b7d-42e6-bfee-e964ff8aa1f9')]"
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
          <div className="bg-transparent">
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
