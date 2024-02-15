import React from "react";
import styles from "./HeaderBottom.module.scss";
import clsx from "clsx";
import Link from "next/link";
import HeaderButton from "../HeaderButton/HeaderButton";
import IconComponent from "../../iconComponent/IconComponent";
import { HeaderServicePopup } from "../HeaderSevicePopup/HeaderServicePopup";
import HeaderMenuIcon from "../HeaderMenuIocn/HeaderMenuIcon";

export interface IHeaderBottomProps {
  path: string;
  scrollVal: number;
  hasScrolledDown: boolean;
  menuVisible: boolean;
  textColor: string;
  serviceMenuVisibe: boolean;
  setServiceMenuVisible: Function;
}

interface IHeaderLink {
  title: string;
  link_ref: string;
}

const links: IHeaderLink[] = [
  {
    title: "Завершённые проекты",
    link_ref: "/projects",
  },
  {
    title: "О компании",
    link_ref: "/about",
  },
  {
    title: "Блог",
    link_ref: "/blog",
  },
  {
    title: "Контакты",
    link_ref: "/contacts",
  },
];

export const HeaderBottom = ({
  path,
  scrollVal,
  setServiceMenuVisible,
  textColor,
  serviceMenuVisibe,
}: IHeaderBottomProps) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={clsx(
          styles.navbar_wrapper,
          path !== "/" || scrollVal > 650 ? styles["pa-20"] : styles["pa-30"]
        )}
      >
        <div className={styles.nav_container}>
          <nav className={styles.navbar}>
            <ul className={styles.links_list}>
              <li>
                <HeaderServicePopup
                  textColor={textColor}
                  setServiceMenuVisible={setServiceMenuVisible}
                  serviceMenuVisibe={serviceMenuVisibe}
                />
              </li>
              {links.map((link) => (
                <li style={{ color: textColor }} key={link.title}>
                  <div className={styles.link_wrapper}>
                    <Link className={"link"} href={link.link_ref}>
                      <p className="text regular">{link.title}</p>
                    </Link>
                    <div
                      className={styles.underline}
                      style={{
                        backgroundColor: textColor,
                      }}
                    ></div>
                  </div>
                </li>
              ))}
              <li
                style={{
                  width: "45%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <HeaderButton textColor={textColor} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
