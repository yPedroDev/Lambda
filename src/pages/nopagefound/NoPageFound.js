"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Image = React.lazy(() => Promise.resolve().then(() => __importStar(require("@/components/utils/image/Image"))));
const Typewriter = React.lazy(() => Promise.resolve().then(() => __importStar(require("@/components/utils/typewrite/TypewriterComp"))));
const NavbarRedu_1 = require("@/reducers/components/Navbar/NavbarRedu");
const BetterText = React.lazy(() => Promise.resolve().then(() => __importStar(require("@/components/text/Text"))));
const Btn = React.lazy(() => Promise.resolve().then(() => __importStar(require("@/components/button/Button"))));
const NoPageFound = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [stateNav, dispatchNav] = React.useReducer(NavbarRedu_1.NavbarRedu, {
        isMobile: false,
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "zcontainer" },
            React.createElement("div", { className: "center" },
                React.createElement("section", { className: "w-full py-12 md:py-24 lg:py-32 bg-transparent" },
                    React.createElement("div", { className: "container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-4" },
                        React.createElement("div", { className: "space-y-2" },
                            React.createElement("h1", { className: "avatar w-16" },
                                React.createElement(Image, { alt: '"Detetive melhor que sherlock holmes"', src: "https://media.discordapp.net/attachments/1028750792640954368/1227244324358586429/image-removebg-preview.png?ex=6627b358&is=66153e58&hm=fa468cdf734e5db096fffaf2c51176cbf77134044c1199e18b4fcb69a8c7bbba&=&format=webp&quality=lossless&width=572&height=582", width: 58, height: 58 })),
                            React.createElement("p", { className: "max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400" },
                                React.createElement("div", { className: stateNav.isMobile
                                        ? "flex-col lg:flex-row justify-center"
                                        : "flex-row justify-center" },
                                    React.createElement(BetterText, { text: React.createElement(Typewriter, { text: "🔎..Oops, está pagina não foi encontrada!", typingSpeed: 50 }), className: "text-2xl font-bold tracking-tighter" })),
                                React.createElement(Btn, { isMobile: stateNav.isMobile, clickable: true, to: -1, text: "Voltar" })))))))));
};
exports.default = NoPageFound;
