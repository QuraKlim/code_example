import Link from "next/link";
import styles from "./Footer.module.scss";
import footerLogo from "@/shared/icons/logo-mega-header.svg";
import ScrollTopBtn from "../ScrollTopBtn/ScrollTopBtn";
import Image from "next/image";

interface ILink {
  title: string;
  href: string;
}

const Footer = () => {
  const Services = [
    { title: "Консалтинг", url: "/consulting" },
    { title: "Оптимизация затрат", url: "/cost-optimization" },
    { title: "Проектирование", url: "/design" },
    { title: "Электромонтажные работы", url: "#" },
    { title: "Тех.присоединение", url: "/technological-connection" },
  ];

  const Links: ILink[] = [
    { title: "Заверешнные \nпроекты", href: "/projects" },
    { title: "О компании", href: "/about" },
    { title: "Блог", href: "/blog" },
    { title: "Гайды", href: "/guides" },
    { title: "Контакты", href: "/contacts" },
  ];

  return (
    <footer className={"container " + styles.footer}>
      <div className={styles.gloab_wrapper}>
        <hr />
        <div className={styles.services}>
          <ul className={styles.services_list}>
            <li>
              <div className={styles.list_wrapper}>
                <Link className={styles.footer_logo_wrap} href={"/"}>
                  <Image
                    className={styles.footer_logo}
                    src={footerLogo}
                    height={40}
                    alt="company-logo"
                    width={180}
                  />
                </Link>
                <ul className={styles.logo_links}>
                  {Links.map((link) => (
                    <li key={link.title}>
                      <Link className={"link"} href={link.href}>
                        <p
                          className={
                            "text regular light " + styles.logo_links_text
                          }
                        >
                          {link.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <div className={styles.list_wrapper}>
                <div>
                  <p style={{ verticalAlign: "top" }} className="text regular">
                    Электроснабжение
                  </p>
                </div>
                <ul className={styles.services_types_list}>
                  {Services &&
                    Services.map((ser) => (
                      <li key={ser.title}>
                        <Link
                          href={`/service/electricity-supply/${ser.url}`}
                          className="link regular text light"
                        >
                          {ser.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </li>
            <li>
              <div className={styles.list_wrapper}>
                <p className="text regular">Водоснабжение</p>
                <ul className={styles.services_types_list}>
                  {Services &&
                    Services.map((ser) => (
                      <li key={ser.title}>
                        <Link
                          href={`/service/water-supply/${ser.url}`}
                          className="link regular text light"
                        >
                          {ser.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </li>
            <li>
              <div className={styles.list_wrapper}>
                <p className="text regular">Теплоснабжение</p>
                <ul className={styles.services_types_list}>
                  {Services &&
                    Services.map((ser) => (
                      <li key={ser.title}>
                        <Link
                          href={`/service/heat-supply/${ser.url}`}
                          className="link regular text light"
                        >
                          {ser.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <hr />
        <div className={styles.credentials}>
          <ul className={styles.credentials_list}>
            <li>
              <ScrollTopBtn />
            </li>
            <li>
              <div className={styles.list_elem}>
                <p className="regular text">Адрес</p>
                <p className="regular text light">
                  117246, г. Москва, Научный <br /> проезд, д. 10, пом. 34 (503
                  А)
                </p>
              </div>
            </li>
            <li>
              <div className={styles.list_elem}>
                <p className="regular text">Режим работы</p>
                <p className="regular text light">9:00 – 19:00 Пн-Пт</p>
              </div>
            </li>
            <li>
              <div className={styles.list_elem}>
                <p className="regular text">
                  {"Copyright © Мегавольт 2023, \n"}
                  <span style={{ textDecoration: "underline" }}>
                    Fractal Web
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
