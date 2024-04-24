import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import { DarkModeProvider } from "@/context/theme/ThemeContext";
import { Toaster } from "@/components/ui/toaster"

// [ Pages ] \\

import { HomePage, ErrorPage, NoPageFound } from "@/page";

const LandingPageLayout = React.lazy(() => import("@/pages/landing/Landing")); // Fixed

// [ Others ] \\

const Loader = React.lazy(() => import("@/components/loader/Loader"));

import "@/assets/css/main.css";
import "@/globals.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <NoPageFound />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <React.Suspense
      fallback={
        <Loader
          failureMessage="Falha ao carregar!"
          canRetry={true}
          onComplete={() => console.log("Completo o carregamento!")}
          onErrored={() => console.log("Erro ao completar o carregamento!")}
        ></Loader>
      }
    >
      <DarkModeProvider>
        <RouterProvider router={router} />
        <Toaster/>
      </DarkModeProvider>
    </React.Suspense>
  </React.StrictMode>
);
