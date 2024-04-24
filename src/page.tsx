import React from 'react';

const HomePage = React.lazy(() => import("@/pages/home/Home"));
const ErrorPage = React.lazy(() => import("@/pages/error/Error"));
const NoPageFound = React.lazy(() => import("@/pages/nopagefound/NoPageFound"));
const LandingPageLayout = React.lazy(() => import("@/pages/landing/Landing"));

export {
    HomePage,
    ErrorPage,
    NoPageFound,
    LandingPageLayout
}