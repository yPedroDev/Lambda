import React, { useReducer } from "react";

import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { NavbarRedu } from "@/reducers/components/Navbar/NavbarRedu";
import { AnimatedTooltip } from "@/components/ui/aceternity/3DTooltip";

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
              style={{zIndex: 200}}
              alt="A logo do site (meio obvio)"
              src="https://firebasestorage.googleapis.com/v0/b/lambda-5409b.appspot.com/o/website%2FLogoIcon.webp?alt=media&token=c33f3d3e-d125-40fe-8526-604ea8d33d6d"
            />
            <div className="flex flex-row items-center justify-center" style={{zIndex: 50}}>
              <AnimatedTooltip
                text={"Dono do servidor"}
                tid={1}
                children={
                  <>
                    <div
                      className="flex-row gap-2"
                      style={{ userSelect: "none" }}
                    >
                      <p>Pedro</p>
                      <div className="divider mt-0 mb-0" />
                      <p>A.B</p>
                    </div>
                  </>
                }
              />
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
