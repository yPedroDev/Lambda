import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Disclosure, Menu } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { useDarkMode } from "@/context/theme/ThemeContext";
import { NavbarRedu, NavTypes } from "@/reducers/components/Navbar/NavbarRedu";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Image = React.lazy(() => import("@/components/utils/image/Image"));
const Btn = React.lazy(() => import("@/components/button/Button"));

const navigation = [
  { name: "projetos", to: "/projetos", current: false },
  { name: "teste", to: "/teste", current: false },
];

const MyNavbar = () => {
  const navigate = useNavigate();
  const [stateNav, dispatchNav] = React.useReducer(NavbarRedu, {
    isMobile: false,
  });
  const { darkMode } = useDarkMode();

  const handleWindowSizeChange = () => {
    if (window.innerWidth <= 680) {
      dispatchNav({ type: NavTypes.SET_MOB, payload: true });
    } else {
      dispatchNav({ type: NavTypes.SET_MOB, payload: false });
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    if (window.performance) {
      if (performance.navigation.type == 1) {
        handleWindowSizeChange();
      }
    }
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
      // window.removeEventListener("beforeunload", handleWindowSizeChange);
    };
  }, []);
  return (
    <>
      <Disclosure
        as="nav"
        style={{ zIndex: 100 }}
        className="backdrop-blur-sm bg-zinc-900/30 fixed w-full"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* Navegação para mobile */}
                <div className="absolute transition-all duration-100 left-0 items-center sm:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="mr-28 w-8">
                      <ChevronDownIcon className="m-2.5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="rounded text-center mt-5"
                      style={{ userSelect: "none", zIndex: 200 }}
                    >
                      <DropdownMenuLabel>Links</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {navigation.map((item) => (
                        <DropdownMenuItem
                          className="rounded-full"
                          onClick={() => navigate(item.to)}
                          key={item.to}
                        >
                          <div className="text-center">{item.name}</div>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {/* Navegação normal */}
                <div className="items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center sm:justify-center">
                    {!stateNav.isMobile ? (
                      <>
                        <button
                          className="btn btn-ghost m-1 hover:bg-transparent"
                          style={{
                            fontWeight: "bold",
                            width: "108px",
                            height: "70px",
                          }}
                        >
                          <Image
                            width={403}
                            height={403}
                            alt="A logo do site (ta obvio de mais né -_-)"
                            src="https://media.discordapp.net/attachments/1028750792640954368/1231719719791235224/Sem_titulo.png?ex=6637fb61&is=66258661&hm=9a6dc6a80480a479f45ac2fe43ba7f767c1cddf5489c7d03dbd5964811fdd858&=&format=webp&quality=lossless&width=845&height=276"
                          />
                        </button>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="flex flex-1 sm:justify-center justify-center mr-24">
                  <div className="items-center sm:items-stretch bg-zinc-900/30 backdrop:blur-md rounded-full">
                    {navigation.map((item) => (
                      <Btn
                        key={item.name}
                        text={item.name}
                        color="default"
                        isMobile={stateNav?.isMobile}
                        clickable={true}
                        to={
                          item.to != null || item.to != "" ? item.to : undefined
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default MyNavbar;
