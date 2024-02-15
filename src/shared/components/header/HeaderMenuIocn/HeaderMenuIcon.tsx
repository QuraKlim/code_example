import IconComponent from "../../iconComponent/IconComponent";
import styles from "./HeaderMenuIcon.module.scss";
import closeIcon from "@/shared/icons/close-crosse.svg";
import headerMenuDark from "@/shared/icons/header-menu-dark.svg";
import headerMenuLight from "@/shared/icons/header-menu-light.svg";

export interface IHeaderMenuIconProps {
  textColor: string;
  onClick: Function;
  menuVisible: boolean;
}

const HeaderMenuIcon = ({
  textColor,
  onClick,
  menuVisible,
}: IHeaderMenuIconProps) => {
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className={styles.menu}
      style={{
        color: menuVisible ? "#000" : textColor,
      }}
    >
      <p className="text regular">{menuVisible ? "Закрыть" : "Меню"}</p>
      <IconComponent
        src={
          menuVisible
            ? closeIcon
            : textColor === "#fff"
            ? headerMenuLight
            : headerMenuDark
        }
        width={20}
        height={20}
      />
    </div>
  );
};

export default HeaderMenuIcon;
