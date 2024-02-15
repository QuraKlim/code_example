import type { Metadata } from "next";
import "./styles/index.scss";

import localFont from "next/font/local";
import Header from "@/shared/components/header/Header";
import Footer from "@/shared/components/footer/Footer";
import SmoothScroll from "@/shared/components/smoothScroll/SmoothScroll";
import { SkeletonTheme } from "react-loading-skeleton";

const rootUi = localFont({
  src: [
    {
      path: "../shared/fonts/rootui-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../shared/fonts/rootui-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../shared/fonts/rootui-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Megavolt",
  description: "work in progress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <SmoothScroll>
        <SkeletonTheme baseColor="#fafafa" highlightColor="#e8e8e8">
          <body className={rootUi.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </SkeletonTheme>
      </SmoothScroll>
    </html>
  );
}
