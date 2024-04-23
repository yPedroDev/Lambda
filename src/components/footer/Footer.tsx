import React, { useReducer } from "react";

import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { NavbarRedu } from "@/reducers/components/Navbar/NavbarRedu";

const Image = React.lazy(() => import("@/components/utils/image/Image"));

export default function Footer() {
  const navigate = useNavigate();
  const [stateNav, dispatchNav] = React.useReducer(NavbarRedu, {
    isMobile: false,
  });
  //   const currentSite = window.location.toString();
  return (
    <>
      <footer className="bg-zinc-900/30 backdrop-blur-lg h-48 text-gray-400 py-8 sm:py-12 lg:py-16">
        <div className="md:flex md:justify-between container mx-auto px-4 items-start sm:px-12 py-7 lg:px-8 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
          <div className="flex space-x-4">
            <Image
              width={58}
              height={58}
              alt="A logo do site (meio obvio)"
              src="https://media.discordapp.net/attachments/1028750792640954368/1229857104601284618/Sem_titulo.png?ex=663134af&is=661ebfaf&hm=1541752fa06135541f141132d9aefcc105e0e7ba0a4d285e357abce459fac918&=&format=webp&quality=lossless&width=464&height=477"
            ></Image>
            <div className="flex-row gap-2" style={{userSelect: 'none'}}>
              <p>Pedro</p>
              <div className="divider mt-0 mb-0"/>
              <p>A.B</p>
            </div>
            {/* <p className="flex gap-4 items-center flex-wrap text-slate-400">
              Feito por
              <div className="border-white-500 border-2 rounded-full">
                <Avatar
                  onClick={() =>
                    window.open(
                      "https://media.discordapp.net/attachments/1028750792640954368/1225839842689286275/image.png?ex=66229751&is=66102251&hm=e6eefaebdae9c1eac29375f56909a365e20c87c40d04cba9c869bc6dd0221c3d&=&format=webp&quality=lossless&width=317&height=391",
                      "_blank"
                    )
                  }
                >
                  <AvatarImage
                    src="https://media.discordapp.net/attachments/1028750792640954368/1225839842689286275/image.png?ex=66229751&is=66102251&hm=e6eefaebdae9c1eac29375f56909a365e20c87c40d04cba9c869bc6dd0221c3d&=&format=webp&quality=lossless&width=317&height=391"
                    alt="Pedro Albino Barbosa"
                  />
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
              </div>
            </p> */}
          </div>
          {/* <nav className="flex items-center space-x-4">
            <Link className="hover:text-gray-300 transition-colors" href="#">
              About
            </Link>
            <Link className="hover:text-gray-300 transition-colors" href="#">
              Products
            </Link>
            <Link className="hover:text-gray-300 transition-colors" href="#">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link className="hover:text-gray-300 transition-colors" href="#">
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link className="hover:text-gray-300 transition-colors" href="#">
              <FacebookIcon className="h-5 w-5" />
            </Link>
            <Link className="hover:text-gray-300 transition-colors" href="#">
              <InstagramIcon className="h-5 w-5" />
            </Link>
          </div> */}
        </div>
      </footer>
    </>
  );
}
