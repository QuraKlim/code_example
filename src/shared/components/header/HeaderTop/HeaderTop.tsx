import Image from "next/image";
import styles from "./HeaderTop.module.scss";
import headerLogo from "@/shared/icons/logo-mega-header.svg";
import clsx from "clsx";
import Link from "next/link";
import HeaderMenuIcon from "../HeaderMenuIocn/HeaderMenuIcon";

const credentialsInfo = [
  "Пн-Пт 10:00 – 19:00",
  "+7(495) 120 01-08",
  "info@prestizh-group.ru",
];

export interface IHeaderTopProps {
  textColor: string;
  setMenu: Function;
  scrollVall: number;
  menuVisible: boolean;
}

const HeaderTop = ({
  textColor,
  setMenu,
  scrollVall,
  menuVisible,
}: IHeaderTopProps) => {
  return (
    <div
      className={clsx(
        styles.wrapper,
        textColor === "#000" ? styles.wrapper_border_dark : ""
      )}
    >
      <nav
        className={clsx(
          styles.wrapper_navbar,
          scrollVall >= 650 ? styles["pa-10"] : styles["pa-20"]
        )}
      >
        <Link style={{ display: "flex" }} href={"/"}>
          <Image
            src={headerLogo}
            alt="mega-volt-company-icon"
            width={180}
            height={40}
            className={styles.wrapper_logo}
          />
        </Link>
        <ul className={styles.wrapper_credentials_list}>
          {credentialsInfo &&
            credentialsInfo.map((info, i) => (
              <li
                key={i}
                style={{ color: i ? textColor : "" }}
                className={clsx(
                  `text regular ${!i ? "dark" : ""}`,
                  styles.wrapper_credentials_elem
                )}
              >
                {!i ? (
                  info
                ) : (
                  <Link
                    href={
                      i === 1
                        ? "tel:+74951200108"
                        : "mailto:info@megavolt-group.com"
                    }
                  >
                    {info}
                  </Link>
                )}
              </li>
            ))}
        </ul>
        <HeaderMenuIcon
          onClick={() => {
            setMenu();
          }}
          textColor={textColor}
          menuVisible={menuVisible}
        />
      </nav>
    </div>
  );
};

export default HeaderTop;
