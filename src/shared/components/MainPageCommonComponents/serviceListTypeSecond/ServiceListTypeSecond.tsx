import styles from "./ServiceListTypeSecond.module.scss";
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

const ServiceListTypeSecond = () => {
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
          </div>
        </Link>
        <div className={styles.title_and_icon}>
          <p className="text regular">Электроснабжение</p>
          <p className="text regular light">5 услуг</p>
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
          </div>
        </Link>
        <div className={styles.title_and_icon}>
          <p className="text regular">Водоснабжение</p>
          <p className="text regular light"> 5 услуг</p>
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
          </div>
        </Link>
        <div className={styles.title_and_icon}>
          <p className="text regular">Теплоснабжение</p>
          <p className="text light">5 услуг</p>
        </div>
      </li>
    </ul>
  );
};

export default ServiceListTypeSecond;
