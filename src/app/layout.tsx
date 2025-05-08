"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../styles/globals.css";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import { PropsWithChildren } from "react";
import { cn } from "../lib/utils";
// import { ApolloProvider } from "@apollo/client";
// import { getApolloClient } from "@/lib/apollo-client";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

// const client = getApolloClient();

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "font-manrope min-h-full grid grid-rows-[auto,1fr,auto]",
          manrope.variable
        )}
      >
        <Nav />
        {/* <ApolloProvider client={client}>{children}</ApolloProvider> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
