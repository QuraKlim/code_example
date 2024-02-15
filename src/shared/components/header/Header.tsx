"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import { HeaderBottom } from "./HeaderBottom/HeaderBottom";

const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [serviceMenuVisibe, setServiceMenuVisible] = useState(false);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [scrollVal, setScrollVal] = useState(0);
  const path = usePathname();

  const setMenu = () => {
    setMenuVisible((menu) => !menu);
  };

  const setTextColor = () => {
    return path === "/" && !hasScrolledDown && !serviceMenuVisibe
      ? "#fff"
      : "#000";
  };

  useEffect(() => {
    setServiceMenuVisible(false);
    setMenuVisible(false);
  }, [path]);

  useEffect(() => {
    const changeHeader = () => {
      if (window.scrollY >= 10) {
        setHasScrolledDown(true);
      }
      if (window.scrollY > 400) {
        setIsHeaderHidden(true);
        setMenuVisible(false);
      }
      if (scrollVal > window.scrollY) {
        setIsHeaderHidden(false);
      }
      if (window.scrollY === 0) {
        setHasScrolledDown(false);
      }
      setScrollVal(window.scrollY);
    };

    window.addEventListener("scroll", changeHeader);
    return () => window.removeEventListener("scroll", changeHeader);
  }, [hasScrolledDown, scrollVal]);

  return (
    <>
      <div id="top"></div>
      <header
        className={clsx(
          styles.header,
          hasScrolledDown ? styles.colorFilled : styles.colorTransparent,
          isHeaderHidden ? styles.hidden : ""
        )}
      >
        <HeaderTop
          menuVisible={menuVisible}
          scrollVall={path === "/" ? scrollVal : 650}
          setMenu={setMenu}
          textColor={setTextColor()}
        />
        <HeaderBottom
          serviceMenuVisibe={serviceMenuVisibe}
          path={path}
          scrollVal={scrollVal}
          hasScrolledDown={hasScrolledDown}
          menuVisible={menuVisible}
          setServiceMenuVisible={setServiceMenuVisible}
          textColor={setTextColor()}
        />
      </header>
      <aside
        className={clsx(
          styles.menu,
          menuVisible ? styles.menu_visible : styles.menu_hidden,
          path === "/" && scrollVal < 650 ? styles["pa-30"] : styles["pa-20"]
        )}
      >
        <HeaderMenu path={path} />
      </aside>
      <div
        className={
          serviceMenuVisibe ? styles.background : styles.background_hidden
        }
      ></div>
    </>
  );
};

export default React.memo(Header);
