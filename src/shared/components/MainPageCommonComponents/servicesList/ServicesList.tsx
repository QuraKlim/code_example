import styles from "./ServicesList.module.scss";
import electroIcon from "../../../icons/ElectoIcon.svg";
import waterIcon from "../../../icons/WaterIcon.svg";
import warmIcon from "../../../icons/WarmIcon.svg";
import IconComponent from "../../iconComponent/IconComponent";
import smallArrowIcon from "../../../icons/ArrowIconSmallGray.svg";
import yellowBtnIcon from "@/shared/icons/round_yellow_btn.svg";
import Link from "next/link";

import img from "@/public/images/services/1_use.png";
import img2 from "@/public/images/services/2_use.png";
import img3 from "@/public/images/services/3-use.png";
import Image from "next/image";
import clsx from "clsx";

const ServicesList = () => {
  const service_types = [
    { title: "Консалтинг", url: "/consulting" },
    { title: "Тех. присоединение", url: "/technological-connection" },
    { title: "Оптимизация затрат", url: "/cost-optimization" },
    { title: "Проектирование", url: "/design" },
    { title: "Строительномонтажные работы", url: "#" },
  ];

  const service_types_electo = [
    { title: "Консалтинг", url: "/consulting" },
    { title: "Тех. присоединение", url: "/technological-connection" },
    { title: "Оптимизация затрат", url: "/cost-optimization" },
    { title: "Проектирование", url: "/design" },
    { title: "Электромонтажные работы", url: "#" },
  ];

  return (
    <ul className={styles.services_list}>
      <li className={styles.service_list_elem_1}>
        <Link href={"/service/electricity-supply"}>
          <div className={styles.img_wrapper_1}>
            <Image
              className={styles.original_img}
              src={img.src}
              width={420}
              height={230}
              alt=""
            />

            <div className={styles.slide_btn}>
              <Image
                src={yellowBtnIcon.src}
                height={60}
                width={60}
                alt="button"
              />
            </div>
          </div>
        </Link>
        <div className={styles.title_and_icon}>
          <p className="text big">Электроснабжение</p>
          <IconComponent src={electroIcon} width={30} height={30} />
        </div>
        <p className="text regular">Включает 5 услуг</p>
        <div className={styles.service_types_1}>
          <ul className={styles.service_types_list}>
            {service_types_electo &&
              service_types_electo.map((type, i) => (
                <li key={type.title}>
                  <Link
                    className={styles.service_type_list_el + " link"}
                    href={`/service/electricity-supply${type.url}`}
                  >
                    <p
                      className={clsx(
                        "text regular",
                        i === 1 ? styles.hidden : styles.er_p
                      )}
                    >
                      {type.title}
                    </p>
                    {i == 1 ? (
                      <p
                        className={clsx(
                          "text regular",
                          styles.er_p,
                          styles.mobile_only
                        )}
                      >
                        {"Технологическое присоединение"}
                      </p>
                    ) : null}
                    <Image
                      src={smallArrowIcon}
                      width={24}
                      className={styles.small_arrow}
                      height={24}
                      alt={""}
                    />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </li>
      <li className={styles.service_list_elem_2}>
        <Link href={"/service/water-supply"}>
          <div className={styles.img_wrapper_2}>
            <Image
              className={styles.original_img}
              width={420}
              height={230}
              src={img2.src}
              alt=""
            />
            <div className={styles.slide_btn}>
              <Image
                src={yellowBtnIcon.src}
                height={60}
                width={60}
                alt="button"
              />
            </div>
          </div>
        </Link>
        <div className={styles.title_and_icon}>
          <p className="text big">Водоснабжение</p>
          <IconComponent src={waterIcon} width={30} height={30} />
        </div>
        <p className="text regular">Включает 5 услуг</p>
        <div className={styles.service_types_2}>
          <ul className={styles.service_types_list}>
            {service_types &&
              service_types.map((type, i) => (
                <li key={type.title}>
                  <Link
                    className={styles.service_type_list_el + " link"}
                    href={`/service/water-supply${type.url}`}
                  >
                    <p
                      className={clsx(
                        "text regular",
                        i === 1 ? styles.hidden : styles.er_p
                      )}
                    >
                      {type.title}
                    </p>
                    {i == 1 ? (
                      <p
                        className={clsx(
                          "text regular",
                          styles.er_p,
                          styles.mobile_only
                        )}
                      >
                        {"Технологическое присоединение"}
                      </p>
                    ) : null}

                    <Image
                      src={smallArrowIcon}
                      width={24}
                      className={styles.small_arrow}
                      height={24}
                      alt={""}
                    />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </li>
      <li className={styles.service_list_elem_3}>
        <Link href={"/service/heat-supply"}>
          <div className={styles.img_wrapper_3}>
            <Image
              className={styles.original_img}
              height={230}
              width={420}
              src={img3.src}
              alt=""
            />
            <div className={styles.slide_btn}>
              <Image
                src={yellowBtnIcon.src}
                height={60}
                width={60}
                alt="button"
              />
            </div>
          </div>
        </Link>
        <div className={styles.title_and_icon}>
          <p className="text big">Теплоснабжение</p>
          <IconComponent src={warmIcon} width={30} height={30} />
        </div>
        <p className="text regular">Включает 5 услуг</p>
        <div className={styles.service_types_3}>
          <ul className={styles.service_types_list}>
            {service_types &&
              service_types.map((type, i) => (
                <li key={type.title}>
                  <Link
                    className={styles.service_type_list_el + " link"}
                    href={`/service/heat-supply${type.url}`}
                  >
                    <p
                      className={clsx(
                        "text regular",
                        i === 1 ? styles.hidden : styles.er_p
                      )}
                    >
                      {type.title}
                    </p>
                    {i == 1 ? (
                      <p
                        className={clsx(
                          "text regular",
                          styles.er_p,
                          styles.mobile_only
                        )}
                      >
                        {"Технологическое присоединение"}
                      </p>
                    ) : null}
                    <Image
                      src={smallArrowIcon}
                      width={24}
                      className={styles.small_arrow}
                      height={24}
                      alt={""}
                    />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default ServicesList;
