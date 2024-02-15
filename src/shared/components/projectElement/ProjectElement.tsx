import IconComponent from "../iconComponent/IconComponent";
import styles from "./ProjectElement.module.scss";
import arrowLeft from "../../icons/arrowLetf.svg";
import icon1 from "../../icons/slider_icon_1.svg";
import icon2 from "../../icons/slider_icon_2.svg";
import Image from "next/image";
import Link from "next/link";

interface IProjectElementProps {
  src: string;
  jobCase?: string;
  object?: string;
  workType?: string;
  isVertical?: boolean;
  href?: string;
}

const ProjectElement: React.FC<IProjectElementProps> = ({
  src,
  jobCase = "",
  isVertical = false,
  href = "#",
  object = "",
  workType = "",
}: IProjectElementProps) => {
  return (
    <Link
      href={href}
      className={`${styles.local_con} ${isVertical && styles.vertical}`}
    >
      <div className={styles.img_wrap}>
        <div className={styles.wrap}>
          {isVertical ? (
            <Image className={styles.el_img} src={src} fill alt="" />
          ) : (
            <Image
              className={styles.el_img}
              src={src}
              height={400}
              width={1240}
              alt=""
            />
          )}
        </div>
        <div className={styles.inner_con}>
          <div className={styles.inner_wrap}>
            <ul className={styles.list_wrap}>
              <li className={styles.list_el}>
                <span style={{ display: "flex", gap: "10px" }}>
                  <p className="text regular">Кейс</p>
                  <IconComponent src={icon1} width={20} height={20} />
                </span>
                <p className={"text big " + styles.case}>{jobCase}</p>
              </li>
              <li className={styles.list_el}>
                <span style={{ display: "flex", gap: "10px" }}>
                  <p className="text regular">Объект</p>
                  <IconComponent src={icon2} width={20} height={20} />
                </span>
                <p className="text regular">{object}</p>
              </li>
              <li className={styles.list_el}>
                <span style={{ display: "flex", gap: "10px" }}>
                  <p className="text regular">Вид работ</p>
                  <IconComponent src={icon2} width={20} height={20} />
                </span>
                <p className="text regular">{workType}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.slide_btn}>
        <Image src={arrowLeft.src} width={25} height={25} alt="" />
      </div>
    </Link>
  );
};

export default ProjectElement;
