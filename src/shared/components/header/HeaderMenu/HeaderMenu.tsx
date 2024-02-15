import Link from "next/link";
import styles from "./HeaderMenu.module.scss";
import IconComponent from "../../iconComponent/IconComponent";
import smallArrowIcon from "../../../icons/ArrowIconSmallGray.svg";
import * as Accordion from "@radix-ui/react-accordion";
import img1 from "@/public/images/services/1_use.png";
import img2 from "@/public/images/services/2_use.png";
import img3 from "@/public/images/services/3-use.png";

import Image from "next/image";
import Popup from "../../popup/popup";

interface IHeaderMenu {
  path: string;
}

const img = [
  {
    img: img1,
    description: "Электроснабжение",
    url: "/service/electricity-supply",
  },
  {
    img: img2,
    description: "Водоснабжение",
    url: "/service/water-supply",
  },

  {
    img: img3,
    description: "Теплоснабжение",
    url: "/service/heat-supply",
  },
];
const links = [
  { name: "Завершенные проекты", url: "/projects" },
  { name: "О компании", url: "/about" },
  { name: "Блог", url: "/blog" },
  { name: "Контакты", url: "/contacts" },
];

const HeaderMenu = ({ path }: IHeaderMenu) => {
  return (
    <div className={styles.outer_wrap}>
      <div className={styles.inner_wrap}>
        <div className={styles.accr_wrap}>
          <div className={styles.accr_el}>
            <Accordion.Root type="single" collapsible className="w-100">
              <Accordion.Item value={"item-"}>
                <Accordion.Header>
                  <Accordion.Trigger
                    className={"trigger opened w-100 " + styles.accordeon_item}
                  >
                    <div>
                      <div style={{ padding: "20px 0" }}>
                        <div className={styles.accordeon_text}>
                          <div className={styles.accr_head}>
                            <p className="text big">Услуги</p>
                            <div
                              className={
                                "flex center " + styles.accordeon_trigger
                              }
                            >
                              <div
                                className={
                                  "relative " + styles.accordeon_icon_wrapper
                                }
                              >
                                <div className={styles.minus}></div>
                                <div className={styles.plus}></div>
                              </div>
                            </div>
                          </div>
                          <Accordion.Content
                            className={styles.accordeon_content}
                          >
                            <div className={styles.accrodeon_content_el}>
                              {img.map((el) => (
                                <div
                                  key={el.description}
                                  className={styles.content_el}
                                >
                                  <Link href={el.url}>
                                    <div className={styles.img_wrapper}>
                                      <Image
                                        src={el.img}
                                        alt="@"
                                        height={83}
                                        width={150}
                                      />
                                    </div>
                                  </Link>
                                  <div className={styles.accrodeon_el_text}>
                                    <p className="text regular">
                                      {el.description}
                                    </p>
                                    <p className="text regular light">
                                      5 услуг
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </Accordion.Content>
                        </div>
                      </div>
                    </div>
                    <ul className={styles.link_ul}>
                      {links.map((link) => (
                        <li key={link.name} className={styles.li_el}>
                          <div>
                            <p className="text big">
                              <Link href={link.url} className="link">
                                {link.name}
                              </Link>
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Trigger>
                </Accordion.Header>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>
      </div>

      <Popup>
        <div className={styles.btn}>
          <div className="link">
            <p className="text regular">Получить консультацию</p>
          </div>
          <Image
            alt="arrow"
            className={styles.icon_arr}
            src={smallArrowIcon}
            width={24}
            height={24}
          />
        </div>
      </Popup>
    </div>
  );
};

export default HeaderMenu;
