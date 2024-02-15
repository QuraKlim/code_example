import IconComponent from "../../iconComponent/IconComponent";
import Popup from "../../popup/popup";
import styles from "./HeaderButton.module.scss";
import headerIcon from "@/shared/icons/header-icon.svg";
import headerIconDark from "@/shared/icons/ArrowIconSmallGray.svg";
import Image from "next/image";

interface IHeaderBtnProps {
  textColor: string;
}

const HeaderButton = ({ textColor }: IHeaderBtnProps) => {
  return (
    <Popup>
      <div
        className={"link " + styles.btn}
        style={{
          color: textColor,
        }}
      >
        <p className="regular-text">Получить консультацию</p>
        <div className={styles.btn_icon_wrapper}>
          <div className={styles.btn_flipper}>
            <Image
              alt="icon"
              src={textColor === "#fff" ? headerIcon : headerIconDark}
              height={24}
              width={24}
            />
            <Image
              alt="icon"
              src={textColor === "#fff" ? headerIcon : headerIconDark}
              height={24}
              width={24}
            />
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default HeaderButton;
