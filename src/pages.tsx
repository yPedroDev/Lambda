import { lazy } from "react";

const HomePage = lazy(() => import("@/pages/home/Home"));
const ErrorPage = lazy(() => import("@/pages/error/Error"));
const NoPageFound = lazy(() => import("@/pages/nopagefound/NoPageFound"));
const LandingPageLayout = lazy(() => import("@/pages/landing/Landing"));

export{
    HomePage,
    ErrorPage,
    NoPageFound,
    LandingPageLayout
}