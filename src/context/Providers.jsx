"use client";
export const dynamic = "force-dynamic";

import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "../app/api/uploadthing/core";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Toaster position="top-center" reverseOrder={false} />
      <NextSSRPlugin
        routerConfig={extractRouterConfig(ourFileRouter)}
      />
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
};

export default Providers;
